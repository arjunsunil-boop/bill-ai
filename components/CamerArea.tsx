import { View, StyleSheet } from "react-native"

export default function CameraArea() {
    return (
        <View style={styles.cameraContainer}>
            
        </View>
    )
}

const styles = StyleSheet.create({
    cameraContainer: {
        width: 300,
        height: 300,
        backgroundColor: '#929292ff',
        borderWidth: 2,
        borderColor: '#ccc',
        borderRadius: 10,
        borderStyle: 'dashed',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
    }
})