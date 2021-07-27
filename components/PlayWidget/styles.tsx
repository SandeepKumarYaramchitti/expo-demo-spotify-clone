import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({

    container: {
        position: 'absolute',
        bottom: 75,
        flexDirection: 'row',
        backgroundColor: '#131313',
        width: '100%',
        borderWidth: 1,
        borderColor: 'black',
        alignItems: 'center'
    },
    rightContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
      },
      nameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      iconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 100,
        justifyContent: 'space-around'
      },
    image: {
        width: 60,
        height: 60,
        margin: 10
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14,
        margin: 10
    },
    artist: {
        color: 'grey',
        fontSize: 12
    }
});

export default Styles
