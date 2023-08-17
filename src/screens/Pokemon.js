import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { getPokemonDetailsApi } from "../api/pokemon";

export default function Pokemon(props) {
  const {
    route: { params },
    navigation,
  } = props;
  const [pokemon, setPokemon] = useState(null);
  console.log(params.id);

  useEffect(() => {
    (async () => {
      try {
        const response = await getPokemonDetailsApi(params.id);
        console.log(response);
      } catch (error) {
        navigation.goBack();
      }
    })();
  }, [params.id]);

  return (
    <View>
      <Text>Estamos en un POKEMON</Text>
    </View>
  );
}
