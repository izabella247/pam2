import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function Home({ navigation }) {
  const servicos = ['Cabelo & Penteados', 'Manicure & Pedicure', 'Maquilhagem', 'Sobrancelhas & Cílios'];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.greeting}>Olá, Seja Bem-Vinda!</Text>
      <Text style={styles.subtext}>Escolha o serviço desejado:</Text>

      {servicos.map((servico, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.cardText}>{servico}</Text>
          <TouchableOpacity style={styles.cardButton}>
            <Text style={styles.cardButtonText}>Agendar</Text>
          </TouchableOpacity>
        </View>
      ))}

      <TouchableOpacity style={styles.logoutButton} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.logoutText}>Sair da Conta</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#FAF6F0',
    flexGrow: 1,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4A3E3D',
  },
  subtext: {
    fontSize: 15,
    color: '#8C7A6B',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#FFF',
    padding: 18,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E6D7C3',
  },
  cardText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4A3E3D',
  },
  cardButton: {
    backgroundColor: '#D4A373',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
  },
  cardButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 13,
  },
  logoutButton: {
    marginTop: 30,
    alignItems: 'center',
  },
  logoutText: {
    color: '#C05C5C',
    fontWeight: 'bold',
  },
});