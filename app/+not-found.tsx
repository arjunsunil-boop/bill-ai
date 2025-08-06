import { Link, Stack } from "expo-router";
import { View,StyleSheet } from "react-native";

export default function NotFoundScreen(){
    return (
        <>
         
         <Stack.Screen options={{title:"OOps! This is not a valid route!!"}}/>
         <View style={styles.container}>
            <Link href="/" style={styles.text}>GO BACK TO HOMESCREEN</Link>
         </View>
        
        </>
    );
}

const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            backgroundColor:"#25292e",
            justifyContent:"center",
            alignItems:"center"
        },
        text:{
            color:"#fff"
        }
    }
)