import {View, Text, StyleSheet} from 'react-native';

export default function Box({children, style}){
    return (
        <View style={[style]}>
            <Text>{children}</Text>
        </View>
    )
}