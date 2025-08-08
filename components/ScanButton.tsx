import { Pressable, StyleSheet, View, Text } from "react-native";

type Props = {
    label: string;
}

export default function ScanButton({ label }: Props) {
    return (
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={()=>{alert("You have pressed the Scanbutton")}}>
                <Text style={styles.buttonLabel}>{label}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        buttonContainer: {
            width: 100,
            height: 68,
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