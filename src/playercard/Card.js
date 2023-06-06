import './Card.css';
import './Player.js';
import './Player.css';
import Player from './Player.js';




function Card(){
    
    let playerlist=[
        {pname:"virat kohli",
        pcountry:"india",
        page:"34",
        prole:"batter"},
        
        {pname:"ab devilliers",
        pcountry:"south africa",
        page:"38",
        prole:"batter"}
    
    ]


    return(
        <div className='container'>
           <div><Player name={playerlist[0].pname} role={playerlist[0].prole } age={playerlist[0].page}  country={playerlist[0].pcountry} ></Player></div>
           <div><Player name={playerlist[1].pname} role={playerlist[1].prole } age={playerlist[1].page}  country={playerlist[1].pcountry} ></Player></div>
           <div><Player name={playerlist[1].pname} role={playerlist[1].prole } age={playerlist[1].page}  country={playerlist[1].pcountry} ></Player></div>
           <div><Player name={playerlist[1].pname} role={playerlist[1].prole } age={playerlist[1].page}  country={playerlist[1].pcountry} ></Player></div>
           <div><Player name={playerlist[1].pname} role={playerlist[1].prole } age={playerlist[1].page}  country={playerlist[1].pcountry} ></Player></div>
           <div><Player name={playerlist[1].pname} role={playerlist[1].prole } age={playerlist[1].page}  country={playerlist[1].pcountry} ></Player></div>
           <div><Player name={playerlist[1].pname} role={playerlist[1].prole } age={playerlist[1].page}  country={playerlist[1].pcountry} ></Player></div>
           <div><Player name={playerlist[1].pname} role={playerlist[1].prole } age={playerlist[1].page}  country={playerlist[1].pcountry} ></Player></div>
           <div><Player name={playerlist[1].pname} role={playerlist[1].prole } age={playerlist[1].page}  country={playerlist[1].pcountry} ></Player></div>
           
            
          
          




        </div>
        
    );
}

export default Card;