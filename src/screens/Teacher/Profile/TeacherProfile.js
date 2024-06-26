import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const TeacherProfile = ({ exampleTeacher }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: exampleTeacher.avatar }} style={styles.avatar} />
      <Text style={styles.name}>{exampleTeacher.fullName}</Text>
      <Text style={styles.username}>@{exampleTeacher.username}</Text>
      <Text style={styles.email}>{exampleTeacher.email}</Text>
      <Text style={styles.school}>School: {exampleTeacher.school}</Text>
      <Text style={styles.subjects}>Subjects: {exampleTeacher.subjects.join(', ')}</Text>
      <Text style={styles.bio}>{exampleTeacher.bio}</Text>
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
  school: {
    fontSize: 16,
    color: 'green',
  },
  subjects: {
    fontSize: 16,
    color: 'purple',
  },
  bio: {
    fontSize: 16,
    color: 'black',
  },
});

export default TeacherProfile;
