import React from "react";
import { View, Image, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "../styles/style";
import ButtonProps from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import colors from "../styles/colors";
import creativity from "../assets/creativity.png";


const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.containerApp}>
        <Text style={styles.title}>Delivery</Text>
        <View>
          <Text style={styles.subTitle}>App</Text>
        </View>
      </View>
      <Image source={creativity} style={styles.imageHome} />
      <View style={styles.containerHome}>
        <ButtonProps
          onPress={() => navigation.navigate("BottonRoutes")}
          mode="contained"
          color={colors.primary}
          icon={() => (
            <Icon name="list-outline" size={20} color={colors.white} />
          )}
        >
          Delivery
        </ButtonProps>
        <ButtonProps
          onPress={() => navigation.navigate("TopRoutes")}
          mode="contained"
          color={colors.primary}
          icon={() => (
            <Icon name="list-outline" size={20} color={colors.white} />
          )}
        >
          Category
        </ButtonProps>
      </View>
    </View>
  );
};

export default Home;
