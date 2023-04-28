import React, {  useState } from 'react';
import {  MDBCard,MDBInput} from 'mdb-react-ui-kit';
import Usercard from './Usercard';

export default function Search() {
    const [users, setusers] = useState([])
    console.log(users)
    
    const [searchInput, setSearchInput] = useState('');
    
   
            const handleSearch = async (e) => {
              e.preventDefault();
              const res = await fetch(`http://localhost:9000/search?firstname=${searchInput}`, {
                method: 'GET'
            })
            const data = await res.json();
            setusers(data.users)
             
            };
          
            const handleClose = () => {
              setSearchInput('')
              setusers([]);
            };
   
  return (
    <form className="search_form" onSubmit={handleSearch}>
      <MDBInput label='Please Enter firstname' 
       
       onChange={(e) =>
        setSearchInput(e.target.value.toLowerCase().replace(/ /g, " "))
      }

      />
      <div
        onClick={handleClose}
        className="close_search"
        style={{ opacity: users.length === 0 ? 0 : 1 }}
      >
        &times;
      </div>
      <button type="submit" style={{ display: "none" }}>
        Search
      </button>
      <div className="users">
        
      <MDBCard>
     
        {searchInput &&
          users.map((user) => (
            <Usercard
              key={user._id}
              user={user}
              border="border"
              handleClose={handleClose}
            />
          ))}
          
          </MDBCard>
      </div>
      </form>
    
  );
}