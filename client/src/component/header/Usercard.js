import React from 'react'
import { Link } from "react-router-dom";
import { MDBListGroupItem } from 'mdb-react-ui-kit';
function Usercard({user,handleClose,}) {
    const handleCloseAll = () => {
        if (handleClose) handleClose();
      
      };
  return (
    
        
     <MDBListGroupItem> 
     <Link  to={`/profile/${user._id}`}
    onClick={handleCloseAll}
    className="d-flex align-items-center"
    style={{ textDecoration: "none" }}>
    
   <span>{user.firstname}</span> 
    
   </Link>
   </MDBListGroupItem> 
   
    
    
  )
}

export default Usercard