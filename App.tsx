import React from 'react';
import HomeScreen from './screens/HomeScreen';
import UserScreen from './screens/UserScreen';
import ProfileScreen from './screens/ProfileScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text } from 'react-native';

function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
          statusBarColor: "blue",
          headerStyle: {
            backgroundColor: "blue",
          },
          headerTintColor: "white",
          headerTitleAlign: "center"
        }}>
        <Stack.Screen name="Home" component={HomeScreen} options={{}} />
        <Stack.Screen name="User" component={UserScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{
          headerShown: true,
          headerBackVisible: false,
          headerLeft: () => {
            return (
              <Text style={
                {
                  color: "white",
                  marginLeft: 10
                }
              }>Hi</Text>
            )
          }
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;
