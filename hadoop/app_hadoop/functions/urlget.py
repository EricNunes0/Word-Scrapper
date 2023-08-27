import requests
import urllib.request
import json
from bs4 import BeautifulSoup
import trafilatura

class GetURLText():
    def get_fallback(self, url):
        soup = BeautifulSoup(url, 'html.parser')
        text = soup.find_all(text=True)
        cleaned_text = ''
        blacklist = [
            '[document]',
            'noscript',
            'header',
            'html',
            'meta',
            'head', 
            'input',
            'script',
            'style',
            'div'
        ]
        for item in text:
            if item.parent.name not in blacklist:
                cleaned_text += '{} '.format(item)

        cleaned_text = cleaned_text.replace('\t', '')
        return cleaned_text.strip()

    def get(self, url_link):
        downloaded_url = trafilatura.fetch_url(url= url_link)
        try:
            a = trafilatura.extract(downloaded_url, output_format="json", with_metadata=True, include_comments = False, date_extraction_params={'extensive_search': True, 'original_date': True})
        except AttributeError:
            a = trafilatura.extract(downloaded_url, output_format="json", with_metadata=True, date_extraction_params={'extensive_search': True, 'original_date': True})
        if a:
            json_output = json.loads(a)
            return json_output['text']
        else:
            try:
                try:
                    resp = requests.get(url = url_link)
                except:
                    return None

                if resp.status_code == 200:
                    return self.get_fallback(resp.content)
                else:
                    return None
            except requests.models.MissingSchema:
                return None