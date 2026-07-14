CREATE TABLE books (
  id INTEGER,
  title TEXT,
  author TEXT
);
-- Do not modify above this line --



ALTER TABLE BOOKS ADD COLUMN PUBLISHED_YEAR INTEGER;
ALTER TABLE BOOKS RENAME COLUMN ID TO ISBN;
ALTER TABLE BOOKS DROP COLUMN AUTHOR;







-- Do not modify below this line --
SELECT column_name, data_type, column_default
FROM information_schema.columns
WHERE table_name = 'books'
ORDER BY column_name;
