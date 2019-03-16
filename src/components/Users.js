import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import deleteUser from '../actions/delete_user';
import updateUser from '../actions/update_user';
import { User } from './User';



class Users extends Component {
  constructor(props) {
    super(props);
    //console.log(props)
    this.state = {
      editUser: false,
      user: props.user,
      
    };
    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.handleUpdateUser = this.handleUpdateUser.bind(this);
    this.handleDeleteUser = this.handleDeleteUser.bind(this);
  }
  toggleEdit() {
    
    this.setState({
      editUser: !this.state.editUser
    })
  }
  handleChange(e) {
    //console.log(e.target.value)
    this.setState({[e.target.name] : e.target.value});
   // console.log(this.state)
  }
  handleUpdateUser() {
    //console.log(this.props)
    const update = {
      username: this.state.username?this.state.username:this.state.user.username,
      name: this.state.name?this.state.name:this.state.user.name,
      email: this.state.email?this.state.email:this.state.user.email,
      password: this.state.password?this.state.password:this.state.user.password,
      user_id: this.state.user.user_id
    }
   // console.log(update);
    this.props.updateUser(update);
    this.toggleEdit();
  }
  handleDeleteUser() {
    //console.log(this.props)
    this.props.deleteUser(this.props.user.user_id);
  }
  render() {
    //console.log(this.props);
    const user = this.props.user;
   
    return (
      
      <div className="outer">
      <button type="button" className="rmbtn close" aria-label="Close" onClick={this.handleDeleteUser}>
  <span aria-hidden="true">&times;</span>
</button>
      
        <User
          toggleEdit={this.toggleEdit}
          updateUser={this.handleUpdateUser}
          edit={this.state.editUser}
          handleChange={this.handleChange}
          user={this.props.user} />
          
          
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    deleteUser: deleteUser,
    updateUser: updateUser
  }, dispatch);
}


export default connect(null,mapDispatchToProps)(Users);
