import React from 'react';
import './index.css';

function Card(props){
    return (
        <>
            <div className='cards'>
                <div className='card'>
                    <img 
                    src={props.imgsrc}
                    title= {props.title}
                    // width= {props.width}
                    className='cardimg' />
                    <div className='cardinfo'>
                    <span className='cardcatagory'>{props.title}</span>
                    <h3 className='cardtitle'>{props.names}</h3>
            
                    
                    <a href={props.link}>
                        <button className='btn'>Watch Now</button>
                    </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;