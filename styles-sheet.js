import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    // marginTop: 10,
    flex: 1,
    flexDirection: "column", // aligned vertically
    flexWrap: "wrap", // fit items within container
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    borderWidth: 6,
    borderColor: "black",
  },
  title: { backgroundColor: "lightblue", width: 150, padding: 10 },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
  rowcontainer: {
    // flex: 1,
    // flexDirection: "row", // aligned horizontally
    // flexWrap: "wrap",
    alignItems: "baseline",
    gap: 10,
    borderWidth: 1,
    borderColor: "red",
  },
  seatscontainer: {
    // flex: 1,
    flexDirection: "row", // aligned horizontally
    flexWrap: "wrap",
    alignItems: "baseline",
    width: 120,
    gap: 10,
    borderWidth: 2,
    borderColor: "lightgreen",
  },
  seat: {
    // flex: 1,

    backgroundColor: "#626262",
    padding: 4,

    width: 30,
    height: "25px",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    // position: 'relative',
    // top: '1',
  },
  selectedseat: {
    backgroundColor: "#626262",
    padding: 4,
    width: 30,
    height: 25,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 4,
    width: 30,
    height: 25,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  allseats: {
    flex: 1,
    flexDirection: "row",
    gap: "10",
  },
});

// module.exports = {styles}

// body {
//   margin: 0;
//   padding: 0;
//   font-family: 'Exo 2', sans-serif;
//   background: #222222;
//   color: white;
//   font-size: 14px;

//   min-height: 100vh;
//   display: grid;
//   place-items: center;
// }

// .App {
//   text-align: center;
//   display: flex;
//   flex-flow: column;
//   align-items: center;
// }

// .Movies {
//   margin-bottom: 24px;
// }

// .Movies select {
//   appearance: none;
//   background: white;
//   font-size: 14px;
//   margin-left: 12px;
//   border-radius: 4px;
//   padding: 6px 24px;
// }

// .ShowCase {
//   margin: 0 0 48px;
//   padding: 0;
//   list-style: none;
//   display: flex;
//   justify-content: center;
//   background: #3b3b3b;
//   padding: 12px;
//   border-radius: 4px;
//   color: #7e7e7e;
// }

// .ShowCase li {
//   margin: 0 12px;
// }

// .Cinema {
//   margin-bottom: 18px;
//   perspective: 400px;

//   display: grid;
//   place-items: center;
//   grid-gap: 24px;
// }

// .Cinema .screen {
//   height: 70px;
//   background: white;
//   width: 100%;
//   transform: rotateX(-30deg) scale(1.1);
//   box-shadow: 0 3px 10px 2px;
// }

// .Cinema .seats {
//   display: grid;
//   grid-gap: 6px;
//   grid-template-columns: repeat(8, min-content);
//   align-items: center;
// }

// .Cinema .seats .seat:nth-of-type(8n + 2) {
//   margin-right: 12px;
// }

// .Cinema .seats .seat:nth-of-type(8n + 6) {
//   margin-right: 12px;
// }

// .Cinema .seats .seat:not(.occupied):hover,
// .Cinema .seats .seat:not(.occupied):focus {
//   cursor: pointer;
//   background: #c1eac5;
//   transform: scale(1.2);
// }

// .Cinema .seats .seat.selected::after {
//   content: '';
//   position: absolute;
//   top: 0;
//   left: 2px;
//   width: 12px;
//   height: 12px;
//   border-radius: 100%;
//   background: transparent;
//   border: 1px solid #7bc47f;
//   animation: show-off 0.8s;
//   visibility: hidden;
// }

// @keyframes show-off {
//   0% {
//     transform: scale(1);
//     opacity: 1;
//     visibility: visible;
//   }

//   100% {
//     transform: scale(3);
//     opacity: 0;
//   }
// }

// .seat {
//   display: inline-block;
//   background: #626262;
//   width: 16px;
//   height: 12px;
//   border-top-left-radius: 10px;
//   border-top-right-radius: 10px;
//   transition: transform 0.3s ease-in-out;

//   position: relative;
//   top: 1px;
// }

// .seat.selected {
//   background: #7bc47f !important;
// }

// .seat.occupied {
//   background: #cfcfcf;
// }

// .info .count {
//   color: #7bc47f;
// }

// .info .total {
//   color: #7bc47f;
// }
