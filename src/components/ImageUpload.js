import React, { Component } from 'react';

class ImageUpload extends Component {
  render() {
    return (
      <form
        method='POST'
        action='http://localhost:8080/uploadPic'
        encType='multipart/form-data'
      >
        <input type='text' name='description' />
        <input type='file' name='selectedFile' onChange={this.onChange} />
        <button type='submit' value='upload'>
          Submit
        </button>
      </form>
    );
  }
}

export default ImageUpload;
