import SearchButton from '@/components/SearchButton';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
    import { Image } from 'react-native';
export default function BillsPage() {
  const [bills,setBills]=useState(
    [
      {
        "img":"assets/images/wallhaven-e8zwwo_2560x1600.png"
      },
    ]
  )
  return (
    <View style={styles.container}>

      <View style={styles.searchContainer}>

        <TextInput style={styles.textInput} />
        <SearchButton/>
      </View>
      <View>
        <View style={styles.card}>
          <View style={styles.cardImageContainer}>
            <Image source={require('@/assets/images/wallhaven-e8zwwo_2560x1600.png')} style={{width:"100%",height:"100%",}}/>

          </View>
          <View>
            <Text>
              Bill Details
            </Text>
          </View>
          
        </View>
      </View>


    </View>

  );
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      justifyContent: "flex-start",
      paddingTop: 50,
      backgroundColor: "#4a535fff",
      alignItems: "center",
    },
    searchContainer: {
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
    },
    text: {
      color: "#fff"
    },
    textInput: {
      backgroundColor: "#fff",
      borderColor: "#fff",
      borderWidth: 10,
      borderRadius: 5,
      width: 250,
    },
    card:{
      width:150,
      height:250,
      backgroundColor:"#fff",
      borderColor:"#000",
      borderWidth:2,
      borderRadius:10,
      margin:20,
      justifyContent:"center",
      alignItems:"center"
    },
    cardImageContainer:{
      width:130,
      height:200,
      alignItems:"center",
      justifyContent:"center",
      borderRadius:10,
      borderWidth:2

    }

  }
)



