import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className='sidebar'>
      <div className='sidebar-wrapper'>
        <i className='fas fa-bars'></i>
        <ul>
          <li>
            <Link to='/records'>Tüm Kayıtlar</Link>
          </li>
          <li>
            <Link to='/step-one'>Teslim Alınan (10) </Link>
          </li>
          <li>
            <Link to='/step-one-update'>Teslim Alınan Güncelle</Link>
          </li>
          <li>
            <Link to='/step-two'>Teklif Verilen (5) </Link>
          </li>
          <li>
            <Link to='/step-two-update'>Teklif Verilen Güncelle</Link>
          </li>
          <li>
            <Link to='/step-three'>Sonuçlanan (15) </Link>
          </li>
          <li>
            <Link to='/step-three-update'>Sonuçlanan Güncelle</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
