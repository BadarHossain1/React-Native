import { View, Text, Image, ImageBackground, Pressable } from "react-native";
import { Button, ScrollView } from "react-native";

const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  return <View style={{ flex: 1, backgroundColor: "plum", padding: 50 }}>
    <ScrollView>
      <Text><Text style={{ color: 'yellow' }}>Hello</Text> Badar Hossain In the heart of a peaceful village, nestled between rolling hills and verdant forests, life moved at a slower, more meaningful pace. Each day began with the golden sunrise that bathed the landscape in warm hues, awakening the fields of crops and the forests surrounding the village. Farmers, with weathered hands and hopeful hearts, tended to their land, knowing that the earth would reward their labor with abundant harvests. Children ran barefoot through the open fields, their laughter echoing like a song that harmonized with the calls of birds in the sky.

        By mid-morning, the village square came alive with activity. Vendors set up their small wooden stalls, offering freshly baked bread, ripe fruits, and handmade crafts. The air was filled with the comforting aroma of freshly brewed coffee and spices. Neighbors exchanged greetings, sharing stories of their day-to-day lives. It was a place where everyone knew each other, and the sense of community was woven into the fabric of everyday existence.

        As the sun began to set behind the hills, casting long shadows over the village, the calm evening embraced the land. Families gathered around dinner tables, sharing meals made from fresh, local ingredients. Conversations lingered, and laughter filled the homes. Outside, the stars began to twinkle one by one, painting the sky with their soft glow.

        In this village, simplicity was cherished, and the connection between nature and its people was undeniable. The peaceful rhythm of life, untouched by the hustle of modernity, reminded everyone that true happiness could be found in the small, simple moments shared with loved ones, under the vast sky, in a world that felt both timeless and boundless. </Text>
      <Image source={{ uri: "https://picsum.photos/200" }} style={{ width: 300, height: 300 }}></Image>

      <ImageBackground source={{ uri: "https://picsum.photos/200" }} style={{ flex: 1 }}>
        <Text style={{ color: "white", fontSize: 30 }}>Hello</Text>
      </ImageBackground>
      <Button title="Press here" onPress={() => console.log("Ouch!!!")} color="midnightblue" disabled></Button>

      {/* Pressable has other features like onPress, check em out */}
      <Pressable onPress={()=> console.log("Image Pressed")}> 
        <Image source={{ uri: "https://picsum.photos/200" }} style={{ width: 300, height: 300 }}></Image>

      </Pressable>

      <Pressable >
        <Text> Badar Hossain In the heart of a peaceful village, nestled between rolling hills and verdant forests, life moved at a slower, more meaningful pace. Each day began with the golden sunrise that bathed the landscape in warm hues,</Text>
      </Pressable>
    </ScrollView>

  </View >
}