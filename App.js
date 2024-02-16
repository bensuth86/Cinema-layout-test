import react from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { useState } from 'react';
import { styles } from './styles-sheet';

const letters = new Array( 26 ).fill( 1 ).map( ( _, i ) => String.fromCharCode( 65 + i ) ) // [A, B, ... Z]

const rows = 3
const cols = 3

allSeats = []
for (let i=0; i < rows; i++){
  row = letters[i]
  for (let i=0; i < cols; i++){
    col = i+1
    allSeats.push(row+col)
    } 
  }

console.log(allSeats)

const booking = [{
movie: "",
startingBid: 2.00,  // starting bid per seat
currentBid: null,
seatsSelected: ["A1", "A2", "A3"] 
}]

export default function App() {
  
  const [selectedSeats, setselectedSeats] = useState([])

  return (
    <View style={styles.container}>

      <View style={[styles.title, styles.text]}>
        <>Cinema Layout!</>
      </View>
      <View style={styles.rowcontainer}>
            {allSeats.map(seat => {
              return(<Text style={[styles.seat, styles.text]} key={seat} >{seat}</Text>) }
            )}
           
            {/* <Text style={[styles.seat, styles.text]}>{firstrow[0]}</Text>            
            <Text style = {[styles.seat, styles.text]}>{firstrow[1]}</Text>
            <Text style={[styles.seat,styles.text]}>{firstrow[2]}</Text>             */}
      </View>

      {/* <View style={styles.allseats} key='allseats'>
                {row.map(seat => {
                return(
                  <View style={styles.seat} key={seat}>        
                    <>{seat}</>
                  </View>
                )
              } 
            )} 
               
        </View> */}
      <StatusBar style="auto" />
    </View>
  );
}
