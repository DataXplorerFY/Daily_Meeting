
  

import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      <Text style={styles.mytext_1}>Wellcome to Fruits Count App </Text>
      <Text style={styles.myText_2}>Powered By AI-Nexus </Text>
      <Button title='Continue'/>
    
    </View>
  );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    
    backgroundColor: '#4CAF50',    
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  mytext_1:{
    color:"white",
    fontSize:20, 

  },
  myText_2:{
    color:"white",
    fontSize:15,
    margin: 10, 

  },
});
