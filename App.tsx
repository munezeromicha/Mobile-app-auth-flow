import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Signin';
import Recover from './components/RecoverPassword/Recover';
import Reset from './components/ResetPassword/Reset';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <StatusBar style="auto" />  */}
      {/* <Reset /> */}
      {/* <Recover /> */}
      {/* <Login /> */}
      <Signup />
    </View>
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
