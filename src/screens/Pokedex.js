import { View, Text, ScrollView, StyleSheet, Image } from 'react-native'
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
      setPokemons([...pokemons, pokemonsArray])
      console.log(pokemons)
    } catch (error) {
      console.error(error)
    }
  }
  return (
      <ScrollView style={styles.scrollContainer}>
        {pokemons.map((pokemon, index) => (
          <View key={index} style={styles.pokemonContainer}>
            <Image
              source={{ uri: pokemon.imagen }}
              style={styles.pokemonImage}
            />
            <View style={styles.pokemonText}>
              <Text>{pokemon.name}</Text>
              <Text>{pokemon.type}</Text>
              <Text>{pokemon.order}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  scrollContainer: {
    // flexDirection: "row",
    // flexWrap: "wrap",
  },
  pokemonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  pokemonText: {
    marginLeft: 2,
  },
  pokemonImage: {
    width: 100,
    aspectRatio: 1,
  },
});