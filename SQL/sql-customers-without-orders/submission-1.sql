-- Write your query below

-- SELECT C.NAME
-- FROM CUSTOMERS C
-- LEFT JOIN ORDERS O ON C.ID = O.CUSTOMER_ID
-- WHERE O.ID IS NULL;

SELECT name
FROM customers
WHERE id NOT IN (SELECT customer_id FROM orders);