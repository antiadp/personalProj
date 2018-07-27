UPDATE users
SET first = $2, 
    last = $3, 
    email = $4, 
    vtype1 = $5, 
    vtype2 = $6, 
    vtype3 =  $7, 
    stype1 = $8, 
    stype2 = $9, 
    stype3 = $10
    
WHERE id = $1;