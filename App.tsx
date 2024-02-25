import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlashCards from './Components/FlashCards'
import ElevatedCards from './Components/ElevatedCards'
import FancyCards from './Components/FancyCards'
import ActionCard from './Components/ActionCard'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlashCards />
        <ElevatedCards />
        <FancyCards />
        <ActionCard />
      </ScrollView>
    </SafeAreaView>
  )
}

export default App