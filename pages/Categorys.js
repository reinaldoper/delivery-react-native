import React, { useEffect, useState } from "react";
import { View, ActivityIndicator, FlatList } from "react-native";
import { Card, Icon } from "react-native-elements";
import styles from "../styles/style";
import fetchCategorys from "../service/fetchCategorys";
import ButtonProps from "../components/Button";
import colors from "../styles/colors";
import { useNavigation } from "@react-navigation/native";

const Categorys = () => {
  const navigation = useNavigation();
  const [categorys, setCategorys] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCategories = async () => {
      const response = await fetchCategorys();
      setCategorys(response);
      setLoading(false);
    };
    loadCategories();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={colors.dark} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ButtonProps
        onPress={() => navigation.navigate("Home")}
        mode="contained"
        color={colors.primary}
        icon={() => <Icon name="home" size={20} color={colors.white} />}
      >
        Home
      </ButtonProps>
      <FlatList
        style={styles.card}
        data={categorys}
        keyExtractor={(item) => item.strCategory}
        contentContainerStyle={{ flexGrow: 1 }}
        renderItem={({ item }) => (
          <Card>
            <Card.Title>{item.strCategory}</Card.Title>
            <Card.Divider />
            <ButtonProps
              onPress={() =>
                navigation.navigate("Filter", { strCategory: item.strCategory })
              }
              mode="contained"
              style={styles.focus}
              color={colors.red}
              icon={() => <Icon name="info" size={20} color={colors.white} />}
            >
              Ver Detalhes
            </ButtonProps>
          </Card>
        )}
      />
    </View>
  );
};

export default Categorys;
