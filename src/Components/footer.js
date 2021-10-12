import React from 'react'
import './footer.css'
import L02 from '../Images/L02.png'
import SM01 from '../Images/SM01.png'
import SM02 from '../Images/SM02.png'
import SM03 from '../Images/SM03.png'



export default function footer() {
return (
<div>
    <div className="P02">
        <img className="I02" src={L02} />
        <div className="SMs">
        <a href="https://www.instagram.com/"> <img className="SM" src={SM01} /> </a>
        <a href="https://www.facebook.com/"> <img className="SM" src={SM02} /> </a>
        <a href="https://www.twitter.com/"> <img className="SM" src={SM03} /> </a>
        </div>
    </div>
            
</div>
)
}
