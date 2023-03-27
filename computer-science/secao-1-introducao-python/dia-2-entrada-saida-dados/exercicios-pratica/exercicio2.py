import random

words = ["abacaxi", "banana", "laranja", "manga", "morango"]

word = random.choice(words)

scrambled_word = "".join(random.sample(word, len(word)))

tentativas = 3

while tentativas > 0:
    resposta = input(f"{scrambled_word}  qual é a palavra? ")

    if resposta == word:
        print("Parabéns, você acertou")
        break
    else:
        tentativas -= 1
    if tentativas == 0:
        print(f"Suas tentativas acabaram. Fim de jogo! A palavra era {word}")
    else:
        print(f"Resposta errada você tem {tentativas} tentativas")
