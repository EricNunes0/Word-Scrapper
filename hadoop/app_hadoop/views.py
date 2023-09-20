from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.views.decorators.csrf import csrf_protect
from io import BytesIO
from .functions.urlget import GetURLText
from .functions.main import WordAmount
import json

def index(request):
    if request.method == "GET":
        return render(request, 'wordScrapper/pages/index.html')
    elif request.method == "POST":
        inputType = request.POST.get("type")
        textInput = request.POST.get(f"{inputType}-input")
        print("『🔴』Tipo de input:", inputType, "『🔵』Texto para converter:", textInput)

        if inputType == "url":
            textInput = GetURLText().get(textInput)
        
        if textInput == None:
            textInput = "Nenhum resultado encontrado"

        stdin = BytesIO(bytes(textInput, 'utf-8'))
        mr_job = WordAmount(['--no-conf', '-'])
        mr_job.sandbox(stdin=stdin)
        results = []
        wordCount = 0
        wordRepeat = 0
        wordBiggest = ""
        with mr_job.make_runner() as runner:
            runner.run()
            for key, value in mr_job.parse_output(runner.cat_output()):
                results.append([key, value])
                wordCount = wordCount + 1
                if value >= 2:
                    wordRepeat = wordRepeat + 1
                if len(key) >= len(wordBiggest):
                    wordBiggest = key
        #return HttpResponse()
        json_input = json.dumps(textInput)
        json_string = json.dumps(results)
        json_wordCount = json.dumps(wordCount)
        json_wordRepeat = json.dumps(wordRepeat)
        json_wordBiggest = json.dumps(wordBiggest)
        return render(request, 'wordScrapper/pages/index.html', {'textInput': json_input, 'results': json_string, 'wordCount': json_wordCount, 'wordRepeat': json_wordRepeat, 'wordBiggest': json_wordBiggest})