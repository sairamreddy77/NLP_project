from flask import request, jsonify
from . import review_bp
from services.nlp_services import senti_pipeline

@review_bp.route('/review', methods=['POST'])
def review():
    text = request.json['text']
    label = senti_pipeline(text)[0]['label']
    score = senti_pipeline(text)[0]['score']
    return jsonify({'label': label, 'score': score })
