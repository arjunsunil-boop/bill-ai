import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import ScanButton from "@/components/ScanButton";
export default function Index() {
  return (
    <View style={styles.container}>
      
      <Text style={styles.text}>Here will be our Camera area </Text>
      
      <ScanButton label="Scan Now"/>

    </View>

  );
}

const styles = StyleSheet.create(
  {
    container:{
      flex:1,
      backgroundColor:'#25292e',
      alignItems:'center',
      justifyContent:'center',
    },
    text:{
      color:'#fff',
    },
    button:{
      color:'#fff',
      fontSize:20,
      textDecorationLine:"underline",

    }
  }
)
