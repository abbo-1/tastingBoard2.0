import React, { Component } from 'react';
import UploadButton from './ImageUploadButton.js'

class ImageUpload extends Component {
  render() {
    return (
      <form
        method='POST'
        action='http://localhost:8080/uploadPic'
        encType='multipart/form-data'
      >
        <input type='file' name='selectedFile' onChange={this.onChange} />
        <UploadButton type='submit' value='upload'></UploadButton>
      </form>
    );
  }
}

export default ImageUpload;