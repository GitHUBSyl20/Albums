import React, {Component} from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card'
import CardSection from './CardSection'
import Button from './Button'

//wip

const AlbumDetail = ({ album }) => {
    const { 
        title, 
        artist, 
        thumbnail_image, 
        image, url } = album

    const { 
        thumbnailStyle,
        containerText, 
        thumbnailContainerStyle, 
        headerTextStyle, 
        imageStyle } = styles

    //IN THE CARD THERE ARE CHILDRENS

    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image
                        style={thumbnailStyle}
                        source={{ uri: thumbnail_image }}
                    />
                </View>
                <View style={containerText}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image
                    style={imageStyle}
                    source={{ uri: image }} />
            </CardSection>

            <CardSection>
                <Button onPress={()=>Linking.openURL(url)}>
                    Buy Now
                </Button>
            </CardSection>
        </Card>
    )
}
  //Buy Now will be passed to the button childrien thanks to the children prop


const styles = {
    containerText: {
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItem: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
}

export default AlbumDetail