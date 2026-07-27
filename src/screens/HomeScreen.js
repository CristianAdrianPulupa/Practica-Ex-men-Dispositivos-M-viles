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
import seleccion from "../data/seleccion.json";

const imagenes = {
  enner: require("../../assets/Enner.jpg"),
  caicedo: require("../../assets/Moises.jpg"),
  hincapie: require("../../assets/Piero.jpg"),
  pacho: require("../../assets/William.jpg"),
};
export default function HomeScreen() {
  return (
    <ScrollView style={styles.homeContainer}>
      <View style={styles.header}>
        <Image
          source={require("../../assets/ecuador-logo.png")}
          style={styles.homeLogo}
        />

        <Text style={styles.title}>{seleccion.nombre}</Text>
        <Text style={styles.subtitle}>{seleccion.apodo} {seleccion.bandera}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>⚽ Información del Equipo</Text>
        <Text style={styles.text}>
        {seleccion.descripcion}
        </Text>
      </View>

      <View style={styles.card}>
  <Text style={styles.cardTitle}>👥 Mejores goleadores</Text>

  {seleccion.goleadores.map((jugador, index) => (
    <View key={index}>
      <Text style={styles.cardTitle}>
      {jugador.nombre}
      </Text>
      <Text style={styles.item}>
        • {jugador.Edad} años
      </Text>
      <Text style={styles.item}>
        • {jugador.club}
      </Text>
      <Text style={styles.item}>
        • {jugador.posición}
      </Text>
    <Text style={styles.item}>
      • {jugador.numero}
      </Text>
      {imagenes[jugador.imagen] && (
        <Image
          source={imagenes[jugador.imagen]}
          style={styles.Imagenes}
        />
      )}
    </View>
  ))}
</View>

<View style={styles.card}>
  <Text style={styles.cardTitle}>📌 Datos básicos</Text>

  <Text style={styles.item}>
    • Confederación: {seleccion.confederacion}
  </Text>
  
  <Text style={styles.item}>
    • Entrenador actual: {seleccion.entrenador}
  </Text>

  <Text style={styles.item}>
    • Estadio: {seleccion.estadio}
  </Text>

  <Text style={styles.item}>
    • Fundación: {seleccion.fundacion}
  </Text>
  <Text style={styles.item}>
    • Capitán: {seleccion.fundacion}
  </Text>
  <Text style={styles.item}>
    • Fundación: {seleccion.fundacion}
  </Text>
</View>

<View style={styles.card}>
  <Text style={styles.cardTitle}>👥 Convocados destacados</Text>

  {seleccion.convocados.map((jugador, index) => (
    <Text key={index} style={styles.item}>
      • {jugador}
    </Text>
  ))}
</View>

<View style={styles.card}>
  <Text style={styles.cardTitle}>🏆 Participaciones mundialistas</Text>

  {seleccion.mundiales.map((mundial, index) => (
    <Text key={index} style={styles.item}>
      • {mundial}
    </Text>
  ))}
</View>
<View style={styles.card}>
  <Text style={styles.cardTitle}>🏆 Premios</Text>

  {seleccion.premios.map((premios, index) => (
    <Text key={index} style={styles.item}>
      • {premios}
    </Text>
  ))}
</View>
<TouchableOpacity
  style={styles.button}
  onPress={() =>
    Alert.alert(
      seleccion.textoBoton,
      seleccion.mensajeAlerta
    )
  }
>
  <Text style={styles.buttonText}>
    {seleccion.bandera} {seleccion.textoBoton}
  </Text>
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