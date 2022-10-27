-- -- Exercício 8: Altere a classificação da tabela box_office para 9.0 de todos os filmes que lucraram mais de 400 milhões no mercado interno.
UPDATE box_office
SET rating = 9.0
WHERE domestic_sales > 400000000;

-- -- Exercício 9: Altere a classificação da tabela box_office para 6.0 de todos os filmes que lucraram menos de 300 milhões no mercado internacional e mais de 200 milhões no mercado interno.
UPDATE Pixar.BoxOffice
SET rating = 6.0
WHERE international_sales < 300000000 AND domestic_sales > 200000000;

-- -- Exercício 10: Exclua da tabela movies todos os filmes com menos de 100 minutos de duração.
SELECT * FROM Pixar.Movies
WHERE length_minutes < 100; -- Verifico quais ids tem relação.

DELETE FROM Pixar.BoxOffice
WHERE movie_id IN (1, 6, 7, 8, 12, 16, 20); -- deleto os ids.

DELETE FROM Pixar.Movies
WHERE length_minutes < 100; -- faço o que foi pedido.