import { Text, View, StyleSheet } from "react-native";
import Button from "@/components/Button";
import Input from "@/components/Input";

export default function App() {
  return (
    <View style={styles.container} >
      <Input placeholder=""/>

      <Button text=""
        idButton={45}
        isAtivado={false}
        activeOpacity={0.6}
      />

      <Button text=""
        idButton={45}
        isAtivado={true}
        activeOpacity={0.7}
      />

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
