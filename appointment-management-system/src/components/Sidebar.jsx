import React, { useState } from 'react';
import { FaUser, FaUserMd, FaSearch, FaUserPlus } from 'react-icons/fa';
import PatientRegistrationDialog from './PatientRegistrationForm';
import './SidebarStyles.css';

const Sidebar = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [patientDropdownVisible, setPatientDropdownVisible] = useState(false);
  const [doctorDropdownVisible, setDoctorDropdownVisible] = useState(false);

  const togglePatientDropdown = () => {
    setPatientDropdownVisible(!patientDropdownVisible);
    if (doctorDropdownVisible) {
      setDoctorDropdownVisible(false);
    }
  };

  const toggleDoctorDropdown = () => {
    setDoctorDropdownVisible(!doctorDropdownVisible);
    if (patientDropdownVisible) {
      setPatientDropdownVisible(false);
    }
  };

  const openDialog = () => {
    setShowDialog(true);
  };

  const closeDialog = () => {
    setShowDialog(false);
  };

  return (
    <div className="sidebar">
      <div className="dropdown">
        <button className="dropbtn" onClick={togglePatientDropdown}>
          <FaUser /> Patient
        </button>
        <div
          className={`dropdown-content ${patientDropdownVisible ? 'open' : ''}`}
        >
          <button className="dropdown-item" onClick={openDialog}>
            Register new patient <FaUserPlus className="register-icon" />
          </button>
          <div className="search-container">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search existing patient"
              className="search-input"
            />
          </div>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn" onClick={toggleDoctorDropdown}>
          <FaUserMd /> Doctor
        </button>
        <div
          className={`dropdown-content ${doctorDropdownVisible ? 'open' : ''}`}
        >
          <div className="search-container">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search doctor"
              className="search-input"
            />
          </div>
        </div>
      </div>
      {showDialog && <PatientRegistrationDialog onClose={closeDialog} />}
    </div>
  );
};

export default Sidebar;