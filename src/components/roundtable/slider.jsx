import React, { Component } from "react";
// import { Link } from "react-router-dom";
import circle from "../../image/circle.svg";
import bankai from "../../image/bankai.png";
import Bepo from "../../image/Bepo.png";
import ChBr from "../../image/ChBr.png";
import worryaboutit from "../../image/worryaboutit.png";
import GrayStarz from "../../image/GrayStarz.png";
import Grinch from "../../image/Grinch.png";
import Manny from "../../image/Manny.png";
import Tlop from "../../image/Tlop.png";
import topArrow from "../../image/topArrow.svg";
import bottomArrow from "../../image/bottomArrow.svg";
import icon from "../../image/light_king.svg";

export class Slider extends Component {
  state = {
    carouselDeg: 17,
    itemDeg: -17,
    centerItem: 0,
    prevItem: 9,
    lastItem: 9,
    nextItem: 1,
    carousel: [
      {
        image: worryaboutit,
        id: 0,
        position: 1,
        name: "Dontworryaboutit.eth",
        role: "Artist/Founder",
      },
      {
        image: Bepo,
        id: 1,
        position: 2,
        name: "Bepo.eth",
        role: "Advisor",
      },
      {
        image: GrayStarz,
        id: 2,
        position: 3,
        name: "Graystarz",
        role: "Advisor/Marketing",
      },
      {
        image: Tlop,
        id: 3,
        position: 4,
        name: "CrownOfOrion",
        role: "Marketing",
      },
      {
        image: Manny,
        id: 4,
        position: 5,
        name: "Manny",
        role: "Community Manager",
      },
      {
        image: bankai,
        id: 5,
        position: 6,
        name: "Bankai Sauce",
        role: "Head Mod",
      },
      {
        image: Grinch,
        id: 6,
        position: 7,
        name: "TheGrinch.eth",
        role: "Mod",
      },
      {
        image: ChBr,
        id: 7,
        position: 8,
        name: "ChBr",
        role: "Developer",
      },
      {
        image: Manny,
        id: 8,
        position: 9,
        name: "Manny",
        role: "Community Manager",
      },
	{	
        image: Bepo,
        id: 9,
        position: 10,
        name: "Bepo.eth",
        role: "Advisor",
      }
    ],
  };

  getIdItems = (side) => {
    // true = next, false = prev
    const { nextItem, prevItem, lastItem } = this.state;

    if (side) {
      this.setState(
        {
          centerItem: nextItem,
        },
        () => prevNext(this.state.centerItem)
      );
    } else {
      this.setState(
        {
          centerItem: prevItem,
        },
        () => prevNext(this.state.centerItem)
      );
    }

    const prevNext = (itemId) => {
      if (itemId === lastItem) {
        this.setState({
          nextItem: 0,
          prevItem: lastItem - 1,
        });
      } else if (itemId === 0) {
        this.setState({
          prevItem: lastItem,
          nextItem: 1,
        });
      } else {
        this.setState((state) => ({
          nextItem: state.centerItem + 1,
          prevItem: state.centerItem - 1,
        }));
      }
    };
  };

  next = () => {
    this.getIdItems(true);
    this.setState((state) => ({
      carouselDeg: state.carouselDeg - 36,
      itemDeg: state.itemDeg + 36,
    }));
  };

  prev = () => {
    this.getIdItems(false);
    this.setState((state) => ({
      carouselDeg: state.carouselDeg + 36,
      itemDeg: state.itemDeg - 36,
    }));
  };

  getCssClass = (id) => {
    const { centerItem, nextItem, prevItem } = this.state;

    if (id === centerItem) {
      return "active";
    } else if (id === nextItem) {
      return "next";
    } else if (id === prevItem) {
      return "prev";
    }
  };

  // 36

  render() {
    return (
      <section className="roundtableSliderSection">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-6 col-lg-4 col-sm-4">
              <div className="roundSlider">
                <div className="roundImg">
                  <img src={circle} alt="circle" />
                </div>
                <div className="ring">
                  <div className="test" />
                  <div
                    className="carousel"
                    style={{
                      transform: `rotate(${this.state.carouselDeg}deg)`,
                    }}
                  >
                    {this.state.carousel.map((item, index) => (
                      <div
                        className={`item-carousel ${this.getCssClass(index)}`}
                        key={item.id}
                        id={item.id}
                        style={{
                          transform: `rotate(${this.state.itemDeg}deg)`,
                        }}
                      >
                        <img src={item.image} alt="img" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-5 col-sm-8">
              <div className="contant">
                <button onClick={this.next}>
                  <img src={topArrow} alt="topArrow" />
                </button>
                {/* <p>heloo {this.state.carousel[this.state.centerItem].name}</p> */}
                <div className="text">
                  <img src={icon} alt="img" />
                  <p>{this.state.carousel[this.state.centerItem].role}</p>
                  <h5>{this.state.carousel[this.state.centerItem].name}</h5>
                </div>
                {/* <p>heloo {this.state.carousel[this.state.centerItem].name}</p> */}
                <button onClick={this.prev}>
                  <img src={bottomArrow} alt="bottomArrow" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Slider;
