import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import About from '../screens/About';
import HomeStack from '../routes/homeStack';

const Drawer = createDrawerNavigator();

export default function RootDrawerNavigator() {

  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator useLegacyImplementation initialRouteName="Home">
        <Drawer.Screen
          name="Home"
          component={HomeStack}
          options={{ headerShown: false }}
        />
        <Drawer.Screen name="About" component={About} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
