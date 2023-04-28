import React,{useEffect, useState} from 'react'
import './form.scss'
import {Navigate,useLocation,Link} from "react-router-dom" 
import {  MDBBtn } from 'mdb-react-ui-kit';

const EditForm = () => {
    const location = useLocation()
    
    const [user,setUser]=useState({
        firstname:"",
        lastname:"",
        phone:"",
        address:"",
        photo:"",
        error:"",
        open:false,
    })
    const[form,setForm]=useState({
        formData: new FormData(),
    })
    const {formData} = form;
    const{_id,firstname,lastname,phone,address,error,open}=user

    useEffect(()=>{
       setUser({...location.state})
    },[])
    const handleChange=event=>{
        const{name}=event.target;
        const value=name==="photo"?event.target.files[0]:event.target.value
        formData.set(name,value)
        setUser({...user,[name]:value,error:""})
    }

    const submit=async()=>{
        try{
            const res=await fetch(`http://localhost:9000/edit/${_id}`,{
                method:"PUT",
                body:formData
            })
            const data = await res.json()
            console.log(data)
            if(data.error){
                setUser({...user,error:data.error})
            }
            else{
                setUser({firstname:"",lastname:"",phone:"",address:"", photo:"",open:true})

            }
        }
        catch(err){
            console.log(err)
        }
    }
   

    //form
    const fillForm=()=>{
        return   <form onSubmit={e=>e.preventDefault()}>
           <div className='form-group'>
                <label className='text-muted'>photo</label>
                <input 
                type="file"
                
                onChange={handleChange}
                name="photo"
                />
            </div>
        <div className='form-group'>
                <label className='text-muted'>firstname</label>
                <input 
                type="text"
                value={firstname}
                name="firstname"
                onChange={handleChange}
                />
            </div>
            <div className='form-group'>
                <label className='text-muted'>lastname</label>
                <input 
                type="text"
                value={lastname}
                name="lastname"
                onChange={handleChange}
                />
            </div>
            <div className='form-group'>
                <label className='text-muted'>phone</label>
                <input 
                type="text"
                value={phone}
                name="phone"
                onChange={handleChange}
                />
            </div>
            <div className='form-group'>
                <label className='text-muted'>location</label>
                <input 
                type="text"
                value={address}
                name="address"
                onChange={handleChange}
                />
            </div>
            
            <button className='btn btn-raised btn-primary mt-2' onClick={()=>submit()}>Update</button>
            <Link
                        
                       
                        to="/">
                                 <MDBBtn
                                        className='btn btn-danger ms-3'
                                      
                                    >
                                        Cancel
                                    </MDBBtn>
                   </Link>
        </form>
    }
    if(open){
       return  <Navigate to="/" />
    }
  return (
    <div className='container'>
        <h2 className='mt-5 mb-5'>Edit Form</h2>
        <div className='alert alert-danger' 
        style={{display:error?"":"none"}}
        >
            {error}
        </div>
        <div className='alert alert-info' 
        style={{display:open?"":"none"}}
        >
            post successfully sumitted
        </div>
        {fillForm()}
      

    </div>
  )
}

export default EditForm