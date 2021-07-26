import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        margin: 10
    },
    rightContainer: {
        justifyContent: 'space-around',
        marginLeft: 10
    },
    image: {
        width: 60,
        height: 60
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    },
    artist: {
        color: 'grey',
        fontSize: 14
    }
});

export default Styles