import React from 'react';
import axios from 'axios';

class BlogDashboard extends React.Component {

  state = {
    title: '',
    url: '',
    body: '',
    posts: []
  };

  componentDidMount = () => {
    this.getBlogPost()
  }

  getBlogPost = () => {
    axios.get('/api/blogs')
      .then((response) =>{
        const data = response.data;
        this.setState({ posts: data });
        console.log('Your data has arrived')
      })
      .catch(() => {
        alert('Your data failed');
      });
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };


  submit = (event) => {
    event.preventDefault();
    
    const payload = {
      title: this.state.title,
      url: this.state.url,
      body: this.state.body
    }
    
    axios({
      url: '/api/blogs',
      method: 'POST',
      data: payload
    })
    .then(() => {
      console.log('Data has been sent to the server')
      this.resetUserInputs();
      this.getBlogPost();
    })
    .catch(() => {
      console.log('Internal server error')
    });
  };

  resetUserInputs = () => {
    this.setState({
      title: '',
      url: '',
      body: ''
    })
  }
  
  displayBlogPost = (posts) => {
    if (posts.length === 0) return null;
    
    return posts.map((post, index) => (
      <div key={index}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));
  }

  render() {
    return(
      <div>
        <form onSubmit={this.submit}>
          <div className="form-input">
            <input 
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-input">
            <input 
              type="text"
              name="url"
              value={this.state.url}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-input">
            <textarea
              name="body"
              cols="30"
              rows="10"
              value={this.state.body}
              onChange={this.handleChange} />
          </div>

          <button>Submit</button>
        </form>

        <div className="blog">
          {this.displayBlogPost(this.state.posts)}
        </div>
      </div>
    )
  }
}


export default BlogDashboard;