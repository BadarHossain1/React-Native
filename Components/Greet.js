import { Text, View } from "react-native";


const Greet = ({name}) => {
    return <View>
        <Text className="p-5 text-black bg-yellow-400">Good Morning {name}</Text>
        
    </View>
        
    
};

export default Greet;