import React from 'react';
import {Link} from 'react-router-dom';

const Li =() =>{
    return (
        <>
        <div className='link'>
        <Link exact className='onee' id ='num' to='/num1' >Page 1</Link>
        <Link exact className='homee' id ='num' to='/'>Home</Link>
        <Link exact className='twoo' id ='num' to='/num2'>Qwali's</Link>
        </div>
        </>
    )
}

export default Li;