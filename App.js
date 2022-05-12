import React from 'react';
import {Image, ToucableOpacity} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';

//Screens
import {Home} from './screens';
import {icons, COLORS, SIZES, FONTS} from './constants';
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: 'transparent',
  },
};

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'SHOE SELECTOR',
            headerTintColor: COLORS.lightGray,
            headerTitleStyle: {
              ...FONTS.navTitle,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
