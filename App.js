import { View, Text, Image, ImageBackground } from "react-native";

const logoImg = require("./assets/adaptive-icon.png");

export default function App(){
  return <View style={{flex: 1, backgroundColor: "plum", padding:50}}>
    {/* <Text ><Text style={{color: 'yellow'}}>Hello</Text> Badar Hossain</Text>
    <Image source={{uri: "https://picsum.photos/200"}} style={{width: 300, height:300}}></Image> */}

    <ImageBackground source={{uri: "https://picsum.photos/200"}} style={{flex:1}}>
      <Text style={{color: "white", fontSize: 30}}>Hello</Text>
    </ImageBackground>
  </View>
}