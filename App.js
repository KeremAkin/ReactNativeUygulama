import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import ColorPalette from './screens/ColorPalette';
import { createStackNavigator } from '@react-navigation/stack';
import Hooks from './screens/Hooks';
import Form from './screens/Form';
import Home from './screens/Home';

const Stack = createStackNavigator(); //stackNavigator oluşturma
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* İstenilen ekranların stack içine aktarılması.*/}
        {/* Bu ekranlardan ilk olarak ilk eklenen ekran gözükecektir  */}
        <Stack.Screen name="Ana Sayfa" component={Home} />
        <Stack.Screen
          name="ColorPalette"
          component={ColorPalette}
          options={({ route }) => ({ title: route.params.paletteName })}
          //Açılacak ekranın başlığının seçilen renk paletine göre belirlenmesi
        />
        <Stack.Screen name="Hooks" component={Hooks} />
        <Stack.Screen name="Form" component={Form} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
