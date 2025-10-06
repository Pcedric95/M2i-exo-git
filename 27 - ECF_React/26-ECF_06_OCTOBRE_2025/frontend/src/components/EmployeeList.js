import React, { useState } from 'react';
import './EmployeeList.css';

const EmployeeList = () => {
  // Données mockées pour les employés
  const [employees] = useState([
    { id: 1, firstName: 'Linda', lastName: 'Quigley', email: 'britteny.dooley@hotmail.com' },
    { id: 2, firstName: 'Sheldon', lastName: 'Shanahan', email: 'janella.dickinson@yahoo.com' },
    { id: 3, firstName: 'Kanesha', lastName: 'Lind', email: 'alisa.beahan@hotmail.com' },
    { id: 4, firstName: 'Jermaine', lastName: 'Kub', email: 'marchelle.okuneva@gmail.com' },
    { id: 5, firstName: 'Tashia', lastName: 'Ledner', email: 'joey.walter@yahoo.com' }
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const handleEdit = (id) => {
    console.log('Edit employee:', id);
  };

  const handleDelete = (id) => {
    console.log('Delete employee:', id);
  };

  const handleAddEmployee = () => {
    console.log('Add new employee');
  };

  return (
    <div className="employee-list-container">
      <div className="employee-header">
        <h2>Employees</h2>
        <button className="add-employee-btn" onClick={handleAddEmployee}>
          ADD EMPLOYEE
        </button>
      </div>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="employee-table-container">
        <table className="employee-table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map(employee => (
              <tr key={employee.id}>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td>
                  <button 
                    className="edit-btn"
                    onClick={() => handleEdit(employee.id)}
                  >
                    EDIT
                  </button>
                  <button 
                    className="delete-btn"
                    onClick={() => handleDelete(employee.id)}
                  >
                    DELETE
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pagination">
        <div className="pagination-info">
          <span>Rows per page: </span>
          <select defaultValue="5">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="25">25</option>
          </select>
          <span className="page-info">1–5 of 295</span>
        </div>
        <div className="pagination-controls">
          <button>‹</button>
          <button>›</button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeList;
