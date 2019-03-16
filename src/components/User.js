import React from 'react';


export const User = (props) => {
  //console.log(props.toggleEdit)
  return (
    <div>
      <div className="inner-row">
      
        {props.edit
          ?<div> <div className="modal-header"><div className="modal-title"><h4>Edit User</h4></div></div> 
          <div className="modal-body">
             <div className="form-group"> 
              <label className="form-label fw"><b>Name:</b></label>
              <input type="text"
              onChange={props.handleChange}
              className="form-input"
              defaultValue={props.user.name}
              rows="6" 
              name="name"/>
              </div>
              <div className="form-group"> 
              <label className="form-label fw"><b>Username:</b></label>
              
              <input type="text"
              onChange={props.handleChange}
              className="form-input"
              defaultValue={props.user.username}
              rows="6" 
              name="username"/></div> <div className="form-group"> 
              <label className="form-label fw"><b>Email:</b></label>
              
              <input type="text"
              onChange={props.handleChange}
              className="form-input"
              defaultValue={props.user.email}
              rows="6" 
              name="email"/></div>
               <div className="form-group"> 
              <label className="form-label fw"><b>Password:</b></label>
             
              <input type="password"
              onChange={props.handleChange}
              className="form-input"
              defaultValue={props.user.password}
              rows="6" 
              name="password"/>
              </div>
              </div>
              </div>
              
          : <ul className="list-group list-group-flush">
                <li className="list-group-item"><span className="fww"><b>Name:</b></span>{props.user.name}<br/></li>
                <li className="list-group-item"><span className="fww"><b>UserName:</b></span>{props.user.username}<br/></li>
                <li className="list-group-item"><span className="fww"><b>Email:</b></span>{props.user.email}<br/></li>
          </ul>
         
          }
      </div>
      <div className="btnedit">
        {props.edit
          ? <SaveButton updateUser={props.updateUser}  toggleEdit={props.toggleEdit}  /> 
          : <EditButton toggleEdit={props.toggleEdit} />}
      </div>
    </div>
  );
}

const EditButton = (props) => {
  return (
    <div><button
      onClick={props.toggleEdit}
      className="btn btn-warning btnedit pull-right mr36">
      Edit
    </button>
    <br/></div>
  );
}

const SaveButton = (props) => {
  return (
    <div className="modal-footer">
    <button
      onClick={props.updateUser}
      className="btn btn-primary">
      Save
    </button>
    <button
            onClick={props.toggleEdit}
            className="btn btn-clear float-right">Cancel</button>
   
    </div>
  );
}
