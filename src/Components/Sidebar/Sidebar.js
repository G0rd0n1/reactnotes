import React from 'react';
import './Sidebar.css';
import PlusIcon from '../../assets/add_circle_large.svg';
import DeleteIcon from '../../assets/delete_svg.svg';

function Sidebar() {

  const colors = ["#fe9b72", "#fec971", "#00d4fe", "#b693fd", "#e4ee91"]
  return (
    <div className='sidebar'>
      <p>Sidebar</p>
      <img src={PlusIcon} alt="Add" className='plus' />
      <ul className="sidebar_list">

        {colors.map((item, index) => (
          <li 
            key={index} 
            className='sidebar_list_item' 
            style={{backgroundColor:item}}
          />
        ))}

        <img src={DeleteIcon} alt="Add" className='plus' />
      </ul>
    </div>
  );
}

export default Sidebar
