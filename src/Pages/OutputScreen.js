import React, { useRef } from "react";

const Output = () => {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="Outputscreen">
      <div className="main-page-content">
        <div id="home"> 
          <div id="particles-js">
            <div className="home-content-main">
              <div className="table-cell">
                <div className="container">
                  <div className="row home-row">
                    <div className="col-md-12 col-sm-12">
                      <div className="home-text wow fadeIn text-center">
                        <h1 className="cd-headline clip is-full-width">
                          <span
                            className="cd-words-wrapper"
                            style={{
                              width: "266px",
                              overflow: "hidden"
                            }}
                          >
                            <b className="is-hidden">Results</b>
                            <b className="is-hidden">Results</b>
                            <b className="is-visible">Results</b>
                          </span>
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>  
              </div>
            </div>
          </div>
          <div className="parallax" data-velocity="-.1"></div>
          <div className="parallax" data-velocity="-.5" data-fit="525"></div>
        </div>

        <div className="about-back"></div>
        <div className="me-grid">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-sm-6 col-xs-12 about-col">
                <div className="about-image">
                  <img
                    src="https://finds.org.uk/images/thumbnails/1261283.jpg"
                    alt="coins"
                    className="about-img wow fadeIn"
                  />
                </div>
              </div>
              <div className="col-md-8 col-sm-6 col-xs-12 about-col">
                <div className="about-details wow fadeIn">
                  <div className="main-title left-title text-left wow fadeIn">
                    <h3>Solution</h3>
                    <div className="underline1 no-margin"></div>
                    <div className="underline2 no-margin"></div>
                  </div>
                  <p className="wow fadeIn">
                    <h4>Artifact Type : Coin</h4>
                    <h4>Time Prediction : Medieval</h4>
                    The Middle Ages is a period of European history that lasted
                    from about 500 AD to about 1500 AD. It is typically divided
                    into three subperiods: the Early Middle Ages, the High
                    Middle Ages, and the Late Middle Ages.
                  </p>
                  
                  <button
                      className="know-artifact-btn"
                      onClick={handleButtonClick}
                    >
                      Upload Image
                    </button>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      className="input-file"
                      style={{ display: "none" }}
                    />
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Output;
