import React, { useState } from 'react';
import Modal from './modal';

const ModalStart = ({data, setProjects}) => {

    const [isModalOpen, setIsModalOpen] = useState(false);  
    const toggleModal = (arr) => {
      setIsModalOpen(!isModalOpen);
      setProjects(arr);
    };
  
    return (
      <div>        
        <button onClick={toggleModal}>Select Project status</button>
        <Modal isOpen={isModalOpen} onClose={toggleModal} projects = {data}/>
      </div>
    );
  };

export default ModalStart;
