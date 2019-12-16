import React, {Component} from 'react';
import {firestoreConnect} from 'react-redux-firebase';
import {connect} from 'react-redux'
import {compose} from 'redux';
import HeroList from './Hero_List';
import Pesquisa from './Pesquisa';
import {Link} from 'react-router-dom';

class Dc extends Component {

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
                <div className={"d-flex"}>
                    <Link to={'/universos'} classname={"col-1 ml-5 btn"}><button className={"btn ml-5 text-font-bold"}>Voltar</button></Link>
                    <section className={"col-5 offset-2 searchbar"}>
                        <Pesquisa search={this.atualiza}/>
                    </section>
                </div>
                <div className={"col-12 mt-4 row text-center pb-4"}>
                    <HeroList herois={herois.herois.DC_Comics} pesquisa={this.state.pesquisa}/>
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
        {collection: 'DC_Comics'}
    ])
)(Dc);