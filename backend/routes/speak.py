from flask import request
from . import speak_bp
import pyttsx3

@speak_bp.route('/speak', methods=['POST'])
def speak():
    text = request.json['text']
    text_speech = pyttsx3.init()
    text_speech.say(text)
    text_speech.runAndWait()
    return {'message': 'Speech synthesis complete'}


# add a function for male and female voice


