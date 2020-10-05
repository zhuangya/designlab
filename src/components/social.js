import React from "react";

class Social extends React.Component {
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  handleScroll = () => {
    var socialup = document.getElementById("social-up");
    if (window.pageYOffset >= 80) {
      socialup.classList.add("up-social");
    } else {
      socialup.classList.remove("up-social");
    }
  };

  render() {
    return (
      <>
        <style>
          {`
                .social-icon {
                  z-index: 60;
                  position: fixed;
                  bottom: 0;
                  left: 0rem;
                  padding: 1.5rem;
                  display: grid;
                  grid-template-columns: repeat(3, 1fr);
                  column-gap: 1rem;
                }
                .social-icon a {
                  margin-top: 0;
                  font-family: "uuicon";
                  width: 2rem;
                  height: 2rem;
                  line-height: 2rem;
                  text-align: center;
                  display: inline-block;
                  font-size: 1.5rem;
                  text-shadow: 0 0 1.5rem var(--BG-P);
                  transition: 0.3s ease;
                }
                @media screen and (max-width: 48rem) {
                  .social-icon a:nth-child(1){
                    transition: 0.3s ease;
                  }
                  .social-icon a:nth-child(2){
                    transition: 0.3s ease 0.1s;
                  }
                  .social-icon a:nth-child(3){
                    transition: 0.3s ease 0.2s;
                  }
                  .social-icon a {
                    opacity: 0;
                    transform: scale(0.8);
                  }
                  .up-social.social-icon a{
                    opacity: 1;
                    transform: scale(1);
                  }
                }
              `}
        </style>
        <div className="social-icon" id="social-up">
          <a
            href="https://www.behance.net/haoqi123"
            target="_blank"
            title="Bēhance"
            rel="noopener noreferrer"
          >
            
          </a>
          <a
            href="https://www.instagram.com/wenhaoqi"
            target="_blank"
            title="Instagram"
            rel="noopener noreferrer"
          >
            
          </a>
          <a
            href="https://github.com/wenhaoqiasd"
            target="_blank"
            title="GitHub"
            rel="noopener noreferrer"
          >
            
          </a>
        </div>
      </>
    );
  }
}
export default Social;
