import React, {useEffect} from "react";

import {View, Text} from 'react-native';
import { useRoute} from '@react-navigation/native'

const album = {
    id: '11',
    name: 'Good Vibes',
    by: 'Spotify',
    numberOfLikes: 38,
    imageUri: 'https://raw.githubusercontent.com/SandeepKumarYaramchitti/expo-demo-spotify-clone/main/data/songs-header.jpg',
    artistHeadline: 'Lorem  ipsum',
    songs: [
        {
            id: '1',
            imageUri: 'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
            title: 'Post Malone',
            artist: 'Drake, Eminem'
        },
        {
            id: '2',
            imageUri: 'https://cdn6.f-cdn.com/contestentries/1485199/27006121/5ca3e39ced7f1_thumb900.jpg',
            title: 'Hello from other',
            artist: 'Adele'
        },
        {
            id: '3',
            imageUri: 'https://cdn6.f-cdn.com/contestentries/1485199/27006121/5ca3e39ced7f1_thumb900.jpg',
            title: 'Lorem Ipsum',
            artist: 'Drake'
        }
    ]
}

const AlbumScreen = () => {

    const route = useRoute();
    useEffect(() => {
        console.warn('Route Information', route);
    }, [])

    return (
        <>
            <View>
                <Text style={{color: 'white'}}>Hello, From Album screen</Text>
            </View>
        </>
    )

}



export default AlbumScreen