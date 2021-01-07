import React from 'react'
import Card from './cardq';
import Data from './object';
import './App.css';


const Com2 = () =>{
    var  Dato = (value) => {
        return(
        <Card
        key ={value.id}
        imgsrc = {value.imgsrc}
        width = {value.width}
          title={value.title}
          names= {value.names}
          link ={value.links}
        />
        )
    }
    return(
        <>       
         {/* <div className='two'>
        <h1 style={{textAlign:'center',fontFamily:'sans-serif'}}>Hello I am 2</h1>
        </div> */}
           {Data.map(Dato)}
        </>
    )
}
export default Com2;