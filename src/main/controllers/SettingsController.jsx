import React from 'react';
import Model from '../models/SettingsModel';
import Settings from '../views/settings/Settings';
//import View from './View';

class SettingsController extends React.Component {
  constructor(props) {
    super(props);
    this.model = new Model();
  }


  render() {
    return <Settings data={this.model.Data}  />;
  }
}

export default SettingsController;