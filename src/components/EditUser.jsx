/* eslint-disable no-unused-vars */
import React from 'react'
import { useParams, useLocation } from 'react-router-dom';

import users from '../data/users.json';

const getQSValue = (queryString, searchTerm) => {
  const allTerms = queryString.replace('?', '').split('&');
  const foundTerm = allTerms.find(termPair => termPair.split('=')[0] === searchTerm);

  if(foundTerm){
    return foundTerm.split('=')[1];
  }

  return '';
}

const EditUser = () => {
  const params = useLocation();
  const { id } = useParams();
  const user = users.data.find(user => user.id.toString() === id.toString()) || users.data[0];

  return (
    <div>
      <h1 className = 'title is-size-2'>Editing {user.name}, {user.id}</h1>
      <h2 className = 'subtitle'>
        Last edit made on <strong>{getQSValue(params.search, 'edited')}</strong>
      </h2>
      <div className = 'field'>
        <label className = 'label'>Name</label>
        <div className = 'control'>
          <input className = 'input' type="text" placeholder = 'Joe Segbefia' value = {user.name} />
        </div>
      </div>

      <div className = 'field'>
        <label className = 'label'>Employment date</label>
        <div className = 'control'>
          <input className = 'input' type = "text" placeholde r=' 01 Jan 2019' value = {user.employment_date} />
        </div>
      </div>

      <div className = 'field'>
        <label className = 'label'>Email</label>
        <div className = 'control'>
          <input className = 'input' type = "email" placeholder = 'elsegbefia@gmail.com' value = {user.email} />
        </div>
      </div>

      <div className = 'field'>
        <label className = 'label'>Department</label>
        <div className = 'control'>
          <input className = 'input' type = "text" placeholder = 'Office' value = {user.department} />
        </div>
      </div>

      <div className = 'field is-grouped'>
        <div className = 'control'>
          <button className = 'button is-link'>Update user</button>
        </div>
        <div className = 'control'>
          <button className = 'button 'is-link is-light>Cancel</button>
        </div>
      </div>
    </div>
  )
}

export default EditUser
