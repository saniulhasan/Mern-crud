import React, { useEffect, useState } from 'react'
import { useParams} from 'react-router-dom'
import {
  MDBCard,
  
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
 
} from 'mdb-react-ui-kit';

import DefaultPhoto from '../../images/logo.png'
function UserDetails() {
  const [details, setdetails] = useState({})
  const params = useParams();
  const { userid } = useParams();
  let photoUrl = details.photo ? `http://localhost:9000/photo/${details._id}?${new Date().getTime()}` : DefaultPhoto
  console.log(details)
  useEffect(() => {
    const getData = async () => {
        try {
            const res = await fetch(`http://localhost:9000/profile/${userid}`, {
                method: 'GET'
            })
            const data = await res.json();
            setdetails(data)
        }
        catch (err) {
            console.log(err)
        }
    }
    return getData;
}, [])
  return (
    <div>
    
    
    

<MDBCard >


    
<MDBCardBody>
<MDBCardText>
      id: {details._id}
        </MDBCardText>
       
       <MDBCardText>
      firstname: {details.firstname}
        </MDBCardText>
        <MDBCardText>
      lastname: {details.lastname}
        </MDBCardText>

        <MDBCardText>
      phone: {details.phone}
        </MDBCardText>

        <MDBCardText>
      phone: {details.address}
        </MDBCardText>
        <MDBCardImage
                                    src={photoUrl}
                                    alt={details.firstname}
                                    style={{ height: "400px", width: "100%", objectFit: "cover" }}
                                /> 
    
        
    </MDBCardBody>
    </MDBCard>
    </div>
  )
}

export default UserDetails