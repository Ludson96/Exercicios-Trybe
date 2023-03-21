def maior1(x, y):
    if x > y:
        return x
    return y


def media2(lists):
    new_list = 0
    for list in lists:
        new_list += list
    return new_list / len(lists)


def asteristico3(n):
    for linha in range(n):
        return n * "*"


def maior_caracteres4(listas):
    print(max(listas, key=len))


def paint_costs(area):
    can_price = 80
    required_liters = area / 3
    required_cans = required_liters // 18
    if required_liters % 18:
        required_cans += 1
    return required_cans, required_cans * can_price
# //

print(paint_costs(100))
