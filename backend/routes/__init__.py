from flask import Blueprint

summarize_bp = Blueprint('summarize', __name__)
speak_bp = Blueprint('speak', __name__)
translate_bp = Blueprint('translate', __name__)
review_bp = Blueprint('review', __name__)
correct_bp = Blueprint('correct', __name__)
generate_bp=Blueprint('generate',__name__)

from .summarize import *
from .speak import *
from .translate import *
from .review import *
from .correct import *
from .generate import *
