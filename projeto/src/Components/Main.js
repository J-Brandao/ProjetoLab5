import React from 'react';
import Left from "./Left_side";
import Right from "./Right_side";
import '../App.css'
import { connect } from 'react-redux';

class Main extends React.Component {
    render() {
            return (
                <div className={"container-fluid row"}>
                    <div className={"col-6"}>
                        <Left id={"left-container"}/>
                    </div>
                    <div className={"col-6"}>
                        <Right id={"right-container"}/>
                    </div>
                </div>
            )
        }
}


export default Main;