import { Text, View, StyleSheet } from "react-native";
import { Link, router } from "expo-router";
import ScanButton from "@/components/ScanButton";
import SelectFile from "@/components/SelectFile";
import CameraArea from "@/components/CamerArea";
import * as ImagePicker from 'expo-image-picker';



export default function Index() {
  const pickImageAsync = async()=>{
    let result = await ImagePicker.launchImageLibraryAsync(
      {
        mediaTypes:['images'],
        allowsEditing:true,
        quality:1,
      }
    )

    if (!result.canceled){


      router.push({
        pathname:'/billDescript',

      })
      
    }else {
      alert("You did not select any image!")
    }
  }
  return (
    <View style={styles.container}>
      <CameraArea/>
      
      
      
      <ScanButton label=""/>
      <Text style={styles.text}> Or</Text>
      <SelectFile label = "Choose a Bill" onPress={pickImageAsync}/>
      

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
