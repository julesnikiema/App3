import { useState, useEffect } from "react";
import { StyleSheet,Text, View, Dimensions } from 'react-native';

export default function App() {

  const[dimensions, setDimensions]= useState({
    window : Dimensions.get("window")
  })

  useEffect (()=>{
    const subscription = Dimensions.addEventListener("change", ({window})=>{
      setDimensions({window});
    } )
    return()=> subscription?.remove();
  })

  const {window} = dimensions;
  const windowWidth = window.width;
  const windowHeight = window.height;


  return (
    <View style={styles.container}>
    <View style={[styles.box, {width: windowWidth > 500 ? "70%": "90%",
                              height: windowHeight > 600 ? "60%":"90%"}]}>
           <Text style={{fontSize: windowWidth> 500 ? 50 : 24}} >
       welcome jules !
        </Text>
    </View>
    </View>
  );
}

// const windowsWidth = Dimensions.get ("window").width;
// const windowsHeight = Dimensions.get("window").height;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box:{

    backgroundColor:"lightblue",
    alignItems:"center",
    justifyContent:"center"
  },
  // text:{
  //   fontSize : windowsWidth > 500 ? 50 : 24,
  // }
});
