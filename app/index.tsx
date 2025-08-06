import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
export default function Index() {
  return (
    <View style={styles.container}>
      
      <Text style={styles.text}>Hello World </Text>
      <Text style={styles.text}> Click here to go to billsPage</Text>
      <Link href={"/billsPage"} style={styles.button}>Bills</Link>

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
      textDecorationLine:"underline"

    }
  }
)
