import React from "react";

const Contentservice = () => {
  return (
    <div>
      <div className="container">
        <div className="content-service">
          <div className="content-service-grid">
            <div className="content-service-item">
              <a href="/disease">
                <div className="link">
                  <i className="fa fa-share-alt-square" aria-hidden="true"></i>
                  <h2>疾病</h2>
                  <p>หมวดโรค</p>
                </div>
              </a>
            </div>
            <div className="content-service-item">
              <a href="/medicine">
                <div className="link">
                  <i className="fa fa-medkit" aria-hidden="true"></i>
                  <h2>药品</h2>
                  <p>หมวดยา</p>
                </div>
              </a>
            </div>
            <div className="content-service-item">
              <a href="/conversations">
                <div className="link">
                  <i className="fa fa-bullhorn" aria-hidden="true"></i>
                  <h2>Conversation</h2>
                  <p>ประโยค</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        {/* -------- content-service -------- */}
      </div>
    </div>
  );
};

export default Contentservice;
