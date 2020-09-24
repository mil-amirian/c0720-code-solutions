select 
    "countries"."name" as "Country",
    count("cities".*) as "CitiesInCountry"
from 
    "countries"
join 
    "cities" using ("countryId")

group by "countries"."countryId"