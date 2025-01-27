import { View, Text, StyleSheet, ImageBackground, Pressable} from 'react-native'
import React from 'react'
import icedCoffeeImg from "@/assets/images/cof.jpg"

import {Link} from 'expo-router'



const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground 
      source={icedCoffeeImg}
      resizeMode="cover"
      style={styles.image}
      >


      <Text style={styles.text}>Coffee shop</Text>
      </ImageBackground>

      <Link href="/contact" asChild>
      <Pressable style={styles.button}>
      <Text style={styles.buttonText}>Contact Us</Text>
      </Pressable>
       </Link>

    </View>
  )
}

export default app

const styles=StyleSheet.create(
    {
        container: {
            flex: 1,
            flexDirection: 'column',
        },
        text:{
            color: 'white',
            fontSize: 42,
            fontWeight: 'bold',
            textAlign: 'center',
            backgroundColor: 'rgba(0,0,0,0.5)',

        },
        image:{
          width:'100%',
          height:'100%',
          flex: 1,
          resizeMode: 'cover',
          justifyContent: 'center',
    },
    title: {
      color: 'white',
      fontSize: 42,
      fontWeight: 'bold',
      textAlign: 'center',
      backgroundColor: 'rgba(0,0,0,0.5)',
      marginBottom: 120,},
    link: {
      color: 'white',
      fontSize: 42,
      fontWeight: 'bold',
      textAlign: 'center',
      textDecorationLine: 'underline',
      backgroundColor: 'rgba(0,0,0,0.5)',
      padding: 4,},
    button: {
      height: 60,
      borderRadius: 20,
      justifyContent: 'center',
      backgroundColor: 'rgba(0,0,0,0.75)',
      padding: 6,},
    buttonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
      padding: 4,
    }
    }
)
