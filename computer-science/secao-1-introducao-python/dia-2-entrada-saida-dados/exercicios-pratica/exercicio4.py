import json
from collections import Counter


with open("books.json", "r") as file:
    data = json.load(file)


categories = []
for book in data:
    book_categories = book.get("categories", [])
    categories.extend(book_categories)

contador = Counter(categories)

print(contador["Java"])
