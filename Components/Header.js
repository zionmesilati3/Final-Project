import React,{useState, useEffect} from 'react';
import { View, Text,StyleSheet,AsyncStorage,ScrollView } from 'react-native';
import { ActionButton,Card,Button,Icon } from 'react-native-material-ui';

export default function Header({navigation}){


    return(
      <View style={styles.container}>
        <View style={styles.row}>
          <Icon color='#55f' size={52} style={{justifyContent:'center'}} name="send" />
          <View style={styles.space}></View>
            <Text style={styles.title}>Buy Or Bye</Text>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor:'#5af',
      height:100,
      borderBottomWidth:1,
      borderBottomColor:'black'
    },
    row:{
      flexDirection:'row',
      flex:1,
      justifyContent:'center',
      alignContent:'flex-end',
      alignItems:'center',
    },
    title:{
      fontSize:40,
      borderBottomWidth:1,
      alignSelf:'center'
  },
  space:{
    width:10
  },
  });