import React, { useEffect, useState } from "react";
import { View, ActivityIndicator, Image, FlatList } from "react-native";
import { Card, Icon } from "react-native-elements";
import styles from "../styles/style";
import fetchFilterCategory from "../service/fetchFilterCategory";
import colors from "../styles/colors";
import ButtonProps from "../components/Button";
import { StatusBar } from "expo-status-bar";

export default function FilterCategory({ route, navigation }) {
  const { strCategory } = route.params;
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);

  const Category = async () => {
    try {
      const data = await fetchFilterCategory(strCategory);
      setCategory(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    Category();
  }, [strCategory]);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={colors.darkBlue} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ButtonProps
        onPress={() => navigation.goBack()} 
        mode="contained"
        color={colors.primary}
        icon={() => <Icon name="leftcircleo" 
          size={20} 
          color={colors.white} 
          type="antdesign" />} 
      >
        Voltar
      </ButtonProps>
      <FlatList
        style={styles.card}
        contentContainerStyle={{ flexGrow: 1 }}
        data={category}
        renderItem={({ item }) => (
          <Card key={item.idDrink}>
            <Image source={{ uri: item.strDrinkThumb }} style={styles.image} />
            <Card.Divider />
            <Card.Title>{item.strDrink}</Card.Title>
            <Card.Divider />
            <ButtonProps
              onPress={() => navigation.navigate("Details", { postId: item.idDrink })}
              mode="contained"
              style={styles.focus}
              color={colors.primary}
              icon={() => <Icon name="info" size={20} color={colors.white} />}
            >
              Ver Detalhes
            </ButtonProps>
          </Card>
        )}
        keyExtractor={item => item.idDrink.toString()}
      />

      <StatusBar style="auto" />
    </View>
  );
}
