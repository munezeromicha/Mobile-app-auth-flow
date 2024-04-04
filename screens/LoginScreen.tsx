import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import ellipse from '../assets/Ellipse.png';
import ellipse3 from '../assets/Ellipse3.png';
type LoginScreenProps = {
  navigation: StackNavigationProp<any, 'LoginScreen'>;
};

const Login: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Implement your signup logic here
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <View style={styles.container}>
      <Image style={styles.ellipse} source={ellipse} />
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Recover')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <View style={styles.socialContainer}>
        <Text style={styles.socialText}>Signin with social</Text>
        <View style={styles.socialButtons}>
          <View style={styles.socialButton}>
            {/* Google button icon */}
          </View>
          <View style={styles.socialButton}>
            {/* Facebook button icon */}
          </View>
          <View style={styles.socialButton}>
            {/* Facebook button icon */}
          </View>
        </View>
      </View>

      <Image style={styles.ellipse3} source={ellipse3} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      // backgroundColor: '#f2f2f2',
      // paddingHorizontal: 20,

    },
    ellipse: {
      flex: 1,
      position: 'absolute',
      top: -70,
      left: -20,
    },
    title: {
        textAlign: 'center',
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      color: '#A53DFF'
    },
    input: {
        padding: 10,
      width: 300,
      height: 50,
      borderBottomWidth: 1,
      borderColor: '#A53DFF',
      borderRadius: 0,
      paddingHorizontal: 10,
      marginVertical: 10,
    },
    button: {
      width: 300,
      height: 50,
      backgroundColor: '#A53DFF',
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
    socialContainer: {
      marginTop: 60,
      alignItems: 'center',
    },
    socialText: {
      fontSize: 16,
      marginBottom: 10,
      color: '#333',
    },
    socialButtons: {
      marginTop: 30,
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '70%',
    },
    socialButton: {
      width: 50,
      height: 50,
      borderRadius: 25,
      backgroundColor: '#ddd', // Light gray background for social buttons
      justifyContent: 'center',
      alignItems: 'center',
    },
    ellipse3: {
      position: 'absolute',
      bottom: 0,
      right: -6,
    }
  });