import React, { useState, useEffect} from 'react';


const Timer = () => {
  
   const [expiryTime, setExpiryTime] = useState("5 feb 2023 15:30:25");
   const [countdownTime, setCountdownTime]= useState({
           countdownDays:'',
           countdownHours:'',
           countdownlMinutes:'',
           countdownSeconds:''
       });
    const countdownTimer=()=>{
    
        const timeInterval= setInterval(() => {
          const countdownDateTime = new Date(expiryTime).getTime(); 
          const currentTime = new Date().getTime();
          const remainingDayTime = countdownDateTime - currentTime;
          const totalDays = String(Math.floor(remainingDayTime / (1000 * 60 * 60 * 24))).padStart(2,"0");
          const totalHours = String(Math.floor((remainingDayTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2,"0");
          const totalMinutes = String(Math.floor((remainingDayTime % (1000 * 60 * 60)) / (1000 * 60))).padStart(2,"0");
          const totalSeconds = String(Math.floor((remainingDayTime % (1000 * 60)) / 1000)).padStart(2,"0");
     
          const runningCountdownTime={
             countdownDays: totalDays,
             countdownHours: totalHours,
             countdownMinutes: totalMinutes,
             countdownSeconds: totalSeconds
          }
       
          setCountdownTime(runningCountdownTime);
     
          if (remainingDayTime < 0) {
             clearInterval(timeInterval);
             setExpiryTime(false);
            }
     
         }, 1000);
    }
     
    useEffect(() => {
        countdownTimer();
    });
   
    return(
        <>
        <div className="row">
            <div className="col-sm-6">
                <div className="btn-group my-3">
                {!expiryTime==false?
                    <>
                    <button type="button" className="btn btn-outline-success" style={{color:'white', fontWeight:'500'}}>{countdownTime.countdownDays} </button>
                    <button type="button" className="btn btn-success" style={{color:'white', fontWeight:'500', marginLeft:'2px', marginRight:'2px'}}>:</button>
                    <button type="button" className="btn btn-outline-success" style={{color:'white', fontWeight:'500'}}>{countdownTime.countdownHours} </button>
                    <button type="button" className="btn btn-success" style={{color:'white', fontWeight:'500', marginLeft:'2px', marginRight:'2px'}}>:</button>
                    <button type="button" className="btn btn-outline-success" style={{color:'white', fontWeight:'500'}}>{countdownTime.countdownMinutes} </button>
                    <button type="button" className="btn btn-success" style={{color:'white', fontWeight:'500', marginLeft:'2px', marginRight:'2px'}}>:</button>
                    <button type="button" className="btn btn-outline-success" style={{color:'white', fontWeight:'500'}}>{countdownTime.countdownSeconds} <span style={{fontSize:'12px'}}>S</span></button>
                    </>
                    :<p style={{color:'white'}}>Deal has been Expired</p>}
                </div>
            </div>
        </div>
    </>
  )
}

export default Timer;