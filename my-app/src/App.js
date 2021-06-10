import React from "react";

function App() {
  
  return (
    <div className="App">
      <Board></Board>
    </div>
  );
}

function getData(i){
  const values = [
    [2,"eee4da"], 
    [4,"ece0c8"], 
    [8,"f2b179"], 
    [16,"f59563"], 
    [32,"f57c5f"], 
    [64,"f65e39"], 
    [128,"edce73"], 
    [256,"edca64"], 
    [512,"ecc550"], 
    [1024,"eec843"], 
    [2048,"ecc230"], 
    [4096,"ff3c40"], 
    [8192,"ff2120"], 
    [16384,"ff2021"], 
    [32768,"ff2021"], 
    [655361,"ff2021"], 
    [131072, "ff2021"]
  ];
    return values[i][0]
}

class Board extends React.Component {

  render() {
    return <Square value = {getData(0)} />
  }
}

function Square (props) {

  return <div style={{width:"50px", height:"50px", border:"1px", background: "black", color: "white", textAlign:"center", lineHeight:"50px"}}>{props.value}</div>
}

export default App;
