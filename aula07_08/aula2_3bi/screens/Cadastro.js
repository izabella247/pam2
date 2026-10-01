import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function Cadastro({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar Conta</Text>
      <Text style={styles.subtitle}>Cadastre-se para realizar os seus agendamentos</Text>

      <Text style={styles.label}>Nome Completo</Text>
      <TextInput placeholder="Maria Silva" placeholderTextColor="#aaa" style={styles.input} />

      <Text style={styles.label}>Telemóvel / WhatsApp</Text>
      <TextInput placeholder="(00) 99999-9999" placeholderTextColor="#aaa" keyboardType="phone-pad" style={styles.input} />

      <Text style={styles.label}>E-mail</Text>
      <TextInput placeholder="maria@email.com" placeholderTextColor="#aaa" style={styles.input} />

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>FINALIZAR CADASTRO</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF6F0',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#4A3E3D',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#8C7A6B',
    textAlign: 'center',
    marginBottom: 25,
  },
  label: {
    color: '#4A3E3D',
    fontWeight: '600',
    marginTop: 8,
    marginBottom: 4,
  },
  input: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#E6D7C3',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#D4A373',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 15,
  },
});