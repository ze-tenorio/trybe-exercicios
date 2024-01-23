import json

with open('pokemons.json') as file:
    pokemons = json.load(file)["results"]

grass_pokemons = []
for pokemon in pokemons:
    if "Grass" in pokemon["type"]:
        grass_pokemons.append(pokemon)

with open('grass_pokemons.json', mode='w') as file:
    json_to_write = json.dumps(grass_pokemons)
    file.write(json_to_write)