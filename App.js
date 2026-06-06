import React, { useEffect, useRef, useState } from "react";
import { Animated } from "react-native";
import SplashScreen from "./src/screens/SplashScreen";
import HomeScreen from "./src/screens/HomeScreen";
import { styles } from "./src/styles/styles";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  const splashOpacity = useRef(new Animated.Value(1)).current;
  const homeOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const timer = setTimeout(() => {
      Animated.timing(splashOpacity, {
        toValue: 0,
        duration: 600,
        useNativeDriver: true,
      }).start(() => {
        setShowSplash(false);

        Animated.timing(homeOpacity, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }).start();
      });
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <SplashScreen opacity={splashOpacity} />;
  }

  return (
    <Animated.View style={[styles.homeWrapper, { opacity: homeOpacity }]}>
      <HomeScreen />
    </Animated.View>
  );
}