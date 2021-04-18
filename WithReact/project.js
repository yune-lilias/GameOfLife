function zeros(dimensions) {
             var array = [];

          for (var i = 0; i < dimensions[0]; ++i) {
        array.push(dimensions.length == 1 ? 0 : zeros(dimensions.slice(1)));
         }

          return array;
          }

var row = 50;
var col = 100;
var cells = zeros([row,col]).concat();
var cellsmask = zeros([row+2,col+2]).concat();

var sum = 0;

var sum2 = 0;
var it = 0;
var jt = 0;



var i = 0;
var j = 0;

var generations = 0;

function update23(){
  let timer = setInterval(function(){update();}, 500);
  window.setTimeout(function(){clearInterval(timer);},23*500);  
/*for (var i23 =0; i23<23; i23++){
   // console.log(i23);
       onegeneration();
      
    }
     ReactDOM.render(<App title="Game of life"/>,document.getElementById("game-area"));*/
}

function update(){
  onegeneration();
  generations++;
  let gen = document.getElementById("gen");
  gen.innerHTML = ("Generations: "+generations);
   ReactDOM.render(<App title="Game of life"/>,document.getElementById("game-area"));
}

function onegeneration(){
    var cellstmp = zeros([row,col]);
    //very importnt: otherwits change cells will also change cellstmp
    //even [...cells] not working
    for (i =0; i<row;i++){
        for (j =0; j<col;j++){
            cellstmp[i][j] = cells[i][j];
        }
    }
    for (i =0; i<row;i++){
        for (j =0; j<col;j++){
          var sum1 = 0;
        for(it=Math.max(0,i-1); it<=Math.min(i+1,row-1); it++){
        for(jt=Math.max(0,j-1); jt<=Math.min(j+1,col-1); jt++){
        sum1 = sum1 + cellstmp[it][jt];
         }}
         sum1 = sum1 - cellstmp[i][j];

          if(cellstmp[i][j] == 1){
             if(sum1 < 2 || sum1 > 3){
                console.log(sum1);
                cells[i][j] = 0;
            }}
            else{
                if(sum1 ==3){
                cells[i][j] = 1;
                //console.log("check");
               // console.log(cellstmp[i][j]);
                //console.log(cells[i][j]);
            }
            }
        }
    }
    ReactDOM.render(<App title="Game of life"/>,document.getElementById("game-area"));
}
var rand1 = 0;
var rand2 = 0;

function start(){
   // Blinker
    rand1 = Math.floor(Math.random() * 20) + 10  
    rand2 = Math.floor(Math.random() * 20) + 10  
    cells[rand1][rand2] = 1;
    cells[rand1][rand2+1] = 1;
    cells[rand1][rand2-1] = 1;

   //Beacon
    rand1 = Math.floor(Math.random() * 20) + 10  
    rand2 = Math.floor(Math.random() * 20) + 65  
    cells[rand1][rand2] = 1;
    cells[rand1+1][rand2] = 1;
    cells[rand1][rand2+1] = 1;
    cells[rand1+2][rand2+3] = 1;
    cells[rand1+3][rand2+2] = 1;
    cells[rand1+3][rand2+3] = 1;
    
    //Beehive
    rand1 = Math.floor(Math.random() * 20) + 10  
    rand2 = Math.floor(Math.random() * 20) + 40  
    cells[rand1][rand2] = 1;
    cells[rand1+1][rand2+1] = 1;
    cells[rand1-1][rand2+1] = 1;
    cells[rand1+1][rand2+2] = 1;
    cells[rand1-1][rand2+2] = 1;
    cells[rand1][rand2+3] = 1;

    //spaceship
    rand1 = Math.floor(Math.random() * 20) + 10  
    rand2 = Math.floor(Math.random() * 5) + 1  
    cells[rand1][rand2] = 1;
    cells[rand1][rand2+1] = 1;
    cells[rand1][rand2+2] = 1;
    cells[rand1-1][rand2+2] = 1;
    cells[rand1-2][rand2+1] = 1;


    ReactDOM.render(<App title="Game of life"/>,document.getElementById("game-area"));
}

function clearAll(){
//   cellsmasktmp = zeros([row+2,col+2]);
   cells = zeros([row,col]);
 //  cellsmask = zeros([row+2,col+2]);
   ReactDOM.render(<App title="Game of life"/>,document.getElementById("game-area"));
}



var dict = {
    1: "alive",
    0: "dead"
};


function isAlive(aa,bb) {
                 if(cells[aa][bb] == 1){
                    cells[aa][bb] = 0;
                    console.log("1:");
                    console.log(cells[aa][bb]);
                    return 0;}
                else{cells[aa][bb] = 1;
                    console.log("0:");
                    console.log(cells[aa][bb]);
                    return 1;}  
            }


class App extends React.Component{
            
            handleOnClick = () => {
             var id = event.target.id;
             var res = id.split(",");
             console.log(res);
              var ret = isAlive(parseInt(res[0]),parseInt(res[1])); 
            this.setState({
               className: dict[ret]
            });
            
            }

            

            render(){
            
                return (
                    <table>
              <tbody>
              {
                cells.map((numList,i) =>(
                   <tr key={i}>
                    {
                      numList.map((num,j)=>
                         <td className = {dict[num]} id = {i+","+j} onClick={this.handleOnClick} key={j}>{}</td>
                      )
                    }
                   </tr>
                ))
           }
         </tbody>
       </table>
                );
            }
        }

ReactDOM.render(<App title="Game of life"/>,document.getElementById("game-area"));


class App2 extends React.Component{
            handleClick(){
                this.props.createLife(this.props.index);
            }

            render(){
                if(this.props.value=='true'){
                    return (
                        <td style={{background:'green'}}></td>
                    );
                }else{
                    return (
                        <td onClick={this.handleClick}></td>
                    );
                }
            }
        }

 
