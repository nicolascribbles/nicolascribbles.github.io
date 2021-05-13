import React from 'react';
import axios from 'axios';

class RegisterUsers extends React.Component {
  state = {
    username: '',
    first_name: '',
    last_name: '',
    password: '',
    users: []
  }

  componentDidMount = () => {
    this.getUsers()
  }

  getUsers = () => {
    axios.get('/api/users')
      .then((response) =>{
        const data = response.data;
        this.setState({ users: data });
        console.log('Your data has arrived')
      })
      .catch(() => {
        alert('Your data has arrived');
      });
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  submit = (event) => {
    event.preventDefault();
    
    const payload = {
      username: this.state.username,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      password: this.state.password
    }
    
    axios({
      url: '/api/users',
      method: 'POST',
      data: payload
    })
    .then(() => {
      console.log('Data has been sent to the server')
      this.resetUserInputs();
      this.getUsers();
    })
    .catch(() => {
      console.log('Internal server error')
    });
  };

  resetUserInputs = () => {
    this.setState({
      username: '',
      first_name: '',
      last_name: '',
      password: ''
    })
  }
  
  displayUsers = (users) => {
    if (users.length === 0) return null;
    
    return users.map((user, index) => (
      <div key={index}>
        <h3>{user.username}</h3>
        <p>{user.first_name} {user.last_name}</p>
      </div>
    ));
  }
  
  render() {
    
    return (
      <div>
        <h1> Users </h1>
        <form onSubmit={this.submit}>
          <div className="form-input">
            <input 
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-input">
            <input 
              type="text"
              name="first_name"
              value={this.state.first_name}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-input">
            <input 
              type="text"
              name="last_name"
              value={this.state.last_name}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-input">
            <input 
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
        
          <button>Submit</button>
        </form>
        <div className="users">
          {this.displayUsers(this.state.users)}
        </div>
      </div>
    )
  }
  
}

export default RegisterUsers;