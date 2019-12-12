import React, {Component} from 'react';
import {Link} from 'react-router-dom';

function Left_side() {

        return (
            <div className={"container row no-gutters mainDiv"}>
                <div className={"botoes_esquerda"}>
                    <Link to={"/marvel"}><button className={"Comic_button_Marvel col-12 no-gutters"}><span className={"button_text"}>Marvel</span></button></Link>
                <br/>
                    <Link to={"/dc"}><button className={"Comic_button_DC col-12 no-gutters"}><span className={"button_text"}>DC Comics</span></button></Link>
            </div>
            </div>
        );

}


export default Left_side;
