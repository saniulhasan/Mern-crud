import React, { useEffect, useState } from 'react'
import {  MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom'
import DefaultPhoto from '../../images/logo.png'

const GetForm = () => {
    const [posts, setPosts] = useState([])
    const [del,setDel] = useState({})

    const deletePost = async(id)=>{
        let response = await fetch(`http://localhost:9000/delete/${id}`,{
            method:'DELETE'
        })
        const data = await response.json()
        setDel(data)
    }

    const deleteConfirmed = (userId)=>{
        let ans = window.confirm("Are you sure you want to delete")
        if(ans){
            deletePost(userId)
        }
    }
    useEffect(() => {
        const getData = async () => {
            try {
                const res = await fetch('http://localhost:9000/get', {
                    method: 'GET'
                })
                const data = await res.json();
                setPosts(data)
            }
            catch (err) {
                console.log(err)
            }
        }
        return getData;
    }, [del._id])


    return (
        <div>
             <h2 className='mt-5 mb-5'>User table</h2>

<div className="table-responsive">

<table className="table riped  table-hover table-bordered container">
				<thead>
					<tr>
                       <th>id</th>
						<th>firstname</th>
						<th>lastname</th>
						<th>phone</th>
						<th>address</th>
                        <th>photo</th>
						
						<th>Edit</th>
						<th>Delete</th>
					</tr>
				</thead>

                <tbody>
                {posts &&
						posts.map((post) => {
                            let photoUrl = post.photo ? `http://localhost:9000/photo/${post._id}?${new Date().getTime()}` : DefaultPhoto
							return (
								<tr key={post._id}>
                                 <td>{post._id}</td>
                                 <td>{post.firstname}</td>
                                 <td>{post.lastname}</td>
                                 <td>{post.phone}</td>
                                 <td>{post.address}</td>
                                 <td> 

                                     <MDBCardImage
                                    src={photoUrl}
                                    alt={post.firstname}
                                    style={{ height: "60px", width: "100%", objectFit: "cover" }}
                                /> 
                                    </td>

                                <td>
                                <Link to={`edit/${post._id}`} state={{ ...post }}
                                        className='btn btn-warning'
                                    >Edit</Link>
                                </td>
                                
                                <td>
                                <MDBBtn
                                        className='btn btn-danger ms-3'
                                        onClick={()=>deleteConfirmed(post._id)}
                                    >
                                        Delete
                                    </MDBBtn>

                                </td>
                                </tr>
                                );
                            })}
              
                </tbody>
                </table>


 </div>
            
           
            

        </div>
    )
}

export default GetForm