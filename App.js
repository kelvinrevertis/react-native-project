import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={viewStyles.container}>
      <Text style={styles.texto}>Hello World!</Text>
      <Text>I don't wanna, talk about it</Text>
    </View>

  );
}

const viewStyles = StyleSheet.create({
  container:{
    backgroundColor:'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
    
  }
})

const styles = StyleSheet.create({
  texto: {
    marginTop: 20,
    fontSize:20,
    borderRadius: 4,
    backgroundColor: 'lightgreen'

  },
});
