import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, ScrollView, ActivityIndicator, Image, Text } from "react-native";
import { Card, Icon } from "react-native-elements";
import styles from "../styles/style";
import fetchMargarita from "../service/fetchMargarita";
import colors from "../styles/colors";
import { useNavigation } from '@react-navigation/native';
import ButtonProps from "../components/Button";

const Delivery = () => {
  const navigation = useNavigation();
  const [margaritas, setMargaritas] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMargaritasHttp = async () => {
    const data = await fetchMargarita();
    setMargaritas(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchMargaritasHttp();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={colors.black} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ButtonProps
        onPress={() => navigation.navigate('Home')} 
        mode="contained"
        color={colors.primary}
        icon={() => <Icon name="home" size={20} color={colors.white} />} 
      >
        Home
      </ButtonProps>
      <ScrollView>
        {margaritas.map((item) => (
          <Card key={item.idDrink}>
            <Image
              source={{ uri: item.strDrinkThumb }}
              style={styles.image}
            />
            <Card.Divider />
            <Card.Title>{item.strDrink}</Card.Title>
            <Card.Divider />
            <Text style={styles.strInstructions}>{item.strInstructions}</Text>
            <Card.Divider />
            <Text style={styles.strInstructions}>Ingredientes: {item.strIngredient1} - {item.strIngredient2} - {item.strIngredient3}</Text>
            <ButtonProps
              onPress={() =>
                navigation.navigate("Details", { postId: item.idDrink })
              }
              mode="contained"
              style={styles.focus}
              color={colors.primary}
              icon={() => <Icon name="info" size={20} color={colors.white} />}
            >
              Ver Detalhes
            </ButtonProps>
          </Card>
        ))}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
};

export default Delivery;