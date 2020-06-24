import React from "react";
// import "./page-up.css";

class PageUp extends React.Component {
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  handleScroll = () => {
    var header = document.getElementById("page-up");
    if (window.pageYOffset >= 80) {
      header.classList.add("up-scroll");
    } else {
      header.classList.remove("up-scroll");
    }
  };
  render() {
    return (
      <>
        <style>
          {`
            .page-up {
              position: fixed;
              right: 1.5rem;
              bottom: 1.5rem;
              font-family: "uuicon";
              font-size: 1.5rem;
              text-align: center;
              width: 2rem;
              height: 2rem;
              border-radius: 10rem;
              line-height: 2rem;
              z-index: 40;  
              transform: rotateZ(0deg) scale(4);
              box-shadow: inset 0 0 0 1px transparent;
              transition: transform 0.6s ease, color 0.3s ease, box-shadow 0.3s ease;
              color: transparent;
              pointer-events: none;
              background-color: transparent;
            }
            .up-scroll {
              box-shadow: inset 0 0 0 1px var(--Text-3);
              color: var(--Text-1);
              transform: rotateZ(90deg) scale(1);
              pointer-events: auto;
              background-color: var(--BG-P);
            }
            .page-up:hover {
              box-shadow: inset 0 0 0 1px var(--Text-1);
              color: var(--Text-1);
            }
            @media screen and (max-width: 48rem) {
              .page-up {
                transform: rotateZ(-90deg) scale(1);
                box-shadow: inset 0 0 0 1px var(--Text-1);
                color: var(--Text-1);
                pointer-events: auto;
                background-color: var(--BG-P);
              }
              .up-scroll {
                transform: rotateZ(90deg) scale(1);
              }
            }
          `}
        </style>
        <a id="page-up" className="page-up" href="#home">
          
        </a>
      </>
    );
  }
}
export default PageUp;
