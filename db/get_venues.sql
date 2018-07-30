SELECT *
FROM venues
    WHERE 
    'Hip-Hop' in (stype1, stype2, stype3)
    OR 'Top40s' in (stype1, stype2, stype3)
    OR 'Top40s' in (stype1, stype2, stype3)
    OR 'Hookah' in (vtype1, vtype2, vtype3)
    OR 'Hookah' in (vtype1, vtype2, vtype3)
    OR 'Hookah' in (vtype1, vtype2, vtype3);