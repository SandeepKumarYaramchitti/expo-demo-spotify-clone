import React from 'react'
import {View, Text, FlatList} from 'react-native'
import styles from './styles'
import {Album} from '../../types'
import AlbumComponent from '../Album'

export type AlbumCategory = {
    title: string,
    albums: [Album]
}

const AlbumCategory = (props: AlbumCategory) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
            <FlatList
                data={props.albums}
                renderItem={({ item }) => <AlbumComponent album={item} />}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
             />
        </View>
    )
}

export default AlbumCategory
