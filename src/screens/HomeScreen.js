import React from "react";
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import { styles } from "../styles/styles";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.homeContainer}>
      <View style={styles.header}>
        <Image
          source={require("../../assets/ecuador-logo.png")}
          style={styles.homeLogo}
        />

        <Text style={styles.title}>Selección Ecuatoriana</Text>
        <Text style={styles.subtitle}>La Tri 🇪🇨</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>⚽ Información del equipo</Text>
        <Text style={styles.text}>
          La Selección Ecuatoriana de Fútbol representa oficialmente al Ecuador
          en competiciones internacionales. Es conocida popularmente como La Tri.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>📌 Datos básicos</Text>
        <Text style={styles.item}>• Confederación: CONMEBOL</Text>
        <Text style={styles.item}>• Entrenador actual: Sebastián Beccacece</Text>
        <Text style={styles.item}>
          • Estadio: Estadio Rodrigo Paz Delgado, Quito
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>👥 Convocados destacados</Text>
        <Text style={styles.item}>• Enner Valencia</Text>
        <Text style={styles.item}>• Moisés Caicedo</Text>
        <Text style={styles.item}>• Piero Hincapié</Text>
        <Text style={styles.item}>• Willian Pacho</Text>
        <Text style={styles.item}>• Pervis Estupiñán</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>🏆 Participaciones mundialistas</Text>
        <Text style={styles.item}>• Corea-Japón 2002</Text>
        <Text style={styles.item}>• Alemania 2006</Text>
        <Text style={styles.item}>• Brasil 2014</Text>
        <Text style={styles.item}>• Qatar 2022</Text>
        <Text style={styles.item}>• Estados Unidos, México y Canadá 2026</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          Alert.alert(
            "¡Vamos Ecuador!",
            "La Tri representa el orgullo del fútbol ecuatoriano. Ecuador participará en el Mundial 2026 y buscará seguir haciendo historia."
          )
        }
      >
        <Text style={styles.buttonText}>🇪🇨 ¡Vamos Ecuador!</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Programación para Dispositivos Móviles - Décimo Semestre
        </Text>
        <Text style={styles.footerText}>
          App creada con React Native y Expo Go
        </Text>
      </View>
    </ScrollView>
  );
}