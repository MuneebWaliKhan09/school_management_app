import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {changeTheme} from '../../../store/Theme/ThemeAdmin';

const colors = [
  { label: 'Theme 1', value: { background: '#4774FF' } }, // Blue
  { label: 'Theme 2', value: { background: '#900C3F' } }, // Dark Red
  { label: 'Theme 3', value: { background: '#581845' } }, // Dark Purple
  { label: 'Theme 4', value: { background: '#200906' } }, // Dark Brown
  { label: 'Theme 5', value: { background: '#063970' } }, // Dark Blue
  { label: 'Theme 6', value: { background: '#1D3557' } }, // Prussian Blue
  { label: 'Theme 7', value: { background: '#457B9D' } }, // Steel Blue
  { label: 'Theme 8', value: { background: '#2A9D8F' } }, // Persian Green
  { label: 'Theme 9', value: { background: '#E76F51' } }, // Burnt Sienna
  { label: 'Theme 10', value: { background: '#264653' } }, // Charcoal
  { label: 'Theme 11', value: { background: '#6A994E' } }, // Moss Green
  { label: 'Theme 12', value: { background: '#D4A5A5' } }, // Pastel Pink
  { label: 'Theme 13', value: { background: '#FFB703' } }, // Vibrant Orange
  { label: 'Theme 14', value: { background: '#8D99AE' } }, // Cool Gray
  { label: 'Theme 15', value: { background: '#1B263B' } }, // Space Cadet
  { label: 'Theme 16', value: { background: '#6200ee' } }, // Space Cadet
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
