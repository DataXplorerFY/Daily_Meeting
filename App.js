import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Home';
import Signup from './src/Signup';
import Login from './src/Login';
import CameraScreen from './src/CameraScreen';
import ButtonHome from './src/ButtonHome';
import Summary from './src/Summary'; 

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="CameraScreen" component={CameraScreen} />
        <Stack.Screen name="Summary" component = {Summary}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;