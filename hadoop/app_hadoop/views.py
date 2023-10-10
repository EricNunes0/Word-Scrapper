from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.views.decorators.csrf import csrf_protect
from django.views.generic import TemplateView
from io import BytesIO, StringIO
from .functions.urlget import GetURLText
from .functions.main import WordAmount
from .functions.music import MusicLyrics
import json
import pandas
import requests
from csv import writer, reader, QUOTE_NONNUMERIC

def index(request):
    if request.method == "GET":
        return render(request, 'wordScrapper/pages/index.html')
    elif request.method == "POST":
        inputType = request.POST.get("type")
        textInput = request.POST.get(f"{inputType}-input")
        checkboxes = request.POST.getlist("checkboxes")
        if inputType == "url":
            textInput = GetURLText().get(textInput)
        elif inputType == "music":
            artist = request.POST.get("author")
            if artist:
                textInput = MusicLyrics().get(textInput, artist)
            else:
                textInput = MusicLyrics().get(textInput, None)
        
        print("『🔴』Tipo de input:", inputType, "『🔵』Texto para converter:", textInput)
        print("『📦』Checkboxes:", checkboxes)

        if textInput == None:
            textInput = "Nenhum resultado encontrado"

        stdin = BytesIO(bytes(textInput, 'utf-8'))
        mr_job = WordAmount(['--no-conf', '-'])
        mr_job.sandbox(stdin=stdin)
        results = []
        wordCount = 0
        wordRepeat = 0
        wordBiggest = ""
        wordMostRepeat = {
            "word": "",
            "length": 0
        }
        limit = request.POST.get("limit")
        if not request.POST.get("limit"):
            limit = 20
        with mr_job.make_runner() as runner:
            runner.run()
            for key, value in mr_job.parse_output(runner.cat_output()):
                if "removeNumbers" in checkboxes:
                    if key.isnumeric():
                        continue
                if "limitLetters" in checkboxes:
                    if len(key) > int(limit):
                        continue
                results.append([key, value])
                wordCount = wordCount + 1
                if value >= 2:
                    wordRepeat = wordRepeat + 1
                if len(key) >= len(wordBiggest):
                    wordBiggest = key
                if value > wordMostRepeat["length"]:
                    wordMostRepeat["word"] = key
                    wordMostRepeat["length"] = value
        #return HttpResponse()
        json_input = json.dumps(textInput)
        json_string = json.dumps(results)
        json_wordCount = json.dumps(wordCount)
        json_wordRepeat = json.dumps(wordRepeat)
        json_wordBiggest = json.dumps(wordBiggest)
        json_wordMostRepeated = json.dumps(wordMostRepeat)
        return render(request, 'wordScrapper/pages/index.html', {'textInput': json_input, 'results': json_string, 'wordCount': json_wordCount, 'wordRepeat': json_wordRepeat, 'wordBiggest': json_wordBiggest, 'wordMostRepeated': json_wordMostRepeated})

class wordsheetReader(TemplateView):
    template_name = 'wordsheet/pages/index.html'
    def get(self, request):
        return render(request, self.template_name)
    def post(self, request):
        acceptedExtensions = [".xls", ".xlsx", ".xlsm", ".xlsb", ".csv"]

        extension = request.POST.get("extension")
        if not extension in acceptedExtensions:
            return self.returnRenderError(req = request, error = f"Formato inválido: {extension}")

        inputType = request.POST.get("type")
        if not inputType:
            return self.returnRenderError(req = request, error = f"Forma de envio não especificado!")
        
        checkExt = self.checkExtension
        if inputType == "file":
            file = request.FILES["file"]
            title = file
            print(title)
            if checkExt(extension, ".xls") or checkExt(extension, ".xlsx") or checkExt(extension, ".xlsm") or checkExt(extension, ".xlsb"):
                read = BytesIO(file.read())
            elif checkExt(extension, ".csv"):
                read = StringIO(file.read().decode('latin-1'))
            else:
                return self.returnRenderError(req = request, error = f"Este não é um formato válido!")
        elif inputType == "url":
            file = request.POST.get("url")
            title = "URL"
            try:
                response = requests.get(file)
            except Exception as e:
                print(e)
                return self.returnRenderError(req = request, error = f"Não foi possível encontrar um arquivo {extension} nesta URL!")
            
            if checkExt(extension, ".xls") or checkExt(extension, ".xlsx") or checkExt(extension, ".xlsm") or checkExt(extension, ".xlsb"):
                read = BytesIO(response.content)
            elif checkExt(extension, ".csv"):
                read = StringIO(response.content.decode('latin-1'))
            else:
                return self.returnRenderError(req = request, error = f"Este não é um formato válido!")
        rows = request.POST.get("rows")
        if len(rows) == 0:
            rows = 999
        rows = int(rows)
        delimiter = request.POST.get("delimiter")

        if checkExt(extension, ".xls"):
            try:
                data = pandas.read_excel((read), engine="xlrd", nrows=rows)
            except Exception as e:
                print(e)
                return self.returnRenderError(req = request, error = f"Não foi possível processar este arquivo!")
        elif checkExt(extension, ".xlsx") or checkExt(extension, ".xlsm"):
            data = pandas.read_excel((read), engine="openpyxl", nrows=rows)
        elif checkExt(extension, ".xlsb"):
            data = pandas.read_excel((read), engine="pyxlsb", nrows=rows)
        elif checkExt(extension, ".csv"):
            data = pandas.read_csv((read), nrows=rows, delimiter=delimiter)
        #columns = data.columns.tolist()
        dataRows = data.head(n=rows)
        dataJsonStr = dataRows.to_json(orient='records')
        return render(request, self.template_name, {'planilha': dataJsonStr, 'title': title})

    def returnRenderError(self, req, error: str):
        return render(req, self.template_name, {"error": error})
    
    def checkExtension(self, var: str, string: str):
        return var == string