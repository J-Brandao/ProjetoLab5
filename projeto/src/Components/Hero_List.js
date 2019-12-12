import React from 'react';
import {Link} from 'react-router-dom'

const HeroList = ({herois}) => {
    return(
        <div className="section">
            {herois && herois.map(herois => {
                //console.log(herois.id);
                const estilo = {
                    width:"200px",
                    height:"200px",
                    padding:0,
                    margin: "10px",
                    border:"none",
                    backgroundImage: `url(${herois.image.url})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize:"cover",
                    borderRadius:"5px"
                };
                return(
                    <Link to={`/hero/${herois.id}`}><button value={herois.name} key={herois.id} className={"col-4"} style={estilo}/></Link>
                )
            })}
        </div>
    )
};

export default HeroList;