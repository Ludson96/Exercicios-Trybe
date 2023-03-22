#  // Faça um programa que solicite o nome de uma pessoa usuária
# e imprima-o na vertical.

nome = input("Digite seu nome: ")

for letra in nome:
    print(letra)

# Exercício 2
numeros = input("Digite os números separados por espaço: ")
soma = 0

for numero in numeros.split():
    if numero.isdigit():
        soma += int(numero)
    else:
        print(f"Erro ao somar valores, {numero} é um valor inválido")

print(f"A soma dos valores válidos é {soma}")
