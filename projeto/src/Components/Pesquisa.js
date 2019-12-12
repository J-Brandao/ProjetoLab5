import React from 'react';

class Pesquisa extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <input className="form-control" type="text" placeholder="Search" aria-label="Search" onChange={this.atualiza}/>
        )
    }

    atualiza = (event) => {
        this.props.search(event.target.value);
    }
}

export default Pesquisa;