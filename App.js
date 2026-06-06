import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.badge}>DÉCIMO SEMESTRE</Text>
        <Text style={styles.title}>
          PROGRAMACIÓN PARA DISPOSITIVOS MÓVILES-SIR
        </Text>
        <Text style={styles.subtitle}>
          S10-P1 | React Native con Expo
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>📱 Información de la materia</Text>
        <Text style={styles.text}>
          Esta aplicación fue creada como práctica de instalación y uso de React
          Native con Expo.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>🚀 Tecnologías utilizadas</Text>
        <Text style={styles.item}>• React Native</Text>
        <Text style={styles.item}>• Expo Go</Text>
        <Text style={styles.item}>• Node.js</Text>
        <Text style={styles.item}>• Visual Studio Code</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>✅ Estado del proyecto</Text>
        <Text style={styles.text}>
          Instalación completada correctamente y aplicación ejecutándose en un
          dispositivo móvil.
        </Text>

        <View style={styles.progressBackground}>
          <View style={styles.progressFill} />
        </View>

        <Text style={styles.progressText}>100% completado</Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Mi primera app con React Native 🚀</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#07111f",
    padding: 20,
  },
  header: {
    backgroundColor: "#0ea5e9",
    padding: 25,
    borderRadius: 22,
    marginTop: 25,
    marginBottom: 20,
  },
  badge: {
    alignSelf: "flex-start",
    backgroundColor: "#07111f",
    color: "#67e8f9",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 15,
    fontWeight: "bold",
    marginBottom: 15,
  },
  title: {
    color: "white",
    fontSize: 26,
    fontWeight: "bold",
    lineHeight: 34,
  },
  subtitle: {
    color: "#e0f2fe",
    fontSize: 17,
    marginTop: 10,
  },
  card: {
    backgroundColor: "#111827",
    padding: 20,
    borderRadius: 18,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#1f2937",
  },
  cardTitle: {
    color: "#22d3ee",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    color: "#e5e7eb",
    fontSize: 16,
    lineHeight: 24,
  },
  item: {
    color: "#f9fafb",
    fontSize: 16,
    marginBottom: 6,
  },
  progressBackground: {
    backgroundColor: "#374151",
    height: 12,
    borderRadius: 10,
    marginTop: 15,
  },
  progressFill: {
    backgroundColor: "#22d3ee",
    width: "100%",
    height: 12,
    borderRadius: 10,
  },
  progressText: {
    color: "#67e8f9",
    marginTop: 8,
    fontWeight: "bold",
    textAlign: "right",
  },
  footer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 40,
  },
  footerText: {
    color: "#94a3b8",
    fontSize: 15,
  },
});