from flask import Flask, request, jsonify
from googletrans import Translator

app = Flask(__name__)
translator = Translator()

@app.route('/process', methods=['POST'])
def process_data():
    try:
        content = request.json.get('content', "")
        target_language = request.json.get('lang', 'af')  # default to Afrikaans
        
        if not content:
            return jsonify(""), 200
        
        translated_text = translator.translate(content, dest=target_language).text
        
        return jsonify(translated_text), 200
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
