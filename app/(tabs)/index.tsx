import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import ScanButton from "@/components/ScanButton";
import SelectFile from "@/components/SelectFile";
import CameraArea from "@/components/CamerArea";

export default function Index() {
  return (
    <View style={styles.container}>
      <CameraArea/>
      
      
      
      <ScanButton label=""/>
      <Text style={styles.text}> Or</Text>
      <SelectFile label = "Choose a Bill"/>
      

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
