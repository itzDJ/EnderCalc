import React, { useState } from "react";
import {
  Text,
  SafeAreaView,
  Keyboard,
  TouchableWithoutFeedback,
  View,
  StyleSheet,
} from "react-native";
import { useTheme } from "@react-navigation/native";

import NumberInput from "../NumberInput";
import calculate from "../formula";

export default function HomeScreen() {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    background: {
      flex: 1,
      backgroundColor: colors.background,
      justifyContent: "space-evenly",
      flexDirection: "column",
    },
    text: {
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "center",
      color: colors.text,
    },
    textBox: {
      fontSize: 18,
      borderWidth: 1,
      borderColor: colors.text,
      textAlign: "center",
      height: 40,
      color: colors.text,
    },
  });

  const [x1, set_x1] = useState("");
  const [z1, set_z1] = useState("");
  const [f1, set_f1] = useState("");
  const [x2, set_x2] = useState("");
  const [z2, set_z2] = useState("");
  const [f2, set_f2] = useState("");

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.background}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
          }}
        >
          <View
            style={{ flex: 2, padding: 10, justifyContent: "space-evenly" }}
          >
            <Text style={styles.text}>First throw</Text>
            <NumberInput
              style={styles.textBox}
              maxLength={10}
              maxDecimalDigits={3}
              placeholder="x1"
              onValueChange={set_x1}
            />
            <NumberInput
              style={styles.textBox}
              maxLength={10}
              maxDecimalDigits={3}
              placeholder="z1"
              onValueChange={set_z1}
            />
            <NumberInput
              style={styles.textBox}
              maxLength={7}
              maxDecimalDigits={1}
              placeholder="f1"
              onValueChange={set_f1}
            />
          </View>

          <View style={{ flex: 0.5, justifyContent: "space-evenly" }}>
            <Text />
            <Text style={styles.text}>X</Text>
            <Text style={styles.text}>Z</Text>
            <Text style={styles.text}>F</Text>
          </View>

          <View
            style={{ flex: 2, padding: 10, justifyContent: "space-evenly" }}
          >
            <Text style={styles.text}>Second throw</Text>
            <NumberInput
              style={styles.textBox}
              maxLength={10}
              maxDecimalDigits={3}
              placeholder="x2"
              onValueChange={set_x2}
            />
            <NumberInput
              style={styles.textBox}
              maxLength={10}
              maxDecimalDigits={3}
              placeholder="z2"
              onValueChange={set_z2}
            />
            <NumberInput
              style={styles.textBox}
              maxLength={7}
              maxDecimalDigits={1}
              placeholder="f2"
              onValueChange={set_f2}
            />
          </View>
        </View>

        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            paddingBottom: 10,
            alignItems: "center",
          }}
        >
          <Text style={styles.text}>{checkBoxes(x1, z1, f1, x2, z2, f2)}</Text>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

function checkBoxes(x1, z1, f1, x2, z2, f2) {
  // Check if all inputs are filled and are numbers
  if (
    x1 &&
    z1 &&
    f1 &&
    x2 &&
    z2 &&
    f2 &&
    !Number.isNaN(Number(x1)) &&
    !Number.isNaN(Number(z1)) &&
    !Number.isNaN(Number(f1)) &&
    !Number.isNaN(Number(x2)) &&
    !Number.isNaN(Number(z2)) &&
    !Number.isNaN(Number(f2))
  ) {
    return "Stronghold is around " + calculate(x1, z1, f1, x2, z2, f2);
  }
  return "Enter coordinates to both throws";
}
