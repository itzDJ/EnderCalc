import React from 'react';
import {StyleSheet, View, Text, SafeAreaView} from 'react-native';
import {useTheme} from '@react-navigation/native';

export default function HelpScreen() {
  const {colors} = useTheme();

  const styles = StyleSheet.create({
    background: {
      flex: 1,
      backgroundColor: colors.background,
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    title: {
      fontSize: 25,
      color: colors.text,
      textAlign: 'center',
    },
    text: {
      fontSize: 20,
      paddingLeft: 20,
      paddingRight: 20,
      color: colors.text,
    },
  });

  // "\u2022" is unicode for the bullet point character
  return (
    <SafeAreaView style={styles.background}>
      <View>
        <Text style={styles.title}>About</Text>
        <Text style={styles.text}>
          When an eye of ender is thrown, it essentially creates a line pointing
          to the stronghold. When two eyes of ender of thrown with decent space
          between them (at least 100 blocks), the lines will intersect. This app
          finds the intersection of the two lines which is approximately the
          location of the stronghold.
        </Text>
      </View>
      <View>
        <Text style={styles.title}>Instructions</Text>
        <Text style={styles.text}>
          {'\u2022'} Open the debug menu by pressing F3
        </Text>
        <Text style={styles.text}>{'\u2022'} Throw an eye of ender</Text>
        <Text style={styles.text}>
          {'\u2022'} When the eye stops moving, place the center of your
          crosshair on the center of the eye
        </Text>

        <Text style={styles.text}>
          {'\u2022'} Enter the X and Z coordinates of the eye
        </Text>

        <Text style={styles.text}>
          {'\u2022'} Enter the angle of the eye (the first number on facing
          direction)
        </Text>

        <Text style={styles.text}>
          {'\u2022'} Repeat for the second eye of ender and go to the estimated
          location
        </Text>
      </View>
    </SafeAreaView>
  );
}
