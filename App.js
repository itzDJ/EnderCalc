// TODO Turn the numbers on the home page into subscripts
// TODO Add Minecraft font
// TODO For Android: Add app icon, add splash screen, and keep device in portrait mode

import {Button, useColorScheme} from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import HelpScreen from './screens/HelpScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const colorScheme = useColorScheme();

  return (
    <NavigationContainer
      theme={colorScheme === 'light' ? DefaultTheme : DarkTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="EnderCalc"
          component={HomeScreen}
          options={({navigation}) => ({
            headerRight: () => (
              <Button
                onPress={() => navigation.navigate('Help')}
                title="?"
                color="gray"
              />
            ),
            headerLeft: () => (
              // TODO Add a camera icon instead of the word "Scan"
              /*
                * TODO Add a feature to use OCR to scan the f3 menu for coords:
                * Click the "Scan" button
                * The onPress should call a function (from another file) that does all of the work
                * Scans the f3 menu for coords (instead of taking a picture of the screen)
                * Returns the coords to the app
                * The app then does the math and displays the results
                * */
              <Button
                onPress={() => console.log('This will open the camera to scan f3 for coords')}
                title="Scan"
                color="gray"
              />
            ),
          })}
        />
        <Stack.Screen name="Help" component={HelpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
