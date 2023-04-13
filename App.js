import * as React from 'react';
import { useFonts } from 'expo-font';
import Navigator from './routes/drawer';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Nunito-Bold': require('./assets/fonts/Nunito-Bold.ttf'),
    'Nunito-Regular': require('./assets/fonts/Nunito-Regular.ttf'),
  });

  return <Navigator />;
}
