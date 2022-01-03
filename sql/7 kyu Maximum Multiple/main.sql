/* from solutions */
CREATE OR REPLACE FUNCTION findMaxMultiple (divisor INTEGER, bound INTEGER)
RETURNS INTEGER AS $$
BEGIN
    WHILE (bound > 0)
    LOOP
        IF bound % divisor = 0 THEN
            return bound;
        END IF;
        bound := bound - 1;
    END LOOP;
END
$$ LANGUAGE plpgsql;

SELECT findMaxMultiple(divisor, bound) as res from max_multiple