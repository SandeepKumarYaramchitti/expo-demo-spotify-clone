import React from 'react'
import { View, Text, Image} from 'react-native'
import { Song } from '../../types'
import Styles from './styles'
import { AntDesign, FontAwesome } from '@expo/vector-icons'

export type PlayWidgetProp = {
    song:  Song
}

const PlayWidget = ( props: PlayWidgetProp) => {

    const { song } = props;
    return (
        <View style={Styles.container}>
            <Image source={{ uri: song.imageUri }} style={Styles.image} />
            <View style={Styles.rightContainer}>
                <View style={Styles.nameContainer}>
                    <Text style={Styles.title}>{song.title}</Text>
                    <Text style={Styles.artist}>{song.artist}</Text>
                </View>
                <View style={Styles.iconsContainer}>
                    <AntDesign name="hearto" size={20} color={'white'} />
                    <FontAwesome name="play" size={20} color={'white'} />
                </View>
            </View>



        </View>
    )
}


export default PlayWidget

