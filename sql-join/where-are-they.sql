select
    "a"."line1",
    "c"."name" as "City",
    "a"."district",
    "co"."name" as "Country"
from 
    "addresses" as "a",
    "cities" as "c"
join 
    "countries" as "co" using ("countryId");
