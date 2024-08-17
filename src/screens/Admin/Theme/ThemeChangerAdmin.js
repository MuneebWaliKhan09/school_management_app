import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {changeTheme} from '../../../store/Theme/ThemeAdmin';

const colors = [
  {label: 'Theme 1', value: {background: '#003366'}}, // Dark Blue
  {label: 'Theme 2', value: {background: '#005f73'}}, // Deep Teal
  {label: 'Theme 3', value: {background: '#0082c8'}}, // Bright Blue
  {label: 'Theme 4', value: {background: '#006400'}}, // Dark Green
  {label: 'Theme 5', value: {background: '#4b4b4b'}}, // Dark Gray
  {label: 'Theme 6', value: {background: '#004d40'}}, // Deep Green Teal
  {label: 'Theme 7', value: {background: '#005f6b'}}, // Muted Blue Teal
  {label: 'Theme 8', value: {background: '#003d34'}}, // Deep Green
  {label: 'Theme 9', value: {background: '#003b5c'}}, // Midnight Blue
  {label: 'Theme 10', value: {background: '#0066cc'}}, // Medium Blue
  {label: 'Theme 11', value: {background: '#002f3c'}}, // Dark Blue Gray
  {label: 'Theme 12', value: {background: '#003b46'}}, // Dark Blue Teal
  {label: 'Theme 13', value: {background: '#004d40'}}, // Deep Teal
  {label: 'Theme 14', value: {background: '#004e92'}}, // Dark Blue
  {label: 'Theme 15', value: {background: '#005b96'}}, // Medium Blue
];



const ThemeChangerAdmin = () => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.themeAdmin);

  const handleColorChange = value => {
    dispatch(changeTheme(value));
  };

  const renderColorSwatch = ({item}) => (
    <TouchableOpacity
      key={item.label}
      style={[styles.colorSwatch, {backgroundColor: item.value.background}]}
      onPress={() => handleColorChange(item.value)}
    />
  );

  return (
    <View style={[styles.container, {backgroundColor: theme.background}]}>
      <Text style={styles.title}>
        Select Theme Color:
      </Text>
      <View style={styles.palette}>
        {colors.map(color => (
          <TouchableOpacity
            key={color.label}
            style={[
              styles.colorSwatch,
              {backgroundColor: color.value.background},
            ]}
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

export default ThemeChangerAdmin;
