import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, ScrollView, ActivityIndicator, Image } from "react-native";
import { Card, Icon } from "react-native-elements";
import styles from "../styles/style";
import fetchAlcoholic from "../service/fetchAlcoholic";
import colors from "../styles/colors";
import { useNavigation } from "@react-navigation/native";
import ButtonProps from "../components/Button";

const Alcoholic = () => {
  const navigation = useNavigation();
  const [alcoholics, setAlcoholics] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAlcoholicHttp = async () => {
    const data = await fetchAlcoholic();
    setAlcoholics(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchAlcoholicHttp();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={colors.darkYellow} />
      </View>
    );
  }

  return (
    <View style={styles.containerStyle}>
      <ButtonProps
        onPress={() => navigation.navigate("Home")}
        mode="contained"
        color={colors.primary}
        icon={() => <Icon name="home" size={20} color={colors.white} />}
      >
        Home
      </ButtonProps>
      <ScrollView>
        {alcoholics.map((item) => (
          <Card key={item.idDrink}>
            <Image source={{ uri: item.strDrinkThumb }} style={styles.image} />
            <Card.Divider />
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

export default Alcoholic;
