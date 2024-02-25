import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink: string){
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.ElevatedCards]}>
            <View style={styles.headingContainer}>
                <Text style={styles.headerText}>
                    Whats new in Javascript 21 - ES12
                </Text>
            </View>
            <Image 
                source={{
                    uri:'https://th.bing.com/th/id/R.b833025bfd48ce75e2146b1c1360b2ee?rik=vH6uoDUmN%2ft8kg&pid=ImgRaw&r=0'
                }}
                style={styles.cardImage}
            />
            <View style={styles.bodyContainer}>
                <Text numberOfLines={3}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ullam nisi omnis qui alias commodi? Eveniet, quam minus dolores nihil porro dicta placeat nisi cum, laboriosam ipsum distinctio reprehenderit ab!
                </Text>

            </View>
            <View style={styles.footerContainer}>
              <TouchableOpacity onPress={()=> openWebsite('https://reactnative.dev/docs/environment-setup?guide=native')}>
                <Text style={styles.sociallinks}>Read More</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.sociallinks}>Follow Me</Text>
              </TouchableOpacity>

            </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
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
    ElevatedCards:{
        backgroundColor:'lightgrey',
        elevation: 4,
        shadowOffset:{
            width: 1,
            height: 1
        },
        shadowColor: 'yellow'
    },
    headingContainer:{
        height:40,
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center'
    },
    headerText:{
        fontWeight:'bold'
    },
    cardImage:{
        height: 180,
        marginBottom: 8,
        borderTopLeftRadius:6,
        borderTopRightRadius:6
    },
    bodyContainer:{
        padding:10
    },
    footerContainer:{
        padding:8,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly'
    },
    sociallinks:{
        fontSize:16,
        backgroundColor:"white",
        paddingHorizontal:20,
        paddingVertical:6,
        borderRadius:6
    }

})