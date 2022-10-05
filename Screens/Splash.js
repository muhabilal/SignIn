import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
// import * as Animatable from 'react-native-animatable';
// MyCustomComponent = Animatable.createAnimatableComponent(MyCustomComponent);

import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const Splash = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                < Image
                    // animation="bounceIn"
                    // duraton="1500"
                    source={require('../assests/logo.png')} style={styles.logo} />
            </View>
            <View style={styles.footer}>
                <Text style={styles.title}>Stay connected with everyone!</Text>
                <Text style={styles.text}>SignIn with Account</Text>
                <View style={styles.button}>
                    <TouchableOpacity onPress={() => navigation.navigate("SignInScreen")}>
                        <LinearGradient
                            colors={['#08d4c4', '#01ab9d']}
                            style={styles.signIn}>
                            <Text style={styles.textSignIn}>Get Started</Text>
                            <MaterialIcons
                                name='navigate-next'
                                color="#fff"
                                size={20}
                            />
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Splash
const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009387'
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30,
    },
    logo: {
        width: height_logo,
        height: height_logo,
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: '#05375a',
    },
    text: {
        color: 'grey',
        marginTop: 5,
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },
    textSignIn: {
        color: "white",
        fontWeight: "bold",
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30,
    },
})




//react native vector icons
//button linear gradients
//react-native-animatable