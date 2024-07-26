from flask import request, jsonify
from . import correct_bp
from services.gramformer_service import gf

@correct_bp.route('/correct', methods=['POST'])
def correct():
    try:
        data = request.get_json()
        text = data['text']
        max_candidates = int(data.get('max', 10))  

        corrected = gf.correct(text, max_candidates=max_candidates)
        corrected_text = list(corrected)[0] if corrected else ''
        return jsonify({'corrected': corrected_text})
    
    except Exception as e:
        print(f"Error occurred: {e}")
        return jsonify({'error': 'An error occurred while processing the request.'}), 500
