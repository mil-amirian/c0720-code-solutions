select 
    "categories"."name" as "Category",
    count("filmCategory".*) as "NumberOfFilms"

from "categories"

join "filmCategory" using ("categoryId")
join "castMembers" using ("filmId")
join "actors" using ("actorId")

where "actors"."firstName" = 'Lisa'

group by "categories"."categoryId"


