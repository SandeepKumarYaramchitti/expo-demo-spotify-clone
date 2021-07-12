import React from 'react'
import {View, Image, Text} from 'react-native'
import styles from './styles'
import {Album} from '../../types'
export type AlbumProps = {
    album: Album
}
const AlbumComponent = (props: AlbumProps) => {
    return (
        <View style={styles.container}>
            <Image 
                source={{ uri: props.album.imageUrl}}
                style={styles.image}
            > 
            </Image>
            <Text style={styles.text}>{props.album.albumHeadline}</Text>
        </View>
    )
}

export default AlbumComponent
