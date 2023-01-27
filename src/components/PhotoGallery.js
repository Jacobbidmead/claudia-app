import React from "react";
import "../styles/PhotoGallery.css";
import TestImageData from "../imageData/TestImageData";

class PhotoGallery extends React.Component {
  state = {
    largePhoto: "images/test.jpeg",
    allImages: TestImageData,
  };

  changePic = (el) => {
    this.setState({
      largePhoto: el,
    });
  };

  render() {
    return (
      <>
        <div className="container">
          <div className="photo-container">
            {this.state.allImages.map((el, i) => (
              <div key={i} onClick={(e) => this.changePic(el)}>
                <img src={el} alt="" className="photo" />
              </div>
            ))}
          </div>
          <div className="large-photo-container">
            <img className="main-photo" src={this.state.largePhoto} alt="" />
            <div>
              <div className="img-description">{this.state.imgDescription}</div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default PhotoGallery;
