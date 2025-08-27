import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
  const [contador, setContador] = useState(0);

  const handleIncrement = () => {
    setContador(contador + 1);
  };

  const handleDecrement = () => {
    contador > 0 && setContador(contador - 1);
  };

  const handleReset = () => {
    setContador(0);
  };

  const contadorFormatado = String(contador).padStart(6, "0");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>StatTrak™</Text>
      <Text style={styles.counterText}>{contadorFormatado}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleIncrement}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleDecrement}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.resetButton}
        onPress={handleReset}
      >
        <Text style={styles.button}>Zerar</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#37353E",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#D3DAD9",
    marginBottom: 20,
  },

  counterBox: {
    backgroundColor: "#000",
    marginBottom: 40,
    shadowColor: "#FF8C00",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 10,
  },

  counterText: {
    backgroundColor: "#000",
    fontSize: 64,
    borderWidth: 3,
    paddingVertical: 20,
    paddingHorizontal: 50,
    borderRadius: 8,
    borderColor: "#888",
    fontWeight: "bold",
    color: "#FF4500",
    fontFamily: "monospace",
    textShadowColor: "#FF8C00",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 8,
  },

  buttonContainer: {
    flexDirection: "row-reverse",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 20,
  },

  button: {
    color: "#fff",
    padding: 10,
    borderRadius: 100,
  },

  buttonText: {
    backgroundColor: "#888",
    width: 70,
    height: 70,
    padding: 10,
    borderRadius: 100,
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
  },

  incrementButton: {
    backgroundColor: "#228B22",
  },

  decrementButton: {
    backgroundColor: "#8B0000",
  },

  resetButton: {
    backgroundColor: "#888",
  },
});
