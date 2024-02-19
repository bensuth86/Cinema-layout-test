import react from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, Pressable } from "react-native";
import { useState } from "react";
import { styles } from "./styles-sheet";

export default function App() {
  const [availableSeats, setAvailableSeats] = useState([]);
  //in the real one this would patch the available_seats array in the business table
  const [selectedSeats, setSelectedSeats] = useState([]);
  //this would patch the seat_selection array in the auction table
  const [auctionSeats, setAuctionSeats] = useState(["A2", "C3"]);
  //this would get all the seats in the seat_selection array from the auction tables for that event id. SELECT * FROM auctions WHERE event_id = ____ AND SEAT_SELECTION includes [seat]

  function generateSeatGrid(rows, columns) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let seatGrid = [];

    for (let i = 0; i < rows; i++) {
      let row = [];
      for (let j = 0; j < columns; j++) {
        let seat = alphabet[i] + (j + 1);
        row.push(seat);
      }
      seatGrid.push(row);
    }

    return seatGrid;
  }

  const seatGrid = generateSeatGrid(4, 3);

  return (
    <>
      <View style={styles.container}>
        <View style={[styles.title, styles.text]}>
          {" "}
          <>Cinema Layout: Business View</>
        </View>
        {seatGrid.map((row) => {
          return (
            <>
              <View style={styles.rowcontainer}>
                {" "}
                {row.map((seat) => {
                  const isAvailable = availableSeats.includes(seat);

                  return (
                    <>
                      <Pressable
                        onPress={() => {
                          {
                            isAvailable
                              ? setAvailableSeats(
                                  availableSeats.filter((item) => seat !== item)
                                )
                              : setAvailableSeats([...availableSeats, seat]);
                            console.log(availableSeats);
                          }
                        }}
                      >
                        <Text
                          style={[
                            styles.text,
                            isAvailable ? styles.greenseat : styles.seat,
                          ]}
                          key={seat}
                        >
                          {seat}
                        </Text>
                      </Pressable>
                    </>
                  );
                })}
              </View>
            </>
          );
        })}
        <StatusBar style="auto" />
      </View>
      <View style={styles.container}>
        <View style={[styles.title, styles.text]}>
          {" "}
          <>Cinema Layout: User View</>
        </View>
        <View style={styles.rowcontainer}>
          {seatGrid.map((seat) => {
            const isAvailable = availableSeats.includes(seat);
            const isAuctioning = auctionSeats.includes(seat);
            const isSelected = selectedSeats.includes(seat);
            return (
              <>
                {isAvailable ? (
                  <Pressable
                    onPress={() => {
                      {
                        setSelectedSeats([...selectedSeats, seat]);
                      }
                    }}
                  >
                    <Text
                      style={[
                        styles.text,
                        isSelected ? styles.redborder : styles.greenseat,
                      ]}
                      key={seat}
                    >
                      £1
                    </Text>
                  </Pressable>
                ) : isAuctioning ? (
                  <Pressable disabled="true">
                    {" "}
                    <Text style={[styles.text, styles.orangeseat]} key={seat}>
                      £3
                    </Text>
                  </Pressable>
                ) : (
                  <Pressable disabled="true">
                    {" "}
                    <Text style={[styles.text, styles.greyseat]} key={seat}>
                      {" "}
                    </Text>
                  </Pressable>
                )}
              </>
            );
          })}
        </View>
        <StatusBar style="auto" />
      </View>
    </>
  );
}
