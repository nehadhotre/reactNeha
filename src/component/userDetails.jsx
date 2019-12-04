import React from "react";
const userDetails = (props) =>{
    let { imgUrl, username, role}=props;
    console.log(props);
    return(
       <div>

           <div className="col-md-4">
               <img alt="username" src={imgUrl} className="rounded-circle"/>
           </div>
           <div className="col-md-6">
               <button type="button" className="btn btn-info btn-md">{username}</button>
           </div>
           <div className="col-md-6">
               <h5>{role}</h5>
           </div>
       </div>
    )
}
export default userDetails;
