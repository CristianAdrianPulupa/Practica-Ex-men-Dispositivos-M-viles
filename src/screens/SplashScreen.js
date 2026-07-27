import React from "react";
import { Animated, Image, Text } from "react-native";
import { styles } from "../styles/styles";

export default function SplashScreen({ opacity }) {
  return (
    <Animated.View style={[styles.splashContainer, { opacity }]}>
      <Image
        source={require("../../assets/ecuador-logo.png")}
        style={styles.logo}
      />
      <Text style={styles.splashText}>Ecuador - La Tri</Text>
      <Text style={styles.splashSubText}>Selección Ecuatoriana de Fútbol</Text>
    </Animated.View>
  );
}