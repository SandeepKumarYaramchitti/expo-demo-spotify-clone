import React from 'react'

import {View, Image, Text, TouchableOpacity} from 'react-native'
import { Album } from '../../types'
import styles from '../AlbumHeader/styles'

export type AlbumHeader = {
    album: Album
}

// Hero Image
// Name
// By and number of likes
// Play button

const AlbumHeader = (props: AlbumHeader) => {

    const {album} = props
    return (
        // <Text style={{color: 'white'}}>Header</Text>
        <View style={styles.container}>
            <Image source={{uri: album.imageUri}} style={styles.image} />
            <Text style={styles.name}>{album.name}</Text>
            <View style={styles.createContainer}>
                <Text style={styles.creator}>By {album.by}</Text>
                <Text style={styles.likes}>{album.numberOfLikes} Likes</Text>
            </View>
            <TouchableOpacity>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>PLAY</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default AlbumHeader