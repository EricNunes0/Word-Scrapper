from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.views.decorators.csrf import csrf_protect
from io import BytesIO
from .functions.urlget import GetURLText
from .functions.main import WordAmount
import json

def wordScrapper(request):
    return render(request, 'wordScrapper/pages/index.html')

def wordScrapperResult(request):
    if request.method == "POST":
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
        with mr_job.make_runner() as runner:
            runner.run()
            for key, value in mr_job.parse_output(runner.cat_output()):
                #print("RODOU TUDO", key, value)
                results.append([key, value])
        #return HttpResponse()
        json_input = json.dumps(textInput)
        json_string = json.dumps(results)
        #print(json_input)
        return render(request, 'wordScrapper/pages/result.html', {'textInput': json_input, 'results': json_string})