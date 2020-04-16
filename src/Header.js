 import React from "react";

function Header(){

  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;

   const styles ={
     fontSize: 20
      };
  
  if (hours < 12){
    timeOfDay = "Morning" 
    styles.color= "skyblue"
  }else if (hours >=12 && hours < 17){
    timeOfDay ="Afternoon"
styles.color="yellow"
  }else { timeOfDay = "night"
  styles.color="#D90000"}


  return(
<div >
   <h1 className="navbar"> To Do App </h1>
   <h3 style={styles}>  Good {timeOfDay} Austin</h3>
  </div>
  )
}
 export default Header
