import react from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, Pressable } from "react-native";
import { useState } from "react";
import { styles } from "./styles-sheet";

const letters = new Array(26)
  .fill(1)
  .map((_, i) => String.fromCharCode(65 + i)); // [A, B, ... Z]

const rows = 3;
const cols = 3;

allSeats = [];
for (let i = 0; i < rows; i++) {
  currentrow = []
  row = letters[i];
  for (let i = 0; i < cols; i++) {
    col = i + 1;
    currentrow.push(row + col);
  }
  allSeats.push(currentrow)
}

console.log(allSeats);

const booking = [
  {
    movie: "",
    startingBid: 2.0, // starting bid per seat
    currentBid: null,
    seatsSelected: ["A1", "A2", "A3"],
  },
];

export default function App() {
  const [selectedSeats, setselectedSeats] = useState([]);
  const [pressed, setPressed] = useState(false);
  function handlePress() {
    setselectedSeats(...selectedSeats, { seat });
    setPressed(true);
  }
  return (
    <View style={styles.container}>
      <View style={[styles.title, styles.text]}>
        <>Cinema Layout!</>
      </View>

      <View style={styles.seatscontainer}>
        {allSeats.map((row) => {  
          <View>        
          return(                        
            row.map((seat) => {
              return (
                
                <Pressable onPress={handlePress}>
                  <Text style={[styles.seat, styles.text]} key={seat}>
                    {seat}
                  </Text>
                </Pressable>
              );
            })
          )
          </View>
        }
      )}
      </View>
        {/* {row.map((seat) => {
          return (
            <Pressable onPress={handlePress}>
              <Text style={[styles.seat, styles.text]} key={seat}>
                {seat}
              </Text>
            </Pressable>
          );
        })} */}

      

      <StatusBar style="auto" />
    </View>
  );
}
