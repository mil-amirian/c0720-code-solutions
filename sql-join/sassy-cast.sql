select
    "a"."firstName",
    "a"."lastName",
    "f"."title" as "Film"
from 
    "actors" as "a"

join "castMembers" using ("actorId")
join "films" as "f" using ("filmId") 

where "f"."title" = 'Jersey Sassy'