from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.views.decorators.csrf import csrf_protect
from io import BytesIO
from .functions.urlget import GetURLText
from .functions.main import WordAmount
from .functions.music import MusicLyrics
import json
import numpy

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