import React, {useEffect} from 'react'
import { View, Text, Image} from 'react-native'
import { Song } from '../../types'
import Styles from './styles'
import { AntDesign, FontAwesome } from '@expo/vector-icons'
import { Audio } from 'expo-av'

export type PlayWidgetProp = {
    song:  Song
}

const PlayWidget = ( props: PlayWidgetProp) => {
    const { song } = props;

    const onPlayStatusUpdate = (status: any) => {
        console.warn(status)
    }

    const playCurrentSong = async() => {
        const { sound: newSound } = await Audio.Sound.createAsync(
            {uri: song.uri},
            {shouldPlay: true},
            onPlayStatusUpdate
        )
    }
    useEffect(() => {
        playCurrentSong();
    }, [])
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

