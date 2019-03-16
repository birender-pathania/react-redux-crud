import React, { Component  } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import getUsersList from '../actions/get_users_list';
import addUserAction from '../actions/add_user_action';
import Users from './Users';
import AddUser from './AddUser';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  isOpen: false }
    this.toggleState = this.toggleState.bind(this);
    this.handleNewPersonNameChange = this.handleNewPersonNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleUserNameChange = this.handleUserNameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleUserCreation = this.handleUserCreation.bind(this);

  
 
    
    
  }
  componentDidMount() {
    this.props.getUsersList();
  }
  clearFormAndCloseModal() {
    this.setState({
      isOpen: false
    });
  }
  
  handleUserCreation() {
    

    const user = {
        name: this.state.newPersonName,
        email: this.state.newPersonEmail,
        username: this.state.newPersonUserName,
        password: this.state.newPersonPassword,
    };
    this.props.addUserAction(user);
    this.clearFormAndCloseModal();
  
  }
  toggleState() {
    //console.log(this.state)
    if(this.state.isOpen) {
      this.clearFormAndCloseModal();
    } else {
      this.setState({
        isOpen: true
      })
    }
  }
  renderUsers() {
    //console.log(this.props.getUsers)
    if(this.props.getUsers) {
      return this.props.getUsers.map(user => {
        return  <Users key={user.user_id} user={user} /> ;
      });
    } else {
      //return <LoadingSpinner />;
    }
  }
  handleNewPersonNameChange(e) {
    this.setState({
      newPersonName: e.target.value
    });
  }
  handleEmailChange(e) {
    this.setState({
      newPersonEmail: e.target.value
    });
  }

  handleUserNameChange(e) {
    this.setState({
      newPersonUserName: e.target.value
    });
  }

  handlePasswordChange(e) {
    this.setState({
      newPersonPassword: e.target.value
    });
  }
  render() {
    return (
      <div className="App container">
      <main>
        <div className="">
            <h1 className="display-6 text-center">React Redux Demo</h1>
            
        </div>
    </main>
    
      <button
                    className="btn btn-primary pull-right mr36"
                    onClick={this.toggleState}>Add New </button>
       {this.renderUsers()}
       <AddUser
       createUser={this.handleUserCreation}
       onNameChange={this.handleNewPersonNameChange}
       onEmailChange={this.handleEmailChange}
       onUserNameChange={this.handleUserNameChange}
       onPasswordChange={this.handlePasswordChange}
       open={this.state.isOpen}
      close={this.toggleState}
      submitted = { this.submitted }
      />
      
      </div>
    );
  }
}

//connects root reducer to props
function mapStateToProps(state) {
 // console.log(state)
  return {
    getUsers: state.getUsers
    
  }
}

//connects redux actions to props
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getUsersList: getUsersList,
    addUserAction: addUserAction,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
