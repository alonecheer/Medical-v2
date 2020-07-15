import React from "react";

const Contentservice = () => {
  return (
    <div>
      <div className="container">
        <div className="content-service">
          <div className="content-service-grid">
            <div className="content-service-item">
              <i className="fa fa-share-alt-square" aria-hidden="true"></i>
              <h2>疾病</h2>
              <p>หมวดโรค</p>
            </div>
            <div className="content-service-item">
              <i className="fa fa-medkit" aria-hidden="true"></i>
              <h2>药品</h2>
              <p>หมวดยา</p>
            </div>
            <div className="content-service-item">
              <i className="fa fa-bullhorn" aria-hidden="true"></i>
              <h2>药品</h2>
              <p>หมวดยา</p>
            </div>
          </div>
        </div>
        {/* -------- content-service -------- */}
      </div>
    </div>
  );
};

export default Contentservice;
