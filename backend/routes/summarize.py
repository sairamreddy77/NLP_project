from flask import request, jsonify
from . import summarize_bp
from services.nlp_services import summarizer

@summarize_bp.route('/summarize', methods=['POST'])
def summarize():
    data = request.get_json()
    example_text = data['text']
    num_sentences = int(data.get('num_sentences', 10))  
    min_length = int(data.get('min_length', 50))  

    result = summarizer(example_text, num_sentences=num_sentences, min_length=min_length)
    summary = ''.join(result)
    return jsonify({'original_text': example_text, 'summary': summary})
