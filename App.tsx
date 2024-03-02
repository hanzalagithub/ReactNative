import { View, Text, SafeAreaView, ScrollView, StatusBar, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import FlashCards from './Components/FlashCards'
import ElevatedCards from './Components/ElevatedCards'
import FancyCards from './Components/FancyCards'
import ActionCard from './Components/ActionCard'

const App = () => {
  const [randomBackground, setrandomBackground] = useState('#ffffff');
  const generateColor = () => {
    const hexRange = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++){
      color += hexRange[Math.floor(Math.random()*16)]
    }
    setrandomBackground(color) 
  }
  return (
    <SafeAreaView>
      <ScrollView>
        <StatusBar backgroundColor={randomBackground}/>
        <FlashCards />
        <ElevatedCards />
        <FancyCards />
        <ActionCard />
        <View style={[styles.container,{backgroundColor: randomBackground}]}>
          <TouchableOpacity onPress={generateColor}>
            <View style={styles.actionBtn}>
              <Text>press me</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  actionBtn:{
    borderRadius:12,
    backgroundColor:'blue',
    paddingVertical:10,
    paddingHorizontal:40
  }
  
})

export default App