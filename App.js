import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { View, Text, Image, ImageBackground, Pressable, Modal, ActivityIndicator, Alert, StyleSheet } from "react-native";
import { Button, ScrollView } from "react-native";
import Greet from "./Components/Greet";
import Box from "./Components/Box";

const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  return <View style={styles.container}>

    <View style={[styles.darkMode]}>
      <Text style={[styles.darkModeText]}>Style Inheritance </Text> 
      {/* There is no inheritance in styles here like CSS inheritance. So, we have to specify the color for each element.  */}
    </View>
    <StatusBar backgroundColor="green" barStyle="light-content" hidden></StatusBar>
    {/* Loading */}
    <ActivityIndicator></ActivityIndicator>
    <ActivityIndicator size="large"></ActivityIndicator>
    <ActivityIndicator size="large" color="midnightblue"></ActivityIndicator>
    <ActivityIndicator size="large" color="midnightblue" animating={true}></ActivityIndicator>

    <Button title="Alert" onPress={() => Alert.alert("Button Pressed")}></Button>
    <Button title="Alert" onPress={() => Alert.alert("Button Pressed", "Ouch that hurts!!", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
      },
      {
        text: "Ok",
        onPress: () => console.log("Ok Bye"),
      }
    ])}></Button>


    <Greet name={"Badar"}></Greet>





    <ScrollView>
      <Text><Text style={{ color: 'yellow' }}>Hello</Text> Badar Hossain In the heart of a peaceful village, nestled between rolling hills and verdant forests, life moved at a slower, more meaningful pace. Each day began with the golden sunrise that bathed the landscape in warm hues, awakening the fields of crops and the forests surrounding the village. Farmers, with weathered hands and hopeful hearts, tended to their land, knowing that the earth would reward their labor with abundant harvests. Children ran barefoot through the open fields, their laughter echoing like a song that harmonized with the calls of birds in the sky.

        By mid-morning, the village square came alive with activity. Vendors set up their small wooden stalls, offering freshly baked bread, ripe fruits, and handmade crafts. The air was filled with the comforting aroma of freshly brewed coffee and spices. Neighbors exchanged greetings, sharing stories of their day-to-day lives. It was a place where everyone knew each other, and the sense of community was woven into the fabric of everyday existence.

        As the sun began to set behind the hills, casting long shadows over the village, the calm evening embraced the land. Families gathered around dinner tables, sharing meals made from fresh, local ingredients. Conversations lingered, and laughter filled the homes. Outside, the stars began to twinkle one by one, painting the sky with their soft glow.

        In this village, simplicity was cherished, and the connection between nature and its people was undeniable. The peaceful rhythm of life, untouched by the hustle of modernity, reminded everyone that true happiness could be found in the small, simple moments shared with loved ones, under the vast sky, in a world that felt both timeless and boundless. </Text>
      <Image source={{ uri: "https://picsum.photos/200" }} style={{ width: 300, height: 300 }}></Image>

      <ImageBackground source={{ uri: "https://picsum.photos/200" }} style={{ flex: 1 }}>
        <Text className="text-green-500 border-2 p-10 font-extrabold">Hello</Text>
      </ImageBackground>
      <Button title="Press here" onPress={() => console.log("Ouch!!!")} color="midnightblue" disabled></Button>

      {/* Pressable has other features like onPress, check em out */}
      <Pressable onPress={() => console.log("Image Pressed")}>
        <Image source={{ uri: "https://picsum.photos/200" }} style={{ width: 300, height: 300 }}></Image>

      </Pressable>

      <Pressable >
        <Text> Badar Hossain In the heart of a peaceful village, nestled between rolling hills and verdant forests, life moved at a slower, more meaningful pace. Each day began with the golden sunrise that bathed the landscape in warm hues,</Text>
      </Pressable>

      <Button title="Modal Open" onPress={() => setModalVisible(true)} color="midnightblue">


      </Button>


      {/* onRequestClose is for back button in android */}
      <Modal visible={modalVisible} onRequestClose={() => setModalVisible(false)} animationType="slide" presentationStyle="formSheet">
        <View style={{ backgroundColor: 'lightblue', flex: 1, padding: 60 }}>
          <Text>Modal Content here</Text>
          <Button title="Close Modal" color="black" onPress={() => setModalVisible(false)}></Button>
        </View>
      </Modal>


      <Text className="text-red-600 p-10 border-2 border-solid bg-green-200 text-center rounded-xl shadow-2xl shadow-yellow-500 ">Hello Box Model</Text>


      <View className="flex">
          <Box style={{backgroundColor: 'red', flex:1 , alignSelf: 'center', flexBasis: 140}}>Box1</Box>
          <Box style={{backgroundColor: 'blue', flex:3 , alignSelf: 'flex-start', }}>Box2</Box>
          <Box style={{backgroundColor: 'blue', flex:3 , alignSelf: 'stretch',}}>Box3</Box>
      </View>
    </ScrollView>

  </View >
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "skyblue", padding: 50 },
  darkMode: {
    backgroundColor: "black",
    
  
  },
  darkModeText: {
    color: 'white'
  }


})


//Flex Basis is basically height for flex items. Initial flex height
// Flex grow is how much space it can take up
// Flex shrink is how much space it can give or when there is overflow, it can shrink to adjust to the space

// When flex is set to positive number, it sets flex basis to 0 and flex shrink to 1.

{/* There is no inheritance in styles here like CSS inheritance. So, we have to specify the color for each element.  */}
