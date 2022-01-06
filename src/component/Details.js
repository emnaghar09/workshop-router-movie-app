import React from 'react'
import './details.css'
function Details({Liste, match}) {
    const EMNA=Liste.find((elem) => (elem.id == match.params.id))
    console.log(EMNA)
    return (
        <div className="details">
       
            <h1>{EMNA.title}</h1>
            <img src= {EMNA.affiche} />
            
            
            <h2>{EMNA.description}</h2>
            
            
            </div>
            )}

export default Details
