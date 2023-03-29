import json  # json é um modulo que vem embutido, porém precisamos importá-lo


with open("pokemons.json") as file:
    # content = file.read()  # leitura do arquivo
    pokemons = json.load(file)["results"]  # o conteúdo é transformado
    # for pokemon in pokemons:
    print(pokemons[0])
