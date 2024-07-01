import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '../../../store/Theme/ThemeTeacher';

const colors = [
  {label: 'Theme 1', value: {background: '#4774FF'}},
  {label: 'Theme 2', value: {background: '#900C3F'}},
  {label: 'Theme 3', value: {background: '#581845'}},
  {label: 'Theme 4', value: {background: '#200906'}},
  {label: 'Theme 5', value: {background: '#063970'}},
];

const ThemeChangeTeacher = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.themeTeacher);

  const handleColorChange = (value) => {
    dispatch(changeTheme(value));
  };

  const renderColorSwatch = ({ item }) => (
    <TouchableOpacity
      key={item.label}
      style={[styles.colorSwatch, { backgroundColor: item.value.background }]}
      onPress={() => handleColorChange(item.value)}
    />
  );

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.title, { color: theme.text }]}>Select Theme Color:</Text>
      <View style={styles.palette}>
        {colors.map((color) => (
          <TouchableOpacity
            key={color.label}
            style={[styles.colorSwatch, { backgroundColor: color.value.background }]}
            onPress={() => handleColorChange(color.value)}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    marginBottom: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  palette: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 20,
  },
  colorSwatch: {
    width: 50,
    height: 50,
    borderRadius: 25,
    margin: 10,
    borderWidth: 2,
    borderColor: '#ccc',
  },
  sampleText: {
    fontSize: 16,
  },
});

export default ThemeChangeTeacher;
