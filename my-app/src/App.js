import React from "react";
import { v4 as uuidv4 } from 'uuid';

function App() {
  
  return (
    <div className="App">
      <Board></Board>
    </div>
  );
}

function getData(i){
  const values = [
    [0, "#ffffff"],
    [2,"#eee4da"], 
    [4,"#ece0c8"], 
    [8,"#f2b179"], 
    [16,"#f59563"], 
    [32,"#f57c5f"], 
    [64,"#f65e39"], 
    [128,"#edce73"], 
    [256,"#edca64"], 
    [512,"#ecc550"], 
    [1024,"#eec843"], 
    [2048,"#ecc230"], 
    [4096,"#ff3c40"], 
    [8192,"#ff2120"], 
    [16384,"#ff2021"], 
    [32768,"#ff2021"], 
    [655361,"#ff2021"], 
    [131072, "#ff2021"]
  ];
    return values[i];
}

class Board extends React.Component {
  constructor(props){
    super(props);
    this.data = [
      [0, 1, 0, 0], 
      [0, 0, 0, 0], 
      [0, 0, 0, 0], 
      [0, 0, 0, 0]
    ];
  }

  render() {
    var out = [[],[],[],[]];
    out[0][0] = <Square key={uuidv4()} value={getData(this.data[0][1])} />;
    // for (var i = 0; i < this.data.length; i++){
    //   for (var j = 0; j < this.data.length; j++){
    //     if (this.data[i][j]===0){
    //       out += <Square value = {[0, "#FFFFFF"]} />
    //     } else {
    //       out += <Square value = {getData(this.data[i][j])} />
    //     }

    //     if (i === 3){
    //       out += <br />
    //     }
    //   }
    // }
    console.log(this.data)
    console.log(out);
    return <div>
      {out}
    </div>
  }
}

function Square (props) {

  return <div style={{width:"50px", height:"50px", border:"1px", background: props.value[1], color: "white", textAlign:"center", lineHeight:"50px", fontSize:"36px", display:"inline-block"}}>{props.value[0]}</div>
}

export default App;
