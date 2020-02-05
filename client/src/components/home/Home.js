import React from "react";
export const footerdes = {
    display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  
  
}
export const footerdes2 ={
    flex:'1',
   
}
export const footerdes3={
    backgroundColor:'gray',
}

export const Home = () => {
    return(
        <div style={footerdes}>
            <button>Home</button> 
            <div style={footerdes2}></div>
            <Footer/>
        </div>
    )
};

export const Footer = () => {
    return(
    <div>

        <button style={footerdes3}>Copyright @ 2020</button>
        <button style={footerdes3}>About</button> 
        <button style={footerdes3}>Help</button>

       
    </div>
    )
};