import React, { Component } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { convertToHTML } from 'draft-convert';
import DOMPurify from 'dompurify';

import axios from 'axios';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

class BlogDashboard extends React.Component {

  state = {
    title: '',
    img: '',
    posts: [],
    body:  EditorState.createEmpty()
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
  onEditorStateChange = (body) => {
    console.log(body);
    this.setState({
      body
    });
  };

  submit = (event) => {
    event.preventDefault();
    
    const payload = {
      title: this.state.title,
      img: this.state.img,
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
      img: ''
    })
  }
  
  convertContentToHTML = (post) => {
    convertToHTML(post.body[0].getCurrentContent());
  }
  createMarkup = (html) => {
    return  {
      __html: DOMPurify.sanitize(html)
    }
  }
  displayBlogPost = (posts) => {
    if (posts.length === 0) return null;
    
    posts.map((post, index) => {
      
      if (post.body[0].includes('') === false) {
        converted = convertContentToHTML(post);
        return (
          <div key={index}>
            <h3>{post.title}</h3>
            <div className="blog-content" dangerouslySetInnerHTML={createMarkup(converted)}>
          </div>
        )} else {
          return (
          <div key={index}>
            <h3>{post.title}</h3>
            <p>{post.body[0]}</p>
          </div>
         )}
    });
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
              name="img"
              value={this.state.img}
              onChange={this.handleChange}
            />
          </div>
          <Editor
            editorState={this.state.body}
            name="body"
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={this.onEditorStateChange}
          />
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