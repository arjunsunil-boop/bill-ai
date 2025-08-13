import SearchButton from '@/components/SearchButton';
import { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function BillsPage() {
  const [bills, setBills] = useState([
    {
      img: "https://as1.ftcdn.net/v2/jpg/01/82/01/18/1000_F_182011806_mxcDzt9ckBYbGpxAne8o73DbyDHpXOe9.jpg",
    }, {
      img: "https://t3.ftcdn.net/jpg/02/49/45/18/240_F_249451824_0KPU9PF3Re03Zpq0bNRSuG7Kr3GSnwse.webp",
    }, {
      img: "https://as1.ftcdn.net/v2/jpg/01/82/01/18/1000_F_182011806_mxcDzt9ckBYbGpxAne8o73DbyDHpXOe9.jpg",
    }
  ])
  return (
    <View style={styles.container}>

      <View style={styles.searchContainer}>

        <TextInput style={styles.textInput} />
        <SearchButton />
      </View>
      <View style={styles.cardContainer}>
        {
          bills.map(
            (bill) => {
              return (

                <Pressable onPress={(bill)=>{alert(`You pressed ${bill}`)}}>

                  <View style={styles.card}>
                    <View style={styles.cardImageContainer}>
                      <Image source={{ uri: bill.img }} style={{ width: "100%", height: "100%", }} />

                    </View>
                    <View>
                      <Text>
                        Bill Details
                      </Text>
                    </View>

                  </View>

                </Pressable>

              )
            }
          )
        }
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
    card: {
      width: 150,
      height: 250,
      backgroundColor: "#fff",
      borderColor: "#000",
      borderWidth: 2,
      borderRadius: 10,
      margin: 20,
      justifyContent: "center",
      alignItems: "center"
    },
    cardImageContainer: {
      width: "100%",
      height: 180,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 10,
      borderWidth: 0,
      overflow: "hidden"

    },
    cardContainer:{
      
    }

  }
)



