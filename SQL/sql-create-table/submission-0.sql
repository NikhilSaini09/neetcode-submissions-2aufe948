
CREATE TABLE VIDEOS (
    ID INTEGER,
    NAME TEXT,
    CREATED_AT DATE,
    PUBLISHED BOOLEAN
);






-- Do not modify below this line --
SELECT table_name, column_name, data_type
FROM information_schema.columns
WHERE table_name = 'videos';
