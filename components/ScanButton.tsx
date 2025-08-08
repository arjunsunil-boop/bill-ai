import { Pressable, StyleSheet, View, Text } from "react-native";

import AntDesign from '@expo/vector-icons/AntDesign';
type Props = {
    label: string;
}

export default function ScanButton({ label }: Props) {
    return (
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={()=>{alert("You have pressed the Scanbutton")}}>
                <AntDesign name="scan1" size={24} color="black" />
                
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        buttonContainer: {
            width: 50,
            height: 50,
            marginHorizontal: 20,
            alignItems: "center",
            justifyContent: "center",
            


        },
        button: {
            borderRadius: 10,
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            borderWidth: 2,
            borderColor: '#000',
            backgroundColor:"#dcdcdc"
        },
        buttonLabel: {
            color: '#000000',
            fontSize: 16,
        },
    }
)