import React, {Component} from 'react';
import {firestoreConnect} from 'react-redux-firebase';
import {connect} from 'react-redux'
import {compose} from 'redux';
import HeroList from './Hero_List';

class Marvel extends Component {

    render() {
        const herois = this.props;
        //console.log(herois);
        return (
            <div className={"pt-5 listM m-5"}>
                <section className={"col-6 offset-3 searchbar"}>
                    <input className="form-control" type="text" placeholder="Search" aria-label="Search"/>
                </section>
                <div className={"col-12 mt-4 pb-4 row text-center"}>
                    <HeroList herois={herois.herois.Marvel}/>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => ({
    herois: state.firestore.ordered,
});


export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'Marvel'}
    ])
)(Marvel);