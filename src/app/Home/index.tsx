import { Text, View, StyleSheet, ScrollView } from "react-native";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { useState } from "react";

export default function App() {

  const [contadorA, setContadorA] = useState(0)
  const [vitoriaA, setVitoriaA] = useState(0)

  const [contadorB, setContadorB] = useState(0)
  const [vitoriaB, setVitoriaB] = useState(0)

  function fnAumentarContador(
    numero: number,
    contador: number,
    setContador: any,
    vitoria: number,
    setVitoria: any
  ) {
    const ponto = contador + numero

    if (ponto >= 12 || ponto < 0) {
      setVitoria(vitoria + 1)
      setContador(0)
    } else {
      setContador(ponto)
    }
  }

  function fnZerarContador(setContador: any) {
    setContador(0)
  }

  function fnZerarVitoria(setVitoria: any) {
    setVitoria(0)
  }

  return (

    <View style={styles.tela}>
      <ScrollView>

        <Text style={styles.title}>
          TIME A x TIME B
        </Text>



        <View style={styles.container}>

          {/* TIME A */}
          <View style={styles.card}>

            <Text style={styles.nomeTime}>
              TIME A
            </Text>

            <Text style={{ fontSize: 40, textAlign: 'center', marginBottom: 10 }}>
              Vitórias: {vitoriaA}
            </Text>

            <Input
              placeholder=""
              value={contadorA.toString()}
              readOnly
            />

            <View style={styles.containerButtons}>
              <Button
                text="+1"
                isAtivado={true}
                activeOpacity={0.7}
                onPress={() =>
                  fnAumentarContador(1, contadorA, setContadorA, vitoriaA, setVitoriaA)
                }
              />

              <Button
                text="+3"
                isAtivado={true}
                activeOpacity={0.7}
                onPress={() =>
                  fnAumentarContador(3, contadorA, setContadorA, vitoriaA, setVitoriaA)
                }
              />

              <Button
                text="-1"
                isAtivado={false}
                activeOpacity={0.7}
                onPress={() =>
                  fnAumentarContador(-1, contadorA, setContadorA, vitoriaA, setVitoriaA)
                }
              />

              <Button
                text="Zerar"
                isAtivado={false}
                activeOpacity={0.7}
                onPress={() =>
                  fnZerarContador(setContadorA)
                }
              />

              <Button
                text="Zerar Vitórias"
                isAtivado={false}
                activeOpacity={0.7}
                onPress={() =>
                  fnZerarVitoria(setVitoriaA)
                }
              />

            </View>
          </View>

          {/* TIME B */}
          <View style={styles.card}>

            <Text style={styles.nomeTime}>
              TIME B
            </Text>

            <Text style={{ fontSize: 40, textAlign: 'center', marginBottom: 10 }}>
              Vitórias: {vitoriaB}
            </Text>

            <Input
              placeholder=""
              value={contadorB.toString()}
              readOnly
            />

            <View style={styles.containerButtons}>
              <Button
                text="+1"
                isAtivado={true}
                activeOpacity={0.7}
                onPress={() =>
                  fnAumentarContador(1, contadorB, setContadorB, vitoriaB, setVitoriaB)
                }
              />

              <Button
                text="+3"
                isAtivado={true}
                activeOpacity={0.7}
                onPress={() =>
                  fnAumentarContador(3, contadorB, setContadorB, vitoriaB, setVitoriaB)
                }
              />

              <Button
                text="-1"
                isAtivado={false}
                activeOpacity={0.7}
                onPress={() =>
                  fnAumentarContador(-1, contadorB, setContadorB, vitoriaB, setVitoriaB)
                }
              />

              <Button
                text="Zerar"
                isAtivado={false}
                activeOpacity={0.7}
                onPress={() =>
                  fnZerarContador(setContadorB)
                }
              />

              <Button
                text="Zerar Vitórias"
                isAtivado={false}
                activeOpacity={0.7}
                onPress={() =>
                  fnZerarVitoria(setVitoriaB)
                }
              />

            </View>
          </View>

        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingTop: 60,
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "800",
    color: "#111",
    textAlign: "center",
    marginBottom: 30,
  },

  container: {
    gap: 20,
  },

  card: {
    width: "100%",
    backgroundColor: "#FFF",
    borderRadius: 20,
    padding: 18,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 4,
  },

  nomeTime: {
    fontSize: 20,
    fontWeight: "700",
    color: "#222",
    textAlign: "center",
    marginBottom: 16,
  },

  containerButtons: {
    gap: 12,
    marginTop: 16,
  },
});