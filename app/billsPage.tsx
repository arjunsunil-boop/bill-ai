import { Text, View,StyleSheet } from 'react-native'

export default function BillsPage() {
  return (
    <View style={styles.container}>
      
      <Text style={styles.text}>Hello World </Text>

    </View>

  );
}

const styles = StyleSheet.create(
  {
    container:{
      flex:1,
      backgroundColor:"#4a535fff",
      alignItems:"center",
      justifyContent:"center",
    },
    text:{
      color:"#fff"
    }
  }
)



