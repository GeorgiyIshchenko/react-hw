from movies.models import Movie
from random import randint

# to paste into manage.py shell

def generate_films():
    for i in range(100):
        Movie.objects.create(title=f"Film {i}", release_date=f"2023-01-{randint(1, 31)}", price=randint(1, 100) * 100)

    
generate_films()
