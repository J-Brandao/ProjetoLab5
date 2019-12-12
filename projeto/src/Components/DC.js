import React, {Component} from 'react';
import {firestoreConnect} from 'react-redux-firebase';
import {connect} from 'react-redux'
import {compose} from 'redux';
import HeroList from './Hero_List';
import Pesquisa from './Pesquisa';

class Dc extends Component {

    render() {
        const herois = this.props;
        //console.log(herois);
        return (
            <div className={"pt-5 listM m-5"}>
                <section className={"col-6 offset-3 searchbar"}>
                    <Pesquisa search={this.atualiza}/>
                </section>
                <div className={"col-12 mt-4 row text-center pb-4"}>
                    <HeroList herois={herois.herois.DC_Comics}/>
                </div>
            </div>
        );
    }

    atualiza = (txt) => {
        console.log(txt);
    }
}


const mapStateToProps = (state) => ({
    herois: state.firestore.ordered,
});


export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'DC_Comics'}
    ])
)(Dc);