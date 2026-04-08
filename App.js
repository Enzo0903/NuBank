import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Eye, CircleQuestionMark, UserPen, ImagePlus} from 'lucide-react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.met}> <Text style={styles.text1}>Olá, Mundo!</Text>
        <View style={styles.eye}><Eye  size={25}/></View>
        <View style={styles.question}><CircleQuestionMark  size={25}/></View>
        <View style={styles.user}><UserPen  size={25}/></View>
        <View style={styles.foto}><ImagePlus  size={35}/></View>
      </View>
      <View style={styles.met2}>
        <Text style={styles.text2}>Conta</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  met: {
    width: '100vw',
    height: '35vh',
    backgroundColor: '#a200ff'
  },
  text1:{
    color: '#ffff',
    fontSize: 22,
    marginTop: '28vh',
    textAlign: 'left',
    paddingLeft: '5vw'
  },
  eye:{
    position: 'absolute',
    top: '5vh',
    left: '60vw',
    color: '#ffff'
  },
  question:{
    position: 'absolute',
    top: '5vh',
    left: '75vw',
    color: '#ffff'
  },
  user:{
    position: 'absolute',
    top: '5vh',
    left: '90vw',
    color: '#ffff'
  },
  foto:{
    position: 'absolute',
    top: '5vh',
    left: '5vw',
    color: '#ffffff'
  },
  text2:{
    fontSize: 20,
    color: '#2b2b2b',
    marginLeft: '3vh',
    marginTop: '1vh',
    fontWeight: 'bold'
  }

});
