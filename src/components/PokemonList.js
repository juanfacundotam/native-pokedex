import { View, ActivityIndicator, FlatList, StyleSheet, Platform } from "react-native";
import React from "react";
import PokemonCard from "./PokemonCard";

export default function PokemonList(props) {
  const { pokemons, loadPokemons, isNext } = props;

console.log(Platform)

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
      onEndReached={isNext && loadMore}
      onEndReachedThreshold={0.1}
      ListFooterComponent={isNext && (<ActivityIndicator size="large" style={styles.spinner} color="#AEAEAE"/>)}
    />
  );
}

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
    marginTop: Platform.OS === "android" ? 30 : 0,
    // fontSize: 16,
    // height: "100%",
    // width: "100%",
  },
  spinner: {
    marginTop: 20,
    marginBottom:  Platform.OS === "android" ? 90 : 60,
  }
});
