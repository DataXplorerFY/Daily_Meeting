import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import ButtonHome from './ButtonHome';
import { darkGreen } from './Constants';
import BackgroundHome from './BackgroundHome';
// import * as Font from 'expo-font';
import FontLoader from './FontLoader';

const Home = (props) => {
  return (
    <FontLoader>
    <BackgroundHome>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to CitrusEye</Text>
        <View style={styles.buttonContainer}>
          <ButtonHome
            bgColor={darkGreen}
            textColor="white"
            btnLabel="Login/Signup"
            onPress={() => props.navigation.navigate("Login")}
          />
          <ButtonHome
            bgColor={darkGreen}
            textColor="white"
            btnLabel="Use as a Guest"
            onPress={() => props.navigation.navigate("CameraScreen")}
          />
        </View>
      </View>
    </BackgroundHome>
    </FontLoader>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 0,
    width: '100%'
   

  },
  title: {
    fontSize: 29,
    color: 'white',
    textAlign: 'center',
    marginTop: '40%',
    fontFamily: 'Lato-Bold', 
    width:'100%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: '90%',
    width: Dimensions.get('screen').width,
  },

});


export default Home;
















