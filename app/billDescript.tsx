import { View, Text, StyleSheet } from "react-native";
import { Image } from "react-native"; // Use RN Image instead of expo-image
import { useLocalSearchParams } from "expo-router";


export default function BillDescriptor() {
    return (
        <View style={styles.container}>
            <View style={styles.imgContainer}>
            <Text>
                This is the image
            </Text>
            <Image source={require('../assets/images/wallhaven-e8zwwo_2560x1600.png')} resizeMode="cover" style={styles.img} />
        
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    img: {
        width: 320,
        height: 440,
        borderRadius: 18,
    },
    imgContainer: {
        flex: 1,
        backgroundColor: '#25292e',
        alignItems: 'center'
    },
    container:{
        flex:1
    }

})