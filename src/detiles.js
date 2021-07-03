import React from 'react'

function Detiles({categories}){
    return(
        <div className="detiles">

            {categories.map((item,i)=>{
            return <div className="card" key={i}>
                <img src={item.url}/>
                <div className="params">
                    <h5>height:{item.height}</h5>
                    <h5>width:{item.width}</h5>
                </div>
            </div>
                
            })}
        </div>
    )
}
export default Detiles