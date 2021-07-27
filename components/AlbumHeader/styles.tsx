import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    image: {
        width: 300,
        height: 250,
        margin: 15
    },
    name: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold'
    },
    createContainer: {
        flexDirection: 'row',
        margin: 10
    },
    creator: {
        color: 'lightgrey',
        margin: 5,
        fontSize: 14
    },
    likes: {
        color: 'lightgrey',
        margin: 5,
        fontSize: 14
    },
    button: {
        backgroundColor: '#1cd05d',
        height: 45,
        width: 160,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    }

})


export default styles;