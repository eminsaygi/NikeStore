import React from 'react';
import {Image, TouchableOpacity, Button} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';

//Screens
import Home from '../screens/Home';
import {icons, COLORS, SIZES, FONTS} from '../constants';
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
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: 'NIKE STORE',
            headerTintColor: COLORS.lightGray,
            headerTitleStyle: {
              ...FONTS.navTitle,
            },
            headerLeft: ({onPress}) => (
              <TouchableOpacity
                style={{marginLeft: SIZES.padding}}
                onPress={onPress}>
                <Image
                  source={icons.menu}
                  resizeMode="contain"
                  style={{width: 25, height: 25}}></Image>
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity
                style={{marginStart: SIZES.padding}}
                onPress={() => console.log('Right button on pressed')}>
                <Image
                  source={icons.search}
                  style={{width: 30, height: 30}}></Image>
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
