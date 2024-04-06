import React from "react";
import "../App.css";

function PhotoGallery() {
  return (
    <>
      <h1>Image Gallery</h1>
      <div className="row">
        <div>
          <img
            src="images/cat.jpg"
            alt="cat"
            width="100%"
            className="img-thumbnail"
          />
          <img src="images/eight.jpg" alt="eight" className="img-thumbnail" />
          <img src="images/five.jpg" alt="cat" className="img-thumbnail" />
          <img src="images/four.jpg" alt="cat" className="img-thumbnail" />
          <img src="images/nine.jpg" alt="cat" className="img-thumbnail" />
          <img src="images/one.jpg" alt="cat" className="img-thumbnail" />

          <img src="images/seven.jpg" alt="cat" className="img-thumbnail" />
          <img src="images/six.jpg" alt="cat" className="img-thumbnail" />
          <img src="images/three.jpg" alt="cat" className="img-thumbnail" />

          <img src="images/two.jpg" alt="cat" className="img-thumbnail" />
          <img src="images/cat.jpg" alt="cat" className="img-thumbnail" />
          <img src="images/eight.jpg" alt="cat" className="img-thumbnail" />

          <img src="images/four.jpg" alt="cat" className="img-thumbnail" />
          <img src="images/nine.jpg" alt="cat" className="img-thumbnail" />
          <img src="images/one.jpg" alt="cat" className="img-thumbnail" />

          <img src="images/seven.jpg" alt="cat" className="img-thumbnail" />
          <img src="images/six.jpg" alt="cat" className="img-thumbnail" />
          <img src="images/three.jpg" alt="cat" className="img-thumbnail" />
        </div>
      </div>
    </>
  );
}

export default PhotoGallery;
