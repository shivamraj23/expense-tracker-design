import './Player.css';


function Player(props){

    return(
        <div className='container1'>

            <h3>{props.name}</h3>
            <p>{props.role}</p>
            <p>{props.country}</p>
            <p>{props.age}</p>
           <div className='addplayer'><p>Add</p></div>
        </div>


    );

}

export default Player;