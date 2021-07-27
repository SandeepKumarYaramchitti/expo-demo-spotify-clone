import React from 'react'

import {Text} from 'react-native'
import { Album } from '../../types'

export type AlbumHeader = {
    album: Album
}

const AlbumHeader = (props: AlbumHeader) => {
    return (
        <Text style={{color: 'white'}}>Header</Text>
    )
}

export default AlbumHeader