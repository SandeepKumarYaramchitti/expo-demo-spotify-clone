import React from 'react'
import {View, Image, Text, TouchableNativeFeedback} from 'react-native'
import styles from './styles'
import {Album} from '../../types'
export type AlbumProps = {
    album: Album
}
const AlbumComponent = (props: AlbumProps) => {

    const onPress = () => {
        console.warn(`Album has been clicked ${props.album.artistsHeadline}`)
    }
    return (
        <TouchableNativeFeedback onPress={onPress}>
            <View style={styles.container}>
                <Image 
                    source={{ uri: props.album.imageUri}}
                    style={styles.image}
                > 
                </Image>
                <Text style={styles.text}>{props.album.artistsHeadline}</Text>
            </View>
        </TouchableNativeFeedback>

    )
}

export default AlbumComponent
