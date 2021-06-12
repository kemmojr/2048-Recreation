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
      [1, 2, 3, 4, 0], 
      [1, 2, 3, 4, 0], 
      [1, 2, 3, 4, 0], 
      [1, 2, 3, 4, 0]
    ];
  }
  
  move(direction){
    if (direction === "up"){
      var columns = [[], [], [], []];
      for (var i = 0; i < this.data.length; i++){
        for (var j = 0; j < this.data.length; j++){
          columns[j].push(this.data[i][j]);
        }
      }

      for (i = 0; i < columns.length; i++){
        var col = columns[i];
        for (j = 0; j < col.length; j++){
          for (var k = 1; k < col.length; k++){
            if (k === j+1 && col[k] === col[j]){
              if (col[k] !== 0){
                col[j] = col[j] + 1;
                for (var l = k; l < col.length-1; l++){
                  col[l] = col[l+1];
                  if (l === col.length-2){
                    col[l+1] = 0;
                  }
                }
              }
            }
          }
        }
      }

      var rows = [[], [], [], []];
      for (i = 0; i < columns.length; i++){
        for (j = 0; j < columns.length; j++){
          rows[j].push(columns[i][j]);
        }
      }

      for (i = 0; i < rows.length; i++){
        for (j = 0; j < rows.length; j++){
          this.data[i][j] = rows[i][j];
        }
      }
      
      console.log(rows);
    } else if (direction === "down"){
      //TODO
    } else if (direction === "left"){
      //TODO
    } else if (direction === "right"){
      //TODO
    }
  
  }

  render() {
    this.move("up")
    console.log(this.data)
    var out = [[],[],[],[]];
    for (var k = 0; k<out.length; k++){
      for (var l = 0; l<out.length+1; l++){
        if (l === 4){
          out[k][l] = <br />
        } else {
          out[k][l] = <Square value={getData(this.data[k][l])} key={uuidv4()} />;
        }
      }
    }
    return <div>
      {out}
    </div>
  }
}

function Square (props) {

return <div style={{width:"50px", height:"50px", border:"1px", background: props.value[1], color: "white", textAlign:"center", lineHeight:"50px", fontSize:"36px", display:"inline-block", margin:"5px"}}>{props.value[0]}</div>
}


export default App;
