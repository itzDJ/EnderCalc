// TODO: Add icon and splash screen

// import { StatusBar } from "expo-status-bar";
import {Button, useColorScheme} from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import HelpScreen from './screens/HelpScreen';

const myTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
    text: 'black',
  },
};

export default function App() {
  const Stack = createNativeStackNavigator();
  const colorScheme = useColorScheme();

  return (
    <NavigationContainer theme={colorScheme === 'dark' ? DarkTheme : myTheme}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: colorScheme === 'dark' ? 'black' : 'white',
          },
        }}>
        <Stack.Screen
          name="Minecraft Stronghold Calculator"
          component={HomeScreen}
          options={({navigation}) => ({
            headerRight: () => (
              <Button
                onPress={() => navigation.navigate('Instructions')}
                title="?"
                color="gray"
              />
            ),
          })}
        />
        <Stack.Screen name="Instructions" component={HelpScreen} />
      </Stack.Navigator>
      {/* <StatusBar style="auto" /> */}
    </NavigationContainer>
  );
}
