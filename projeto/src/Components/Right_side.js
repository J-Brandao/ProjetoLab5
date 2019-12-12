import React, {Component} from 'react';
import {firestoreConnect} from 'react-redux-firebase';
import {connect} from 'react-redux'
import {compose} from 'redux';
import imagem from '../85.jpg';
import HeroList from './Hero_List';
import HeroDetails from "./HeroDetails";

class Right_side extends React.Component {

    render() {
        const herois = this.props;
        console.log(herois);
        const estilo = {
            width: "200px",
            height: "250px",
            backgroundImage: `url(${imagem})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            border: "3px solid white"
        };
        return (
            <div className={"div-border-left"}>
                <section className={"col-6 offset-3 searchbar"}>
                    <input className="form-control" type="text" placeholder="Search" aria-label="Search"/>
                    <div className="col-12">
                    </div>
                </section>
                <div className={"col-12 mt-4 row"}>
                    <HeroList herois={herois.herois.Marvel}/>
                </div>
            </div>
        );
    }
};


const mapStateToProps = (state) => ({
    herois: state.firestore.ordered,
});


export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'Marvel'}
    ])
)(Right_side);