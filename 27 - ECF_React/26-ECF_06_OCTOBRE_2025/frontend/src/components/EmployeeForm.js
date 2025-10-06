import React from 'react';
import { useEffect } from 'react';
import { use } from 'react';
import {useParams, useNavigate} from 'react-router-dom';

const EmployeeForm = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const isEditMode = Boolean(id); // Déterminer si mode édition / ajout


  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    department: ''
  })

  // ------------- simulation données car pas de backend fonctionnel - RAPPEL -> A FAIRE /!\ -------------

  useEffect(() => {
    if (isEditMode) {
      setFormData({
        firstName: 'Linda',
        lastName: 'Quigley',
        email: 'britteny.dooley@hotmail.com',
        department: 'HR'
      });
    }
  }, [isEditMode]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(isEditMode ? `Mise à jour de l'employé ID: ${id} - en cours de développement` : 'Ajout nouvel employé - en cours de développement');
    navigate('/employees');
  };


  return (
    <div className='employee-form-container'>
    
      <div className='employee-form-header'>
        <h2>{isEditMode ? 'Edit Employee' : 'Add Employee'}</h2>
      </div>
    
      <form className='employee-form' onSubmit={handleSubmit}>
        
        <div className='form-group'>
          <label htmlFor='firstName'>First Name</label>
          <input 
            type='text'
            id='firstName'
            name='firstname'
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>

        <div className='form-group'>
          <label htmlFor='lastName'>Last Name</label>
          <input 
            type='text'
            id='lastName'
            name='lastname'
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className='form-group'>

        </div>
        
        <div className='form-group'>

        </div>
      </form>

    </div>
  );
};

export default EmployeeForm;
