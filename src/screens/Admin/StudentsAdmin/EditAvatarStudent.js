import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useEditStudentAvatarMutation} from '../../../store/features/adminFeatures';
import {Button, Avatar} from 'react-native-paper';
import {launchImageLibrary} from 'react-native-image-picker';
import {useToast} from '../../../context/ToastContext';

const EditAvatarStudent = () => {
    const navigation = useNavigation()
  const {showToast} = useToast();
  const route = useRoute();
  const {id, avatar} = route?.params;
  const [EditAvatarStudent, {isLoading}] = useEditStudentAvatarMutation();
  const [selectedImage, setSelectedImage] = useState(avatar);
  const [showSelectBtn, setshowSelectBtn] = useState(true);
  const [imageFileName, setImageFileName] = useState(null);
  const [imageUri, setImageUri] = useState(null);

  const handleSelectImage = async () => {
    const res = await launchImageLibrary({mediaType: 'photo'});
    if (!res.didCancel && res.assets && res.assets.length > 0) {
      const {uri, fileName} = res.assets[0];
      console.log(res.assets[0]);
      setImageUri(uri);
      setSelectedImage(uri);
      setshowSelectBtn(false)
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
      console.log(formData);
      const res = await EditAvatarStudent({id:id, formData:formData});
      if (res?.error) {
        showToast(res?.error.data.message, 'error');
        setshowSelectBtn(true)
      } else {
        showToast(res?.data?.message, 'success');
        navigation.goBack();
      }
    } catch (error) {
      console.error('Error updating avatar:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Avatar.Image
        size={190}
        source={{uri: selectedImage}}
        style={styles.avatar}
      />
      {showSelectBtn && (
        <Button
          mode="contained"
          onPress={handleSelectImage}
          style={styles.button}>
          Select Image
        </Button>
      )}
      <Button
        mode="contained"
        onPress={handleSubmit}
        style={styles.button}
        disabled={isLoading}>
        {isLoading ? 'Updating Avatar..' : 'Submit'}
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  avatar: {
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
    width: '80%',
  },
});

export default EditAvatarStudent;
