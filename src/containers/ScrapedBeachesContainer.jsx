import React, { Component } from 'react';
import BeachCard from '../components/beachCard.jsx';
import InputForm from '../components/inputForm.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../action/actions'


const mapStateToProps = (store) => {
  return {
    beaches: store.firstReducer.beaches,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    searchBeach: actions.searchBeach
  }, dispatch)
};


class ScrapedBeachesContainer extends Component {

  componentDidMount() {
  }

  render() {
    let theBeaches = [];
    for(let i = 0; i < this.props.beaches.length; i++) {
      theBeaches.push(<BeachCard
        key={i}
        location={this.props.beaches[i].location}
        {...this.props.beaches[i].report}
      />);
    }

    return (
      <div>
        <InputForm searchBeach={this.props.searchBeach}/>
        <h1 style={{display: 'inline', float: 'left'}}>{JSON.stringify(this.props.syncData)}</h1>
        {theBeaches}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScrapedBeachesContainer);