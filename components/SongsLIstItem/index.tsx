import React from 'react'
import { View, Text, Image} from 'react-native'
import { Song } from '../../types'
import Styles from './styles'


export type SongsListItemProp = {
    song:  Song
}

const SongListItem = ( props: SongsListItemProp) => {

    const { song } = props;
    return (
        <View style={Styles.container}>
            <Image source={{ uri: song.imageUri }} style={Styles.image} />
            <View style={Styles.rightContainer}>
                <Text style={Styles.title}>{song.title}</Text>
                <Text style={Styles.artist}>{song.artist}</Text>
            </View>

        </View>
    )
}


export default SongListItem

