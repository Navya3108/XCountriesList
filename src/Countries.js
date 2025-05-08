import React, { useEffect, useState } from "react";

const Countries=()=>{
 const [apidata,setapidata]=useState([]);
 const [errorMessage, setErrorMessage] = useState(null);
 useEffect(()=>{
    fetch('https://xcountries-backend.azurewebsites.net/all').then(response=>response.json()).then((data) =>setapidata(data))
    .catch((error) => {
        console.error("Error fetching data:", error);
        
      });

 },[]);
 const Card = ({ key,name,flag }) => {
    return (
      <div style={styles.card}>
        <img src={flag} alt={`${name} flag`} style={{width:"80px",height:"80px"}} />
        <h3 style={{fontSize:"10px"}}> {name}</h3>
      </div>
    );
   
  };
  const styles = {
    card: {
        display: "flex",  // Enables Flexbox
        alignItems: "center",  // Centers items vertically
        flexDirection:"column",
        justifyContent: "space-between",  // Spaces items evenly
        border: "1px solid #ccc",
        gap:"5px",
        padding: "15px",
        borderRadius: "10px",
        margin:"10px",
        width:"100px",
        height:"100px"
        
    },
  };
 return(
 <div style={{display:"flex",flexWrap:"wrap",gap:"10px"}}>
    {apidata.map(({flag,name,abbr})=>(
        <Card key={abbr} name={name} flag={flag}/>
    ))}
 </div>
 );
};

export default Countries;