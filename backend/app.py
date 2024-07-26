# backend/app.py

from flask import Flask
from flask_cors import CORS
from routes import summarize_bp, speak_bp, translate_bp, review_bp, correct_bp,generate_bp

app = Flask(__name__)
CORS(app,resources={r"/*": {"origins": "https://sairamreddy77.github.io"}})

# Register blueprints
app.register_blueprint(summarize_bp, url_prefix='/api')
app.register_blueprint(speak_bp, url_prefix='/api')
app.register_blueprint(translate_bp, url_prefix='/api')
app.register_blueprint(review_bp, url_prefix='/api')
app.register_blueprint(correct_bp, url_prefix='/api')
app.register_blueprint(generate_bp, url_prefix='/api')

if __name__ == '__main__':
    app.run(debug=True)
    
