import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Eye, CircleQuestionMark, UserPen, ImagePlus, BanknoteArrowUp, QrCode, Barcode, ChevronRight, Smartphone, CreditCard} from 'lucide-react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.mtd}> <Text style={styles.text1}>Olá, Mundo!</Text>
        <View style={styles.eye}><Eye  size={25}/></View>
        <View style={styles.question}><CircleQuestionMark  size={25}/></View>
        <View style={styles.user}><UserPen  size={25}/></View>
        <View style={styles.foto}><ImagePlus  size={35}/></View>
      </View>

      <View style={styles.mtd2}>
        <View style={styles.valores}>
          <Text style={styles.text2}>Saldo em conta</Text>
          <Text style={styles.money}>R$20.560</Text>
          <View style={styles.chevronRight}><ChevronRight/></View>
        </View>
        <View style={styles.balls}>
          <View style={styles.opc}>
            <View style={styles.radius}><QrCode size={30} /></View>
            <Text style={styles.pix}>Pix</Text>
          </View>
          <View style={styles.opc}> 
            <View style={styles.radius}><Barcode size={30} /></View>
            <Text style={styles.pagamento}>Pagamento</Text>
          </View>
          <View style={styles.opc}>
            <View style={styles.radius}><BanknoteArrowUp size={30} /></View>
            <Text style={styles.pagamento}>Pagamento</Text>
          </View>
          <View style={styles.opc}>
            <View style={styles.radius}><Smartphone size={30} /></View>
            <Text style={styles.transf}>Transferência</Text>
          </View>
        </View>
        <View style={styles.cards}>
          <View style={styles.credito}><CreditCard/></View>
          <Text style={styles.cardText}>Meus cartões</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2b2b2b',
  },
  mtd: {
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
    fontSize: 22,
    color: '#ffffff',
    marginLeft: '3vh',
    marginTop: '3vh',
    fontWeight: 'black'
  },
  money:{
    fontSize: 20,
    color: '#ffffff',
    marginLeft: '3vh',
    marginTop: '1vh'
  },
  mtd2:{
    width: '100vw',
    height: '65vh',
    backgroundColor: '#2b2b2b'
  },
  chevronRight:{
    position: 'absolute',
    left: '90vw',
    top: '5vh',
    color: '#ffffff'
  },
  balls:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100vw',
    height: '20vh'
  },
  radius:{
    width: '70px',
    height: '70px',
    backgroundColor: '#4b4949',
    borderRadius: '50%',
    marginTop: '6vh',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ffffff',
  },
  opc:{
    flexDirection:'column',
    alignItems:'center',
  },
  pix:{
    color: '#ffffff',
    marginTop: '1vh'
  },
  pagamento:{
    color: '#ffffff',
    marginTop: '1vh'
  },
  transf:{
    color: '#ffffff',
    marginTop: '1vh'
  },
  caixa:{
    color: '#ffffff',
    marginTop: '1vh'
  },
  cards:{
    width: '90vw',
    height: '10vh',
    borderRadius: '8px',
    position: 'relative',
    left: '5vw',
    top: '5vh',
    backgroundColor: '#4b4949',
    paddingLeft: '16vw'
  },
  cardText:{
    color: '#ffffff',
    fontSize: 18,
    marginTop: '3vh',
  },
  credito:{
    position: 'absolute',
    left: '5vw',
    top: '3vh',
    color: '#ffffff'
  }
}
);
