import { Alert, Pressable } from "react-native";
import { View, StyleSheet } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';

export default function SearchButton() {
    return (
        <View style={styles.searchButtonContainer}>
            <Pressable style={styles.button} >
                <AntDesign name="search1" size={24} color="black" />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        searchButtonContainer: {
            width: 45,
            height: 39,
            alignItems: "center",
            justifyContent: "center"
        },
        button: {
            borderRadius: 10,
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            borderWidth: 1,
            borderColor: '#000',
            backgroundColor: "#dcdcdc"
        },
    }
)