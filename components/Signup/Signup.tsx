import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import ellipse from '../../assets/Ellipse.png';

const Signup: React.FC = () => {
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
      <Text style={styles.title}>SignUp</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
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
      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
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
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
      marginTop: 70

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
      color: '#A53DFF',
      fontFamily: 'Work Sans'
    },
    input: {
        padding: 10,
      width: 330,
      height: 50,
      borderBottomWidth: 1,
      borderColor: '#A53DFF',
      borderRadius: 0,
      paddingHorizontal: 10,
      marginVertical: 10,
    },
    button: {
      width: 330,
      height: 49,
      backgroundColor: '#A53DFF',
      borderRadius: 8,
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
  });