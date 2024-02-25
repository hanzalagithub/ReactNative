import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FancyCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image 
            source={{
                uri:'https://th.bing.com/th/id/R.10c4191a52357746e658a6722276d74a?rik=r%2fQIvAmJ75YI%2bQ&pid=ImgRaw&r=0'
            }}
            style={styles.cardImage}
        />
        <View style={styles.cardBody}>
            <Text style={styles.cardtitle}>Beautifull Place</Text>
            <Text style={styles.cardLabel}>Sky,Land</Text>
            <Text style={styles.cardDescription}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt corporis quidem consectetur doloremque incidunt, expedita eum dignissimos error vel cum pariatur totam suscipit officia perspiciatis ut numquam impedit in. Est.</Text>
            <Text style={styles.cardFooter}>12 miles Away</Text>
        </View>
      </View>
    </View>
  )
}

export default FancyCards

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    card:{
        width: 330,
        height: 360,
        borderRadius:6,
        marginVertical: 12,
        marginHorizontal:16
        
    },
    cardElevated:{
        backgroundColor: 'lightgrey',
        elevation:3,
        shadowOffset:{
            width:1,
            height:1
        }
    },
    cardImage:{
        height: 180,
        marginBottom: 8,
        borderTopLeftRadius:6,
        borderTopRightRadius:6
    },
    cardBody:{
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12
    },
    cardtitle:{
        color:'black',
        fontWeight:'bold',
        fontSize: 22,
        marginBottom:2
    },
    cardLabel:{
        marginBottom:2
    },
    cardDescription:{
        marginBottom:7
    },
    cardFooter:{
        marginBottom:2,
        color:'green'
    }
})