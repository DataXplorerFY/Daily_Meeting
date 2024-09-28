import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Home';
import CameraScreen from './src/CameraScreen';
import Summary from './src/Summary'; 
import FontLoader from './src/FontLoader';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CameraScreen" component={CameraScreen} />
        <Stack.Screen name="Summary" component = {Summary}/>
        <Stack.Screen name="FontLoader" component={FontLoader}/>

    
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

















