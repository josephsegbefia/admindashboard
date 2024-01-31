import React from 'react'
import { Link } from 'react-router-dom';

import users from '../data/users.json';

const getEditTime = () => {
  const now = new Date();
  return `${now.getHours()}:${now.getMinutes()}:${now.getMilliseconds()}`;
};

const Users = () => {
  return (
    <div>
      <h1 className="title is-size-2">Team users</h1>
        <table className="table">
            <thead>
                <tr>
                    <th>User id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Department</th>
                    <th>Employment date</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
              {
                users.data.map(user => (
                  <tr>
                    <th>{user.id}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.department}</td>
                    <td>{user.employment_date}</td>
                    <td>
                     <Link to = {`/users/${user.id}?edited=${getEditTime()}`}>Edit</Link>
                    </td>
                  </tr>
                ))
              }
            </tbody>
        </table>
    </div>
  )
}

export default Users
