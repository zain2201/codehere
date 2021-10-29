import React, { useState, useEffect } from 'react'
import moment from 'moment';

const Getdata = (props) => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const getUsers = async () => {
        try {
            const response = await fetch(props.url);
             setLoading(false);
            setUsers(await response.json());
        } catch (error) { 
            setLoading(false);
            console.log("my error is "+ error);
        }
    }

    useEffect(() => {
        getUsers()
    }, []);

     if (loading) { 
         return(
             <>
             <div >
                <h1 style={{color:"whitesmoke"}}>Loading...</h1>
             </div>
             </>
         )
     }
    var arr=[];
    users.map(function(item,i){
        arr.push(users[i])}
    );
    console.log(arr);
    return (
        <>
            {users.map((item,i)=>{
                let hrs=Math.floor(users[i].duration/3600);
                let mins=((users[i].duration%3600))/60;
                let start_time=users[i].start_time;
                let my_date=moment(start_time).format('LLLL');
                let end_time=users[i].end_time;
                let my_endT=moment(end_time).format('LLLL');
                return <div className="contest-card" style={{backgroundColor:"transparent"}} ><a  href={users[i].url}>

                    <h2 style={{color:'whitesmoke'}}>Name: {users[i].name}</h2>
                    <p style={{color:'whitesmoke',fontSize:"1rem"}}>Duration:{hrs} hrs {mins>0?String(mins)+" mins":""}</p>
                    <p style={{color:'whitesmoke',fontSize:"1rem"}}>Start :{my_date}</p>
                    <p style={{color:'whitesmoke',fontSize:"1rem"}}>End: {my_endT}</p>
                    </a>
                    <hr style={{color:"whitesmoke"}}></hr>
                    </div>
            })}
        </>
    )
}

export default Getdata;