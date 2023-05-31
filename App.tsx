import react, { cloneElement, useEffect, useState, } from "react";
import { Button, Image, ImageBackground, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Card from "./src /components/cards";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
const App = () => {

  const [x, setX] = useState(0)
  const [txt, setTxt] = useState("")

  useEffect(() => {
    console.log("did load");


    return () => {
      console.log("component will unmount");
    }
  }, [])

  useEffect(() => {
    console.log("text changed, the new text is: ", txt);
  }, [txt])

  return (
    <View>
      <Text style={style.text}>{txt}</Text>
      <TextInput
        style={style.text}
        value={txt}
        onChangeText={(val) => setTxt(val)} 
        placeholder='text'
      />

      <Button title="press" onPress={() => setTxt("")} />

    </View>
  )
}

const style = StyleSheet.create({
  text: {
    fontSize: 50
  }
})

const data = [
  {
    name: 'brahem',
    bd: '19.3',
    bgc: 'red',


  },
  {
    name: 'saleh',
    bd: '23.6',
    bgc: 'blue'
  },
  {
    name: 'huda',
    bd: '21.10',
  },
  {
    name: 'nor',
    bd: '28.8'
  },
  {
    name: 'zeen',
    bd: '24.8',
  },
  {
    name: 'rabea',
    bd: '6.7',


  }




]

const renderCards = () => {
  return data.map(cardData => {
    return <Card name={cardData.name} bd={cardData.bd} bgc={cardData.bgc} />
  })


  return (
    <View style={styles.container} >
      <ScrollView showsVerticalScrollIndicator={false}>
        {renderCards()}
      </ScrollView>
    </View>
  );


}






const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // justifyContent: 'center',
    // alignItems: 'center' , 
    paddingTop: 50
  },





})














export default App;
















































