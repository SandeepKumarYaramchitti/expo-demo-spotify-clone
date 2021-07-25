import * as React from 'react';
import { StyleSheet, SafeAreaView, FlatList } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import AlbumCategory from '../components/AlbumCategory'
import albumCategories from '../data/albumCategories'

export default function HomeScreen() {
  return (
    
        <View style={styles.container}>
          
          {/* <AlbumCategory title={albumCategory.title} albums={albumCategory.albums}></AlbumCategory> */}
          {/* Lets add a flat list to render album categories in a verticle list items */}
          <FlatList
                data={albumCategories}
                renderItem={({ item }) => <AlbumCategory title={item.title} albums={item.albums} />}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
          />
        </View>
    

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
