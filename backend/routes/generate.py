from flask import request, jsonify
from . import generate_bp
from  services.gpt_service import tokenizer,model

@generate_bp.route('/generate', methods=['POST'])
def generate():
    data = request.get_json()
    text = data['text']
    input_ids=tokenizer.encode(text,return_tensors='tf')
    beam_output=model.generate(input_ids,max_length=100,num_beams=5,no_repeat_ngram_size=2,early_stopping=True)
    output=tokenizer.decode(beam_output[0],skip_special_tokens=True,clean_up_tokenization_spaces=True)
    res='.'.join(output.split('.')[:-1]) + '.'
    return jsonify({'generated': res})
