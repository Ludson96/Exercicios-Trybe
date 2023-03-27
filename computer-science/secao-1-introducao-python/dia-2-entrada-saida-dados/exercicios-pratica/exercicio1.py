nome = input("Digite seu nome: ")

for i in range(len(nome)):
    print(nome[:len(nome)-i])
