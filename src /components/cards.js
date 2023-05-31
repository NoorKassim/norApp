import { SafeAreaViewBase, StyleSheet, Text, View } from 'react-native'
import React from 'react'




const Card = (props) => {
    return (     // if we have a string value then we must use [].
        <View style={[styles.card ]}>  
            <View style={styles.cardTop}>
                <View style={[styles.greenRct , { backgroundColor: props.bgc || 'purple'}]}></View>
                <View >
                    <Text>{'name:'  + props.name}</Text>
                    <Text>{'bd: ' + props.bd}</Text>
                   
                    
                    
                </View>
               
            </View>
         
        <Text style={styles.uiText}> my first ui </Text>
        </View>
    )
}
 // to decorate our first card: 
const styles = StyleSheet.create({
    card: {
        borderWidth: 8, // the one that lengthens the lines of our shape.
        width: '70%', // the one that gives the width for the entire page.
        padding: 10, // how far it makes the shapes be away from each other.
        borderRadius: 10, // makes the corners of the shapes lean.
        marginTop: 20, // how far each shape from the other.
        alignSelf: 'center', // places the text or whatever in the middle of the screen.
    },
    cardTop: {
        flexDirection: 'row',
        // borderWidth:1 , 
    },
    greenRct: {
        height: 100,
        width: 100,
        backgroundColor: 'green',
        marginRight: 10,
        borderRadius: 50,
    },
    uiText: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 20,
        // borderWidth:1 , 
        // alignSelf:'center'
        textAlign: 'center'

    }

})



// done. 

export default Card;


  
    

