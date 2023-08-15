import { View, Text } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import React, {useState, useEffect} from 'react'
import { getPokemonApi, getPokemonDetailsByUrlApi } from '../api/pokemon';

export default function Pokedex() {
  const [pokemons, setPokemons] = useState([])
  console.log(pokemons)
  useEffect(()=>{
    (async () => {
      await loadPokemons();
    })();
  },[])

  const loadPokemons = async (url) => {
    try {
      const response = await getPokemonApi();
      const pokemonsArray = [];
      for await (const pokemon of response.results) {
        const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url);

        pokemonsArray.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types[0].type.name,
          order: pokemonDetails.order,
          imagen:
            pokemonDetails.sprites.other["official-artwork"].front_default,
        })

      }
      setPokemons([...pokemons, ...pokemonsArray])
      console.log(pokemons)
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <SafeAreaView>
      <Text>Pokedex</Text>
    </SafeAreaView>
  )
}