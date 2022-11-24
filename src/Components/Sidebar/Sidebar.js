import React, {useEffect, useState} from 'react';
import PlusIcon from '../../assets/add_circle_large.svg';
import DeleteIcon from '../../assets/delete_small.svg';

import './Sidebar.css';
function Sidebar(props) {

  const colors = ["#fe9b72", "#fec971", "#00d4fe", "#b693fd", "#e4ee91"];
  const [listOpen, setListOpen]=useState(false)
  return (
    <div className='sidebar'>
      <p>Sidebar</p>
      <img src={PlusIcon} alt="Add" onClick={() => setListOpen(!listOpen)} />
      <ul className={`sidebar_list ${listOpen?"sidebar_list_active":""}`}>

        {colors.map((item, index) => (
          <li 
            key={index} 
            className='sidebar_list_item' 
            style={{backgroundColor:item}}
            onClick={()=>props.addNote(item)}
          />
        ))}
      </ul>
    </div>
  );
}

export default Sidebar
