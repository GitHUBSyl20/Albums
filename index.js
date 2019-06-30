
import React, { Component } from 'react';
//tags to be imported so it can be used. We use destructuring import

import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header'
import AlbumList from './src/components/AlbumList'

const App = () => {
    return (
        //expand the component to occupy the entire device
        <View style={{flex: 1}}>
            <Header headerText={'Albums'} />
            <AlbumList />
        </View>

    )
}

AppRegistry.registerComponent('albums', () => App);
