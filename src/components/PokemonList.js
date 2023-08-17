import { View, ActivityIndicator, FlatList, StyleSheet } from "react-native";
import React from "react";
import PokemonCard from "./PokemonCard";

export default function PokemonList(props) {
  const { pokemons, loadPokemons } = props;

  const loadMore = () => {
    loadPokemons();
  }

  console.log(pokemons);

  return (
    <FlatList
      // styles={{ height: "100%", width: "100%" }}
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false} // Para que no aparezca la barra de scroll
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <PokemonCard pokemon={item}/>}
      contentContainerStyle={styles.flatListContentContainer}
      onEndReached={loadMore}
      onEndReachedThreshold={0.1}
      ListFooterComponent={<ActivityIndicator size="large" style={styles.spinner} color="#AEAEAE"/>}
    />
  );
}

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
    // fontSize: 16,
    // height: "100%",
    // width: "100%",
  },
  spinner: {
    marginTop: 20,
    marginBottom: 60,
  }
});
