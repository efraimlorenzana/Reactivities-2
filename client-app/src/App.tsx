import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Header, List } from 'semantic-ui-react';

function App() {
  const [activity, setactivity] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/activities")
    .then(r => {
      setactivity(r.data);
    });
  }, []);

  if(activity.length === 0) return <h1>Loading ...</h1>

  return (
    <div>
      <Header as='h2' icon='users' content='Reactivities' />
        <List>
        { 
          activity.map((a:any) => <List.Item key={a.id}>{a.title}</List.Item>)
        }
        </List>
    </div>
  );
}

export default App;
