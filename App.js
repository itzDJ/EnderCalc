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
          })}
        />
        <Stack.Screen name="Help" component={HelpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
