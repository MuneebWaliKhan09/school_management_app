import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useEditStudentAvatarMutation} from '../../../store/features/adminFeatures';
import {Button, Avatar} from 'react-native-paper';
import {launchImageLibrary} from 'react-native-image-picker';
import {useToast} from '../../../context/ToastContext';
import {Half_WHITE} from '../../../strings/Colors';
import {useSelector} from 'react-redux';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const EditAvatarStudent = () => {
  const theme = useSelector(state => state.themeAdmin);
  const navigation = useNavigation();
  const {showToast} = useToast();
  const route = useRoute();
  const {id, avatar} = route?.params;
  const [editAvatarStudent, {isLoading}] = useEditStudentAvatarMutation();
  const [selectedImage, setSelectedImage] = useState(avatar);
  const [showSelectBtn, setShowSelectBtn] = useState(true);
  const [imageFileName, setImageFileName] = useState(null);
  const [imageUri, setImageUri] = useState(null);

  const handleSelectImage = async () => {
    const res = await launchImageLibrary({mediaType: 'photo'});
    if (!res.didCancel && res.assets && res.assets.length > 0) {
      const {uri, fileName} = res.assets[0];
      setImageUri(uri);
      setSelectedImage(uri);
      setShowSelectBtn(false);
      setImageFileName(fileName);
    }
  };

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append('avatar', {
        uri: imageUri,
        type: 'image/jpeg',
        name: imageFileName,
      });
      const res = await editAvatarStudent({id: id, formData: formData});
      if (res?.error) {
        showToast(res?.error.data.message, 'error');
        setShowSelectBtn(true);
      } else {
        showToast(res?.data?.message, 'success');
        navigation.goBack();
      }
    } catch (error) {
      console.error('Error updating avatar:', error);
    }
  };

  return (
    <View style={[styles.container, {backgroundColor: theme.background}]}>
      <Avatar.Image
        size={responsiveWidth(60)}
        source={{uri: selectedImage}}
        style={styles.avatar}
      />
      {showSelectBtn && (
        <Button
          buttonColor={theme.background}
          mode="contained"
          onPress={handleSelectImage}
          style={styles.button}>
          Select Image
        </Button>
      )}
      {imageUri !== null && (
        <Button
          buttonColor={theme.background}
          mode="contained"
          onPress={handleSubmit}
          style={styles.button}
          disabled={isLoading}>
          {isLoading ? (
            <Text style={styles.buttonText}>Updating Avatar...</Text>
          ) : (
            <Text style={styles.buttonText}>Submit</Text>
          )}
        </Button>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: responsiveWidth(5),
    backgroundColor: '#f8f9fa',
  },
  avatar: {
    marginBottom: responsiveHeight(3),
  },
  button: {
    marginTop: responsiveHeight(2),
    width: '80%',
    borderWidth: 1,
    borderColor: Half_WHITE,
  },
  buttonText: {
    color: Half_WHITE,
    fontSize: responsiveFontSize(2),
  },
});

export default EditAvatarStudent;
