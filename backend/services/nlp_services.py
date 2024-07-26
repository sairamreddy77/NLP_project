from summarizer import Summarizer
from transformers import AutoTokenizer, TFAutoModelForSeq2SeqLM, pipeline

# Initialize the NLP models
summarizer = Summarizer()

model_checkpoint = "Helsinki-NLP/opus-mt-en-hi"
tokenizer = AutoTokenizer.from_pretrained(model_checkpoint)
model = TFAutoModelForSeq2SeqLM.from_pretrained(model_checkpoint)

senti_pipeline = pipeline('sentiment-analysis')
