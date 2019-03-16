import React, { Component } from 'react';


class AddUser extends Component {
  render() {
    //console.log(this.props)
    const {open} = this.props;
    return (
      (open)?
      <div>
        
      <div className="modal-overlay"></div>
      <div className="modal-container">
        <div className="modal-header">
          
          <div className="modal-title">
            <h4>Add user to list</h4>
          </div>
        </div>
        <div className="modal-body">
          <div className="content">
            <form>
              <div className="form-group">
                <label className="form-label fw"><b>Name:</b></label>
                
                <input
                  value={this.props.name}
                  onChange={this.props.onNameChange}
                  className="form-input"
                  type="text"
                  placeholder="Name" />
              </div>
              <div className="form-group">
                <label className="form-label fw"><b>Email:</b></label>
                <input
                  value={this.props.email}
                  onChange={this.props.onEmailChange}
                  className="form-input"
                  type="text"
                  placeholder="Email" />
              </div>
              <div className="form-group">
                <label className="form-label fw"><b>Username:</b></label>
                <input
                  value={this.props.username}
                  onChange={this.props.onUserNameChange}
                  className="form-input"
                  type="text"
                  placeholder="username" />
              </div>
              <div className="form-group">
                <label className="form-label fw"><b>Password:</b></label>
                <input
                  value={this.props.password}
                  onChange={this.props.onPasswordChange}
                  className="form-input"
                  type="password"
                  placeholder="password" />
              </div>
             
            </form>
          </div>
        </div>
        <div className="modal-footer">
          <button
            onClick={this.props.createUser}
            className="btn btn-primary">Save</button>
            <button
            onClick={this.props.close}
            className="btn btn-clear float-right">Cancel</button>
        </div>
      </div>
    </div>
      :'' 
    );
  }
}

export default AddUser;
