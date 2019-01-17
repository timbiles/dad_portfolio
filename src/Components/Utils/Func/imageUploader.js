import React, { Component, Fragment } from 'react';
import Dropzone from 'react-dropzone';

class imageUploader extends Component {
  

  onImageDrop = files => {
    this.props.imageUpload(files[0]);
  };

 
  render() {
    return (
       
      <Dropzone
        onDrop={this.onImageDrop}
        className="ce_image_dropzone"
      >
      {({getRootProps, getInputProps, isDragActive}) => {
          return (
            <div
              {...getRootProps()}
              className='image_uploader'
            //   className={classNames('dropzone', {'dropzone--isActive': isDragActive})}
            >
            {this.props.image === '' ? (
                <Fragment>

                    <input {...getInputProps()} />
                    {
                      isDragActive ?
                        <p>Drop files here...</p> :
                        <p>Try dropping some files here, or click to select files to upload.</p>
                    }
                </Fragment>
            ) : (
                <div className="image_uploader_container">
                <img
                  className="ep_upload_pic"
                  src={this.props.image}
                  alt="event pic"
                />
              </div>
            )}
            </div>
          )
        }}





      {/* {({getRootProps, getInputProps, isDragActive}) => {
          return <div 
        //   className='image_uploader'
          {...getRootProps()}
              className={classNames('dropzone', {'dropzone--isActive': isDragActive})}
          >
            {this.state.image === '' ? (
              <p className="ce_dropzone_text">
                Drop an image or click to select a file to upload.
              </p>
            ) : (
              <div className="image_uploader_container">
                <img
                  className="ep_upload_pic"
                  src={this.state.image}
                  alt="event pic"
                />
              </div>
            )}
          </div>
      }} */}
        
      </Dropzone>
    );
  }
}

export default imageUploader;
