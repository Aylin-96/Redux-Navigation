import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import {connect} from 'react-redux'
import {getUsername} from '../../redux/action'

const LogInScreen = ({ navigation }, props) => {
    //const name = 'Black Cat'
    const { login, password, text, btn } = styles
    return(
        <View style={login}>
            <Image
                style={{height: 120, width: 120, marginBottom: 60}}
                source={require('../images/mrn.jpeg')}
            />
            <View style={{flexDirection: "row"}}>
                <Text style={password}>Username</Text>
                <Text style={text}>{props.username}</Text>
            </View>
            <View style={{
                flexDirection: "row",
                paddingTop: 10
                }}
            >
                <Text style={password}>Password</Text>
                <Text style={text}>*********</Text>
            </View>
            <TouchableOpacity
                style={btn}
                onPress={() => navigation.navigate('Tab')}
            >
                <Text style={{fontSize: 25, fontWeight: 'bold'}}>Log In</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    login: {
        flex: 1,
        backgroundColor: '#212121',
        justifyContent: 'center',
        alignItems: 'center',
    },
    password: {
        //backgroundColor: 'dimgrey',
        fontSize: 25,
        width: '30%',
        textAlign: 'left',
        color: 'aliceblue'
    },
    text: {
        width: '40%',
        paddingLeft: 30,
        fontSize: 25,
        color: '#57e6ff'
    },
    btn: {
        marginTop: 30,
        marginBottom: 70,
        width: 80,
        height: 35,
        backgroundColor: '#57e6ff',
        alignItems: 'center'
    }
})

const mapStateToProps = function (state)  {
    return {
        username: state.username
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUsername: (name) => {
            dispatch(getUsername(name))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogInScreen)

export { LogInScreen }
