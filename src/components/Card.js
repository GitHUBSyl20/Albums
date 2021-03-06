import React from 'react';
import { View } from 'react-native'

const Card = (props) => {
    return ( 
        <View style={styles.containerStyle}>
            {props.children}
        </View>
     );
}

//{props.children}
//is equivalent to stick this here: 
//<Text>{props.album.title}</Text>

const styles= {
    containerStyle : {
        borderWidth: 1, 
        borderRadius: 2, 
        borderColor: '#ddd', 
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2}, 
        shadowopacity: 0.1,
        shadowRAdius: 2,
        elevation: 1, 
        marginLeft: 5, 
        marginRight: 5, 
        marginTop: 10, 
    }
}
 
export default Card;