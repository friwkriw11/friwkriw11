import React from 'react';
import Model from '../models/HomeModel';
import HomeView from '../views/home/Home'
//import View from './View';

class HomeController extends React.Component {
  constructor(props) {
    super(props);
    this.model = new Model();
  }


  render() {
    return <HomeView data={this.model.data} handleEvent={this.handleEvent} />;
  }
}

export default HomeController;