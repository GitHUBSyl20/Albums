import React, {Component} from 'react';
import { ScrollView } from 'react-native'
import axios from 'axios'; 
import AlbumDetail from './src/components/AlbumDetail'

class AlbumList extends Component {
    //1-Initialize default state (empty)
    //component level state
    state ={albums :[]};

//dès que le composant est chargé
componentWillMount(){
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    //request handler for promise call setState
    .then(response =>this.setState({albums: response.data}))
}

renderAlbums(){
    //js variable in jsx : {}
    this.state.albums.map(album=>
    <AlbumDetail key={album.title} album={album}/>
    )
}

//debugger (usefull statement)
    render(){

        return (
        <ScrollView>
            {this.renderAlbums()}
        </ScrollView>
    )
     }
}

export default AlbumList;