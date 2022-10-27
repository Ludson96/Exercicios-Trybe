-- -- Exercício 1: Utilizando o INNER JOIN, encontre as vendas nacionais (domestic_sales) e internacionais (international_sales) de cada filme.
USE pixar;
SELECT m.title, b.domestic_sales, b.international_sales
FROM movies m
INNER JOIN box_office b 
ON b.movie_id = m.id;

-- -- 🚀 Exercício 2: Utilizando o INNER JOIN, faça uma busca que retorne o número de vendas para cada filme que possui um número maior de vendas internacionais (international_sales) do que vendas nacionais (domestic_sales).
SELECT m.title, (box.domestic_sales + box.international_sales)
FROM pixar.box_office as box
INNER JOIN pixar.movies as m
ON box.movie_id = m.id
WHERE box.international_sales > box.domestic_sales;

-- -- 🚀 Exercício 3: Utilizando o INNER JOIN, faça uma busca que retorne os filmes e sua avaliação (rating) em ordem decrescente.
SELECT m.title, b.rating
FROM pixar.box_office AS b
INNER JOIN pixar.movies AS m
ON b.movie_id = m.id
ORDER BY rating DESC;