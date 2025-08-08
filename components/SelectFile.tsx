import { Pressable, View, StyleSheet,Text } from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

type Props = {
    label:string
}

export default function SelectFile({label}:Props){
    return (
        <View style={styles.buttonContainer}>

            <Pressable style={styles.button} onPress={()=>{alert("You have pressed the Select File button")}}>
                <MaterialCommunityIcons name="file-document" size={24} color="black" />
            <Text style={styles.buttonLabel}>{label}</Text>
            </Pressable>

        </View>
    )

}

const styles = StyleSheet.create(
    {
        buttonContainer: {
            width: 150,
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