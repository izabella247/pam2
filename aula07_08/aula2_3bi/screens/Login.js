import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3059/3059518.png' }}
        style={styles.logo}
      />

      <Text style={styles.title}>Studio Beauty</Text>
      <Text style={styles.subtitle}>Agende o seu momento de cuidado</Text>

      <Text style={styles.label}>E-mail</Text>
      <TextInput
        placeholder="cliente@email.com"
        placeholderTextColor="#aaa"
        style={styles.input}
      />

      <Text style={styles.label}>Senha</Text>
      <TextInput
        placeholder="••••••••"
        placeholderTextColor="#aaa"
        secureTextEntry
        style={styles.input}
      />

      <TouchableOpacity style={styles.primaryButton} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.primaryButtonText}>ENTRAR</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.secondaryButton} onPress={() => navigation.navigate('Cadastro')}>
        <Text style={styles.secondaryButtonText}>Criar Conta / Novo Cliente</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF6F0',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  logo: {
    width: 90,
    height: 90,
    marginBottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4A3E3D',
    letterSpacing: 1,
  },
  subtitle: {
    fontSize: 14,
    color: '#8C7A6B',
    marginBottom: 30,
  },
  label: {
    alignSelf: 'flex-start',
    color: '#4A3E3D',
    fontWeight: '600',
    marginTop: 10,
    marginBottom: 5,
  },
  input: {
    width: '100%',
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#E6D7C3',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    fontSize: 15,
  },
  primaryButton: {
    width: '100%',
    backgroundColor: '#D4A373',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 15,
  },
  primaryButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: 1,
  },
  secondaryButton: {
    marginTop: 15,
  },
  secondaryButtonText: {
    color: '#8C7A6B',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});