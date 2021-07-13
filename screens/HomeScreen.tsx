import * as React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import AlbumCategory from '../components/AlbumCategory'

const albumCategory = {
  id: '1',
  title: 'My Test',
  albums: [{
    id: '1',
    imageUrl: 'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
    albumHeadline: 'High on You',
  },{
    id: '2',
    imageUrl: 'https://cdn6.f-cdn.com/contestentries/1485199/27006121/5ca3e39ced7f1_thumb900.jpg',
    albumHeadline: 'Lorem Ipsum',
  },{
    id: '3',
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61F66QURFyL.jpg',
    albumHeadline: 'Hello from the other side',
  },{
    id: '4',
    imageUrl: 'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
    albumHeadline: 'High on You',
  }]
  // artist: 'Helen',
}

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
        <View style={styles.container}>
          <AlbumCategory title={albumCategory.title} albums={albumCategory.albums}></AlbumCategory>
        </View>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
