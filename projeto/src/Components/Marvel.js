import React, {Component} from 'react';
import {firestoreConnect} from 'react-redux-firebase';
import {connect} from 'react-redux'
import {compose} from 'redux';
import HeroList from './Hero_List';
import Pesquisa from './Pesquisa';

class Marvel extends Component {

    constructor(props){
        super(props);
        this.state = {
            pesquisa: ""
        }
    }

    render() {
        const herois = this.props;
        //console.log(herois);
        return (
            <div className={"pt-5 listM m-5"}>
                <section className={"col-6 offset-3 searchbar"}>
                    <Pesquisa search={this.atualiza}/>
                </section>
                <div className={"col-12 mt-4 pb-4 row text-center"}>
                    <HeroList herois={herois.herois.Marvel} pesquisa={this.state.pesquisa}/>
                </div>
            </div>
        );
    }

    atualiza = (txt) => {
        console.log(txt);
        this.setState({pesquisa: txt});
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