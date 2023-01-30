import React from "react";
import HealthChart from "/src/components/HealthChart";
import EnergyChart from "/src/components/EnergyChart";
import ClimateChart from "/src/components/ClimateChart";
import EducationChart from "/src/components/EducationChart";
import EconomyChart from "/src/components/EconomyChart";
import QualityOfLife from "/src/components/QualityOfLife";
import Index from "/src/components/Index";
import InfoButton from "/src/components/InfoButton";
import data from "/data/data";
import "/css/styles.css";
import { InfoBox } from "/src/components/LightboxTemplates";
import title from "/svg/title.svg";
import healthHeading from "/svg/healthHeading.svg";
import energyHeading from "/svg/energyHeading.svg";
import climateHeading from "/svg/climateHeading.svg";
import economyHeading from "/svg/economyHeading.svg";
import educationHeading from "/svg/educationHeading.svg";
import lifeQualityHeading from "/svg/lifeQualityHeading.svg";
import summitLogo from "/svg/WGS-summit-logo.svg";
import yearsTitle from "/svg/yearsTitle.svg";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      healthYear: "",
      energyYear: "",
      climateYear: "",
      educationYear: "",
      economyYear: "",
      lifeQualityYear: "",
      healthPaths: [],
      energyPaths: [],
      climatePaths: [],
      economyPaths: [],
      edcuationPaths: [],
      lifeQualityPaths: [],
      palettePaths: [],
      toggledOn: false,
      selectedYear: "",
      openState: false,
    };
  }

  getPaths = () => {
    document.querySelector("svg");
  };

  createTip = (name) => {
    let tip = document.createElement("div");
    let tipList = document.createElement("ul");
    tip.id = "textNode";
    let content = data[name];
    let h3 = document.createElement("h3");
    h3.append(name.substr(name.length - 4, name.length));
    tip.append(h3);
    for (let obj in content) {
      let li = document.createElement("li");
      let key = document.createElement("span");
      key.append(obj + ": ");
      li.append(key);
      let val = document.createElement("span");
      val.append(content[obj]);
      val.style.fontWeight = "bold";
      li.append(val);
      tipList.append(li);
    }
    tip.append(tipList);
    return tip;
  };
  showTip = (e) => {
    let y = e.clientY + (window.pageYOffset || document.body.scrollTop) + 5;
    let x = e.clientX;
    if (!this.attached) {
      let text = this.createTip(e.target.id);

      this.box.append(text);
      this.box.style.display = "block";
      this.attached = true;
    }
    this.box.style.left = x + "px";
    this.box.style.top = y + "px";
  };

  hideTip = () => {
    this.attached = false;
    if (document.getElementById("textNode") !== null)
      this.box.removeChild(document.getElementById("textNode"));
    this.box.style.display = "none";
  };

  highlight = (e, type) => {
    this.hideTip();
    this.unHighlightYears();
    this.state[type + "Paths"].map((path) => (path.style.opacity = "0.1"));
    e.target.style.opacity = "1.0";
    let year = e.target.id.substr(e.target.id.length - 4, e.target.id.length);
    this.showTip(e);
    this.setState({ [type + "Year"]: "YEAR " + year });
  };

  unHighlight = (e, type) => {
    this.state[type + "Paths"].map((path) => path.removeAttribute("style"));
    this.hideTip(e);
    this.setState({ [type + "Year"]: "" });
  };

  clearBorders = () => {
    this.state.palettePaths.map((path) => path.removeAttribute("style"));
  };
  toggleYears = (e) => {
    this.clearBorders();
    let year = e.target.id.substr(e.target.id.length - 4, e.target.length);
    if (this.state.toggledOn === true && this.state.selectedYear === year) {
      this.setState({ toggledOn: true, selectedYear: "" }, () =>
        this.unHighlightYears()
      );
    } else {
      this.setState({ toggledOn: true, selectedYear: year }, () =>
        this.highlightYears(e, year)
      );
    }
  };
  highlightYears = (e, year) => {
    //Change opacity for all group paths
    ["health", "energy", "climate", "education", "economy", "lifeQuality"].map(
      (name) => {
        let paths = this.state[name + "Paths"];
        paths.map((path) => {
          if (path.id.indexOf(year) < 0) path.style.opacity = "0.1";
          else path.removeAttribute("style");
        });
        this.setState({ [name + "Year"]: "YEAR " + year });
      }
    );
    this.setState({ toggledOn: true });
  };
  unHighlightYears = () => {
    ["health", "energy", "climate", "education", "economy", "lifeQuality"].map(
      (name) => this.setState({ [name + "Year"]: "" })
    );

    Array.prototype.slice
      .call(document.getElementsByClassName("st6"))
      .map((el) => el.removeAttribute("style"));

    this.setState({ toggledOn: false });
  };

  clearIndex = (e) => {
    if (e.target.id.indexOf("year") < 0) {
      this.unHighlightYears();
    }
  };
  setListeners = (names) => {
    names.map((name) => {
      let chart = document.getElementById(name + "Chart");
      let paths = Array.prototype.slice.call(
        chart.getElementsByClassName("st6")
      );
      paths.map((path) => {
        path.addEventListener("mouseover", (e) => {
          this.highlight(e, name);
        });
      });
      this.setState({ [name + "Paths"]: paths });
      document.getElementById(name).addEventListener("mouseleave", (e) => {
        this.unHighlight(e, name);
      });
    });
    let palettePaths = Array.prototype.slice.call(
      document.getElementById("palette").getElementsByClassName("index")
    );
    this.setState({ palettePaths });
    palettePaths.map((path) => {
      path.addEventListener("click", (e) => this.toggleYears(e));
    });
    document.getElementsByTagName("body")[0].addEventListener("click", (e) => {
      this.clearIndex(e);
    });
  };

  openBox = () => {
    this.setState({ openState: true });
  };

  closeHandler = () => {
    this.setState({ openState: false });
  };

  componentDidMount() {
    this.box = document.createElement("div");
    this.box.classList.add("tip");
    document.body.append(this.box);
    this.attached = false;
    this.setListeners([
      "health",
      "energy",
      "climate",
      "education",
      "economy",
      "lifeQuality",
    ]);
  }
  render() {
    return (
      <div className="body">
        <div className="chartColumns">
          <div className="chartRow">
            <div className="col" id="intro">
              <img src={title} alt="What just happened?" />
              <p>
                The below dashboard gives a peek into what has happened in the
                second decade of the new millenium.
              </p>

              <p>
                The range is from the years 2010 to 2020. The dashboard is
                separated into six groupings, which include Health, Energy,
                Economy, Education, Climate and Quality of Life.
              </p>

              <p>
                <strong>
                  Roll over chart lines or click on the colors in the index to
                  isolate specific years.
                </strong>
              </p>
            </div>
            <div className="years"></div>
            <div className="col infoButton" onClick={this.openBox}>
              <InfoButton />
            </div>
          </div>
        </div>
        <div className="chartColumns">
          <div className="chartRow">
            <div className="col">
              <div className="chart" id="health">
                <div className="heading">
                  <img src={healthHeading} alt="Health" />
                  <h3>{this.state.healthYear}</h3>
                </div>
                <HealthChart highlight={this.highlight} />
                <h2>OBSERVATIONS</h2>
                <div className="takeAways">
                  <div className="left">
                    <p> 2010 and 2020 saw a lot of incidences of Polio.</p>
                    <p>Cases of Dementia have steadily risen over the years.</p>
                  </div>
                  <div className="right">
                    <p>
                      Infant mortality rate has steadily declined over the
                      years.
                    </p>
                    <p>Incidences of HIV have slowly declined as well.</p>
                  </div>
                </div>
              </div>
              <div className="chart" id="energy">
                <div className="heading">
                  <img src={energyHeading} alt="Energy" />
                  <h3>{this.state.energyYear}</h3>
                </div>

                <EnergyChart />
                <h2>OBSERVATIONS</h2>
                <div className="takeAways">
                  <div className="left">
                    <p>
                      Renewable energy use has been steadily increasing over the
                      last decade.
                    </p>
                  </div>
                  <div className="right"></div>
                </div>
              </div>
              <div className="chart" id="climate">
                <div className="heading">
                  <img src={climateHeading} alt="Climate" />
                  <h3>{this.state.climateYear}</h3>
                </div>

                <ClimateChart />
                <h2>OBSERVATIONS</h2>
                <div className="takeAways">
                  <div className="left">
                    <p>Electric car sales have increased.</p>
                  </div>
                  <div className="right">
                    <p>
                      There has been a gradual increase in CO2 and Methane
                      emissions as well.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="years">
              <img src={yearsTitle} alt="Years" />
              <Index id="palette" />
            </div>
            <div className="col">
              <div className="chart" id="economy">
                <div className="heading">
                  <img src={economyHeading} alt="Economy" />
                  <h3>{this.state.economyYear}</h3>
                </div>

                <EconomyChart />
                <h2>OBSERVATIONS</h2>
                <div className="takeAways">
                  <div className="left">
                    <p>
                      There appears to be an increase in economic growth across
                      the board.
                    </p>
                  </div>
                  <div className="right">
                    <p>Economic freedom has stayed fairly consistent.</p>
                  </div>
                </div>
              </div>
              <div className="chart" id="education">
                <div className="heading">
                  <img src={educationHeading} alt="Education" />
                  <h3>{this.state.educationYear}</h3>
                </div>

                <EducationChart />
                <h2>OBSERVATIONS</h2>
                <div className="takeAways">
                  <div className="left">
                    <p>Mostly positive changes across the board over time.</p>
                  </div>
                  <div className="right">
                    <p>
                      There appears to have been a decrease in percentage of
                      children in primary school.
                    </p>
                  </div>
                </div>
              </div>
              <div className="chart" id="lifeQuality">
                <div className="heading">
                  <img
                    src={lifeQualityHeading}
                    id="lifeQualityHeading"
                    alt="Quality of Life"
                  />
                  <h3>{this.state.lifeQualityYear}</h3>
                </div>

                <QualityOfLife />
                <h2>OBSERVATIONS</h2>
                <div className="takeAways">
                  <div className="left">
                    <p>Access to the internet has increased globally.</p>
                    <p>
                      Safely managed sanitation appears to have improved in the
                      last decade.
                    </p>
                  </div>
                  <div className="right">
                    <p>Life expectancy has increased slightly.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div className="info">
            <div>
              <img src={summitLogo} alt="World Government Summit logo" />
            </div>
            <div className="gutter"></div>
            <div className="right">
              <a href="#" onClick={this.openBox}>
                View info on data sources
              </a>
              <div style={{ marginTop: "10px" }}>
                Visualization by Steinar Shellenberger
              </div>
            </div>
          </div>
        </footer>
        <InfoBox open={this.state.openState} closeHandler={this.closeHandler} />
      </div>
    );
  }
}
export default Home;
