import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import ScanButton from "@/components/ScanButton";
import SelectFile from "@/components/SelectFile";
export default function Index() {
  return (
    <View style={styles.container}>
      
      <Text style={styles.text}>Here will be our Camera area </Text>
      
      <ScanButton label="Scan Now"/>
      <Text style={styles.text}> Or</Text>
      <SelectFile label = "Select File from phone"/>
      

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
