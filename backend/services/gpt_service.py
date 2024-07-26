from transformers import TFGPT2LMHeadModel , GPT2Tokenizer

tokenizer=GPT2Tokenizer.from_pretrained('gpt2')
model=TFGPT2LMHeadModel.from_pretrained('gpt2',pad_token_id=tokenizer.eos_token_id)
