import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const UserProfile = ({ dataUser }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: dataUser?.avatar || '' }} style={styles.avatar} />
      <Text style={styles.name}>{dataUser?.fullName}</Text>
      <Text style={styles.username}>@{dataUser?.username}</Text>
      <Text style={styles.email}>{dataUser?.email}</Text>
      <Text style={styles.role}>Role: {dataUser?.role}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  username: {
    fontSize: 18,
    color: 'gray',
  },
  email: {
    fontSize: 16,
    color: 'blue',
  },
  role: {
    fontSize: 16,
    color: 'green',
  },
});

export default UserProfile;
