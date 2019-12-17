import React, {Component} from 'react';
import {firestoreConnect} from 'react-redux-firebase';
import {connect} from 'react-redux'
import {compose} from 'redux';
import HeroList from './Hero_List';
import Pesquisa from './Pesquisa';
import {Link} from 'react-router-dom';

class Marvel extends Component {

    constructor(props){
        super(props);
        this.state = {
            pesquisa: ""
        }
    }

    render() {
        const herois = this.props;

        const {auth} = this.props;
        if (!auth.uid) {this.props.history.push('/')}
        //console.log(herois);
        return (
            <div className={"pt-5 listM m-5"}>
                <div className={"d-flex"}>
                    <Link to={'/universos'} classname={"col-1 ml-5 btn"}><button className={"btn ml-5 text-font-bold"}>Voltar</button></Link>
                    <section className={"col-5 offset-2 searchbar"}>
                        <Pesquisa search={this.atualiza}/>
                    </section>
                </div>
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
    auth: state.firebase.auth
});


export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'Marvel'}
    ])
)(Marvel);