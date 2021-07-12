import React from 'react'
import {View, Text} from 'react-native'
import styles from './styles'
import {Album} from '../../types'

export type AlbumCategory = {
    title: string,
    albums: [Album]
}

const AlbumCategory = (props: AlbumCategory) => {
    return (
        <View>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    )
}

export default AlbumCategory
