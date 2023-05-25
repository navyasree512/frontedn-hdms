import React from 'react'
import { Link } from 'react-router-dom'

function ViewData() {
  return (
    

       
  
    <div>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">S.NO</th>
      <th scope="col">Device NAME</th>
      <th scope="col">QUANTITY</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>oxygen cylinders</td>
      <td>50</td>
     
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>masks</td>
      <td>1000</td>
     
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>syranj</td>
      <td>300</td>
      
    </tr>
  </tbody>
</table>
<div>
  <Link className='btn btn-primary' to="/choose">Go Back</Link>
</div>

    </div>
  )
}

export default ViewData
