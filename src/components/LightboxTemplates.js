import React from "react";
import ReactDOM from "react-dom";
import close from "/img/close.png";
import title from "/svg/dataSourcesTitle.svg";
class RenderTemplate extends React.Component {
  constructor(props) {
    super(props);
  }

  resizeContent() {
    this.lbDiv = document.getElementById("lightbox");
    this.lbDiv.style.width = window.innerWidth + "px";
    this.lbDiv.style.height = window.innerHeight + "px";
  }
  componentDidMount() {
    document.body.classList.add("fixed");
    this.resizeContent();
    document.getElementById("lightbox").focus();
    window.addEventListener("resize", this.resizeContent);
  }

  componentWillUnmount() {
    document.body.classList.remove("fixed");
    window.removeEventListener("resize", this.resizeContent);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, document.body);
  }
}

class InfoBox extends React.Component {
  putFocus() {
    let pageStart = document.getElementById("infoBox");
    pageStart.focus();
  }
  render() {
    const { closeHandler, open } = this.props;

    if (open === true) {
      return (
        <RenderTemplate>
          <div id="lightbox" className="lightbox" tabIndex={0}>
            <div className="content" id="infoBox" tabIndex={0}>
              <div className="close">
                <a onClick={closeHandler} href="#" tabIndex={0}>
                  <img src={close} alt="Click to close lightbox" />
                </a>
              </div>
              <img
                src={title}
                className="dataSourcesTitle"
                alt="Data sources"
              />
              <ul className="dataSourcesList">
               <li> Global Burden of Disease Collaborative Network.</li>
                <li>
                  {" "}
                  Global Burden of Disease Study 2016 (GBD 2016) Results.
                </li>
                <li>
                  {" "}
                  Institute for Health Metrics & Evaluation (IHME), 2017.
                </li>
                <li> Worldbank</li>
                <li>WHO</li>
                <li>Our World in Data</li>
                <li>Statista</li>
                <li>BloombergNEF</li>
                <li>ODI</li>
                <li>UNICEF/WHO (Via Our World in Data)</li>
                <li>
                  United Nations Department of Economic and Social Affairs
                  Population Division
                </li>
                <li>Happy Planet Index</li>
                <li>Our Calcs</li>
                <li>Unesco (via Worldbank)</li>
                <li>World Resources Institute</li>
                <li>Arse Technica / Bloomberg NEF</li>
                <li>FAO via Our Wolrd in Data</li>
                <li>Index of Economic Freedom</li>
              </ul>
            </div>
          </div>
        </RenderTemplate>
      );
    } else {
      return null;
    }
  }
}

export { InfoBox };
