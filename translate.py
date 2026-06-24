import json
import time
from deep_translator import GoogleTranslator

# Initialize translator
translator = GoogleTranslator(source='en', target='gu')

def translate_dict(d):
    translated_d = {}
    for k, v in d.items():
        if isinstance(v, dict):
            translated_d[k] = translate_dict(v)
        elif isinstance(v, str):
            try:
                # To prevent rate limiting
                time.sleep(0.05)
                res = translator.translate(v)
                translated_d[k] = res
                print(f"Translated: {v[:20]}... -> {res[:20]}...")
            except Exception as e:
                print(f"Error translating '{v}': {e}")
                translated_d[k] = v # fallback to original
        else:
            translated_d[k] = v
    return translated_d

with open('src/locales/en.json', 'r', encoding='utf-8') as f:
    en_data = json.load(f)

print("Starting translation...")
gu_data = translate_dict(en_data)

with open('src/locales/gu.json', 'w', encoding='utf-8') as f:
    json.dump(gu_data, f, ensure_ascii=False, indent=2)

print("Translation completed.")
