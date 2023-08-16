import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";

export default function PokemonList(props) {
  const { pokemons } = props;
  console.log("entranding");
  console.log(pokemons);

  return (
    <FlatList
      styles={{ height: "100%", width: "100%" }}
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false} // Corregido aquí
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <Text>{item.name}</Text>}
      contentContainerStyle={styles.flatListContentContainer}
    />
  );
}

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
    fontSize: 16,
    height: "100%",
    width: "100%",
  },
});
