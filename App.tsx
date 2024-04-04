import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SignupScreen from './screens/SignupScreen';
import LoginScreen from './screens/LoginScreen';
import RecoverScreen from './screens/RecoverScreen';
import ResetScreen from './screens/ResetScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    // <View style={styles.container}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Recover" component={RecoverScreen} />
        <Stack.Screen name="Reset" component={ResetScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
