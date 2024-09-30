
import React, { useState, useRef, useEffect } from 'react';
import { View, Button, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';
import { Camera } from 'expo-camera';
import { useNavigation } from '@react-navigation/native';
import * as MediaLibrary from 'expo-media-library';
import ButtonHome from './ButtonHome';
import { darkGreen } from './Constants';

const CameraScreen = () => {
  const cameraRef = useRef();
  const [capturedImages, setCapturedImages] = useState([]);
  const [orangeCount, setOrangeCount] = useState(null);
  const navigation = useNavigation();
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
  const [photo, setPhoto] = useState();
  const [data, fetchdata] = useState({});

  const captureImage = async () => {
    if (cameraRef.current && capturedImages.length < 4) {
      const options = { quality: 1, base64: true, exif: false };
      const newPhoto = await cameraRef.current.takePictureAsync(options);
      setCapturedImages([...capturedImages, newPhoto.uri]);
    }
  };

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === "granted");
      setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
    })();
  }, []);

  if (hasCameraPermission === undefined) {
    return <Text>Requesting permissions...</Text>
  } else if (!hasCameraPermission) {
    return <Text>Permission for camera not granted. Please change this in settings.</Text>
  }

  const displayCapturedImages = () => {
    return (
      <View style={styles.capturedImagesContainer}>
        {capturedImages.map((image, index) => (
          <Image key={index} source={{ uri: image }} style={styles.capturedImage} />
        ))}
      </View>
    );
  };

  const processImages = async () => {
    try {
      if (capturedImages.length !== 4) {
        alert('Please capture exactly 4 images.');
        return;
      }

      const formData = new FormData();
      capturedImages.forEach((image, index) => {
        formData.append(`image${index + 1}`, { uri: image, name: `${index + 1}.jpg`, type: 'image/jpeg' });
      });

      const response = await fetch('http://192.168.1.5:5000/orange-counting', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to fetch data from API');
      }

      const responseData = await response.json();
      const { total_orange_count } = responseData;

      navigation.navigate('Summary', {
        treeName: 'Orange Tree',
        count: total_orange_count,
        title: 'Orange Detection Summary',
      });
    } catch (error) {
      console.error('Error processing images:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cameraContainer}>
        <Camera style={styles.camera} ref={cameraRef} type={Camera.Constants.Type.back}>
          {/* Camera feed goes here */}
        </Camera>
      </View>

      {capturedImages.length > 0 && displayCapturedImages()}

      <View style={styles.container}>
        <View style={styles.buttonsContainer}>
          <ButtonHome
            bgColor={darkGreen}
            textColor="white"
            btnLabel="Capture Image"
            onPress={captureImage}
            style={styles.captureImageButton}
          />

          {capturedImages.length > 0 && (
            <ButtonHome
              bgColor={darkGreen}
              textColor="white"
              btnLabel="Process Images"
              onPress={processImages}
              style={styles.button}
            />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cameraContainer: {
    width: 580,
    height: 580,
    overflow: 'hidden',
    borderRadius: 0,
    marginTop: 0,
    width: Dimensions.get('screen').width,
  },
  camera: {
    flex: 1,
  },
  capturedImagesContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 10,
    marginTop: 10,
  },
  capturedImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
    resizeMode: 'cover',
    justifyContent: 'flex-start',
    padding: 10,
    margin: 4,
  },
  captureImageButton: {
    marginRight: 10,
    width: Dimensions.get('screen').width,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 10,
    width: Dimensions.get('screen').width,
  },
  button: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 6,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: Dimensions.get('window').width * 0.05
  },
});

export default CameraScreen;
















