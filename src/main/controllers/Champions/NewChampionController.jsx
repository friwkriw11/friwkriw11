import React from 'react'
import ModelSettings from '../../models/SettingsModel';
import AddChampion from '../../views/champions/AddChampion';


class NewChampionController extends React.Component {

  constructor(props) {
    super(props);
    this.ModelSettings = new ModelSettings();
  }

    render() {
        return <AddChampion data={this.ModelSettings.Data} />;
      }
}

export default NewChampionController