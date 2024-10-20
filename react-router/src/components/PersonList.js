import React , { useState, useEffect }from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Notification from './Notification'
import '../styles/PersonList.css';

const API_URL=process.env.REACT_APP_API_URL
const output = axios.get("https://5000-poojag7277-reactproject-6s129bhq3ab.ws-us116.gitpod.io/persons");
const PersonList = () => {
    const [people,setPeople] = useState([]);
    const [notification,setNotification] = useState('');

    useEffect(() => {
      const fetchPeople = async () => {
        try {
          const response = await axios.get(API_URL);
          console.log(response);
          setPeople(response.data);
        } catch (error) {
          console.error('Error fetching people:', error);
        }
      };
      fetchPeople();
    }, []);
    

    console.log(output);
  console.log(API_URL)

  return (
    <div className="person-list">
      <h1>Person List</h1>
      <Link to="/add" className="btn btn-add add-person-button">Add Person</Link>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {people.map(person => (
            <tr key={person.id}>
              <td>
                <Link to={`/person/${person.id}`} className="person-name">
                  {person.name}
                </Link>
              </td>
              <td>{person.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {notification && (
        <Notification message={notification} onClose={() => setNotification('')} />
      )}
    </div>
  );
};

export default PersonList;

