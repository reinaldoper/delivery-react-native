import React, { useEffect, useState } from "react";
import { View, ActivityIndicator, Image } from "react-native";
import { Text, Card, Icon } from "react-native-elements";
import styles from "../styles/style";
import fetchCocktailDetails from "../service/fetchDetails";
import colors from "../styles/colors";
import ButtonProps from "../components/Button";

export default function DetailsMargarita({ route, navigation }) {
  const { postId } = route.params;
  const [details, setDetails] = useState();

  const Details = async () => {
    const data = await fetchCocktailDetails(postId);
    setDetails(data);
  };

  useEffect(() => {
    Details();
  }, [postId]);

  if (!details) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={colors.darkBlue} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Card>
        <Image source={{ uri: details.strDrinkThumb }} style={styles.image} />
        <Card.Divider />
        <Card.Title>{details.strDrink}</Card.Title>
        <Card.Divider />
        <Text style={styles.strInstructions}>{details.strInstructions}</Text>
        <ButtonProps
          onPress={() => navigation.goBack()}
          mode="contained"
          color={colors.primary}
          icon={() => <Icon name="home" size={20} color={colors.white} />}
        >
          Voltar
        </ButtonProps>
      </Card>
    </View>
  );
}
