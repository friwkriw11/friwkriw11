import React from 'react'
import "./styles/addChampion.scss"
import Sidebar from '../../../components/sidebar/Sidebar'
import Navbar from '../../../components/navbar/Navbar'
import Form from './components/forms/addChampion/Form'
import TopSection from '../../../components/top-section/TopSection'
function AddChampion( {data} ) {
  return (
    <div className='new-member'>
      <Sidebar activeItem={'Add Memmbers'} />
      <Navbar />
<div className="forFlex">
  
</div>
      <div className="Container">

        <div className="content mt-[100px]">
          <TopSection title={'Add New champion'} />

          <Form data={data} /> </div>
      </div>
    </div>
  )
}

export default AddChampion