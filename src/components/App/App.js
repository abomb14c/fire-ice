import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import logo from './logo.svg';
import icon from './wolf.gif';
import './App.css';
import { connect } from 'react-redux';
import { updateHouses } from '../../actions';
import {fetchHouses} from '../../apiCalls/apiCalls';
import CardContainer from '../CardContainer/CardContainer';
import Card from '../Card/Card';

class App extends Component {

  async componentDidMount(){

    const houseData = await fetchHouses();
    this.props.handleHouses(houseData);
  }

  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros</h2>
        </div>
        <div className='Display-info'>
          {!this.props.houses &&
             <img src={icon} alt="loading" />
          }
          <CardContainer />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  fake: shape({ fake: string }),
  fakeAction: func.isRequired
};

export const mapStateToProps = (state) => ({
  houses: state.houses
});

export const mapDispatchToProps = dispatch => ({ 
  handleHouses: (houseData) => dispatch(updateHouses(houseData))
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
