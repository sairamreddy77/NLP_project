from flask import request, jsonify
from . import translate_bp
from services.nlp_services import tokenizer, model

@translate_bp.route('/translate', methods=['POST'])
def translate():
    try:
        text = request.json['text']
        tokenized = tokenizer([text], return_tensors='tf')
        out = model.generate(**tokenized, max_length=128)
        translated_text = tokenizer.decode(out[0], skip_special_tokens=True)
        
        return jsonify({'translated': translated_text})
    
    except Exception as e:
        print(f"Error occurred: {e}")
        return jsonify({'error': 'An error occurred while processing the request.'}), 500
