import React from "react";

class PageUp extends React.Component {
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  handleScroll = () => {
    var pageup = document.getElementById("page-up");
    if (window.pageYOffset >= 80) {
      pageup.classList.add("up-scroll");
    } else {
      pageup.classList.remove("up-scroll");
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
              transition: 0.3s ease;
              color: var(--Text-1);
              pointer-events: none;
              background-color: var(--Glass-BG-P);
              backdrop-filter: var(--Glass);
              -webkit-backdrop-filter: var(--Glass);
              opacity: 0;
            }
            .up-scroll {
              transform: rotateZ(90deg) scale(1);
              pointer-events: auto;
              opacity: 1;
            }
            .page-up:hover {
              color: var(--Text-2);
            }
            @media screen and (max-width: 48rem) {
              .page-up {
                transform: rotateZ(-90deg) scale(1);
                pointer-events: auto;
                opacity: 1;
              }
              .up-scroll {
                transform: rotateZ(90deg) scale(1);
              }
            }
          `}
        </style>
        <a href="#up" id="page-up" className="page-up">
          
        </a>
      </>
    );
  }
}
export default PageUp;
