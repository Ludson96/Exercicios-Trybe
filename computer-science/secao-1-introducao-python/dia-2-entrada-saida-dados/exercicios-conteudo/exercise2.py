with open("file.txt", mode="r") as file:
    reprovado = []
    for nota in file:
        student = nota.split(" ")
        if int(student[1]) < 6:
            reprovado.append(student[0] + "\n")
    print(reprovado)
    file.close()

with open('reprovados.txt', mode='w') as file:
    file.writelines(reprovado)
    print(reprovado)
    file.close()
