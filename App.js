import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Hello World!</Text>
      <Text>I don't wanna, talk about it</Text>
      <Text style={styles.texto}>Test</Text>
    </View>

  );
}



const styles = StyleSheet.create({
  texto: {
    marginTop: 20,
    fontSize:20,
    borderRadius: 4,
    backgroundColor: 'lightgreen'

  },
  container:{
    backgroundColor:'skyblue',
    alignItems: 'center',// alinha os itens na horizontal
    justifyContent: 'center',// alinha os itens na vertical
    flex: 1
    
  },
});
