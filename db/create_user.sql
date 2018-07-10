INSERT INTO squsers
    ( 
    first, last, gender, bday_month, bday_year, vtype1, vtype2, vtype3, stype1, stype2, stype3, email
    )
VALUES 
    (   
    $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12
    )
RETURNING *