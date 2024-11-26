import { StyleSheet,Text, View, SafeAreaView, Platform } from 'react-native';

import CustomButton from './components/CustomButton';

export default function App() {



  return (
    <SafeAreaView style={styles.safecontainer}> 
    <View style={styles.container}>
    <View style={styles.box} >
           <Text style={styles.text}>welcome jules !</Text>
           <CustomButton />
    </View>
    </View>
    </SafeAreaView>
  );
}




const styles = StyleSheet.create({
  safecontainer: {
    flex: 1,
    backgroundColor: 'plum',
  },
  container :{
    backgroundColor: 'plum', 
    flex: 1,
    paddingTop: Platform.OS ==="android"? 45:0,
  },
  box:{
  padding :20,
  },
  
  text:{
    ...Platform.select({
      android:{
        color:"purple",
        fontSize:24,
        fontStyle:"italic",
      },
      ios : {
        color:"blue",
        fontSize:24,
        fontStyle:"italic",  
      },
    }),
    fontWeight : "bold",
    textAlign :"center",
  }
  
});
