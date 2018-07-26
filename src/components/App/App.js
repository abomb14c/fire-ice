import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import logo from './logo.svg';
import icon from './wolf.gif';
import './App.css';
import { connect } from 'react-redux';
import { updateHouses } from '../../actions';
import {fetchHouses} from '../../apiCalls/apiCalls';

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
          {!this.props.houses &&
            <img src={icon} alt="loading" />
          }
          <h2>Welcome to Westeros</h2>
          <button onClick={() => {
            this.props.fakeAction();
            alert(this.props.fake);
          }}> FAKE ACTION</button>
        </div>
        <div className='Display-info'>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  fake: shape({ fake: string }),
  fakeAction: func.isRequired
};

const mapStateToProps = (state) => ({
  houses: state.houses
});


const mapDispatchToProps = dispatch => ({ 
  handleHouses: (houseData) => dispatch(updateHouses(houseData))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
