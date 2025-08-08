import { View, Text, StyleSheet, Modal, SafeAreaView, Alert, Pressable, ImageSourcePropType } from "react-native";
import { Image } from "expo-image"; 
import { useLocalSearchParams } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useState } from "react";

type Props = {
    imgSource?: string
    modal:boolean
    setModal: (val: boolean) => void;
}
export default function BillDescriptor({ imgSource,modal,setModal }: Props) {
    const modalVisible = modal;
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.centeredView}>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modal}
                    onRequestClose={
                        () => {
                            
                            setModal(false)
                        }
                    }

                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View style={styles.container}>
                                <View style={styles.imgContainer}>
                                    <Image source={imgSource} style={styles.img}/>
                                </View>
                            </View>
                            <Pressable style={[styles.button, styles.buttonClose]} onPress={() => setModal(false)}>
                                <Text style={styles.textStyle}>Done</Text>
                            </Pressable>

                        </View>
                    </View>

                </Modal>


            </SafeAreaView>

        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    img: {
        width: 320,
        height: 440,
        borderRadius: 18,
    },
    imgContainer: {
        flex: 1,
        backgroundColor: '#25292e',
        alignItems: 'center'
    },
    container: {
        flex: 1
    },

    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },

})