import { Text, View, StyleSheet } from "react-native";
import Button from "@/components/Button";

export default function App() {
  return (
    <View style={styles.container} >
      <Text style={styles.texto}>Olá</Text>
      <Button text="" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  texto: {
    backgroundColor: "tomato",
    fontSize: 24,
    color: "white",
    fontWeight: 700,
    padding: 50,
    borderRadius: 100
  }
})
