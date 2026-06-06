import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    backgroundColor: "#FFCC00",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  logo: {
    width: 190,
    height: 190,
    resizeMode: "contain",
    marginBottom: 25,
  },

  splashText: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#003DA5",
    textAlign: "center",
  },

  splashSubText: {
    fontSize: 18,
    color: "#EF3340",
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "center",
  },

  homeWrapper: {
    flex: 1,
    backgroundColor: "#07111f",
  },

  homeContainer: {
    flex: 1,
    backgroundColor: "#07111f",
  },

  header: {
    backgroundColor: "#FFCC00",
    paddingTop: 55,
    paddingBottom: 35,
    alignItems: "center",
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
  },

  homeLogo: {
    width: 135,
    height: 135,
    resizeMode: "contain",
    marginBottom: 15,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#003DA5",
    textAlign: "center",
  },

  subtitle: {
    fontSize: 22,
    color: "#EF3340",
    fontWeight: "bold",
    marginTop: 6,
  },

  card: {
    backgroundColor: "#111827",
    marginHorizontal: 20,
    marginTop: 20,
    padding: 20,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#1f2937",
  },

  cardTitle: {
    color: "#FFCC00",
    fontSize: 21,
    fontWeight: "bold",
    marginBottom: 12,
  },

  text: {
    color: "#e5e7eb",
    fontSize: 16,
    lineHeight: 25,
  },

  item: {
    color: "#f9fafb",
    fontSize: 16,
    marginBottom: 9,
    lineHeight: 23,
  },

  button: {
    backgroundColor: "#003DA5",
    marginHorizontal: 20,
    marginTop: 25,
    padding: 17,
    borderRadius: 16,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#FFCC00",
  },

  buttonText: {
    color: "#ffffff",
    fontSize: 19,
    fontWeight: "bold",
  },

  extraCard: {
    backgroundColor: "#1e293b",
    marginHorizontal: 20,
    marginTop: 20,
    padding: 20,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: "#FFCC00",
  },

  extraTitle: {
    color: "#FFCC00",
    fontSize: 21,
    fontWeight: "bold",
    marginBottom: 12,
  },

  extraPhrase: {
    color: "#FFCC00",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 15,
    fontStyle: "italic",
    lineHeight: 23,
  },

  footer: {
    alignItems: "center",
    marginTop: 28,
    marginBottom: 40,
    paddingHorizontal: 20,
  },

  footerText: {
    color: "#94a3b8",
    fontSize: 14,
    textAlign: "center",
    marginBottom: 5,
  },
});