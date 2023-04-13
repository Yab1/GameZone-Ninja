import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import About from '../screens/About'

const Stack = createNativeStackNavigator();

function AboutStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AboutStack;
