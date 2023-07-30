import React from 'react';
import Sidebar from '../../../components/sidebar/Sidebar';
import Navbar from '../../../components/navbar/Navbar';
import './settings.scss'
import FormGSetting from './components/forms/general_settings/FormGSetting';
import FormAWorkouts from './components/forms/available_workouts/FormAWorkouts';
import FormPlans from './components/forms/plans/FormPlans'
import FormAdditionalFeatures from './components/forms/additional_features/FormAdditionalFeatures'
function Settings({data}) {
  return (
    <div className='settings'>
      <Sidebar activeItem={"Settings"} />
      <Navbar />
      <div className="forFlex">
      </div>
      <div className="Container">

        <div className="foms">
          <FormGSetting />

          <FormAWorkouts workouts = {data.aviableWorkouts} />

          <FormPlans data={data} />

          <FormAdditionalFeatures features = {data.additionalFeatures} />
        </div>

      </div>
    </div>
  )
}

export default Settings