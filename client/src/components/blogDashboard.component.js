import React, { Component } from 'react';
import { EditorState, convertFromRaw, convertToRaw, createWithContent } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { convertToHTML } from 'draft-convert';
import {stateToHTML} from 'draft-js-export-html';
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
      body: JSON.stringify(convertToRaw(this.state.body.getCurrentContent()))
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
  render() {
    const blogs = this.state.posts.map((post, i) => (
      <div key={i} className="flex flex-col overflow-hidden bg-gradient-to-br to-cashmere dark:to-purple-400 from-cashmere-700 shadow-xl dark:text-white rounded-lg shadow-xl  mt-4 w-100 mx-2">
        <div className="flex flex-col md:flex-row">
          <div className="h-64 w-auto md:w-1/2">
            <img className="inset-0 h-full w-full object-cover object-center" src={post.img} />
          </div>
          <div className="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
            <h3 class="font-semibold text-lg leading-tight truncate">{post.title}</h3>
            <div className="text-clamp" dangerouslySetInnerHTML={{__html: stateToHTML(convertFromRaw(JSON.parse(post.body)))}} />
            <p class="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
              Nicola Reyes &bull; {post.id}
            </p>
          </div>
        </div>
      </div>
    ));
    return(
      <div className="container px-7 h-v-100">
        <div className="max-w-100 px-5 py-10 rounded-xl text-center bg-gray dark:bg-merlin dark:text-pampas shadow-xl lg:flex justify-center overflow-y-auto">
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
              toolbarClassName="editor-toolbar"
              wrapperClassName="editor-wrapper"
              editorClassName="editor"
              onEditorStateChange={this.onEditorStateChange}
            />
            <button>Submit</button>
          </form>
        </div>
        <div className="max-w-100 px-5 py-10 rounded-xl text-center bg-gray dark:bg-merlin dark:text-pampas shadow-xl lg:flex justify-center overflow-y-auto">
          {blogs}
        </div>
      </div>
    )
  }
}


export default BlogDashboard;