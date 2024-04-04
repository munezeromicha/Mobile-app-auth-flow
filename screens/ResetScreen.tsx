import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Image } from 'react-native';
import ellipse from '../assets/Ellipse.png';
import ellipse3 from '../assets/Ellipse3.png';
const Reset: React.FC = () => {
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
      <Text style={styles.title}>Reset password</Text>
      <TextInput
        style={styles.input}
        placeholder="Type old password"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Type new password"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm new password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Reset</Text>
      </TouchableOpacity>
      <Image style={styles.ellipse3} source={ellipse3} />
    </View>
  );
};

export default Reset;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    //   backgroundColor: '#f2f2f2',
    //   paddingHorizontal: 20,

    },
    ellipse: {
      flex: 1,
      position: 'absolute',
      top: -70,
      left: -20,
    },
    ellipse3: {
      position: 'absolute',
      bottom: 0,
      right: -6,
    },
    title: {
        textAlign: 'center',
      fontSize: 36,
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
      fontSize: 24,
      fontWeight: 'bold',
    },
  });