import React, { useState, useEffect, useCallback } from "react";
import "./page-up.css";

const PageUp = () => {
  const [progress, setProgress] = useState(1000)

  const handleScroll = useCallback(() => {
    var pageup = document.getElementById("page-up");
    if (window.pageYOffset >= 80) {
      pageup.classList.add("up-scroll");
    } else {
      pageup.classList.remove("up-scroll");
    }
    // 页面总高
    var totalH =
    document.body.scrollHeight || document.documentElement.scrollHeight;
    // 可视高
    var clientH = window.innerHeight || document.documentElement.clientHeight;
    // 计算有效高
    var validH = totalH - clientH;
    // 滚动条卷去高度
    var scrollH =
      document.body.scrollTop || document.documentElement.scrollTop;
    // 百分比
    var result = (1000 - ((scrollH / validH) * 100 * 0.75)).toFixed(0);
    setProgress(result)
    // console.log(result);
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [
    handleScroll
  ])
  return (
    <>
      <a href="#up" id="page-up" className="page-up">
        <svg width="32px" height="32px">
          <circle className="svgbg" r="12" cy="16" cx="16" strokeWidth="2" stroke="var(--Text-1)" strokeLinejoin="round" strokeLinecap="round" fill="none"/>
          <circle r="12" cy="16" cx="16" strokeWidth="2" stroke="var(--Text-1)" strokeLinejoin="round" strokeLinecap="round" fill="none" strokeDashoffset={ progress } strokeDasharray="1000" />
        </svg>
      </a>
    </>
  );
}

export default PageUp;


// import React from "react";

// class PageUp extends React.Component {
//   state = {
//     progress: 0
//   }
//   componentDidMount() {
//     window.addEventListener("scroll", this.handleScroll);
//   }
//   handleScroll = () => {
//     var pageup = document.getElementById("page-up");
//     if (window.pageYOffset >= 80) {
//       pageup.classList.add("up-scroll");
//     } else {
//       pageup.classList.remove("up-scroll");
//     }

//     // 页面总高
//     var totalH =
//     document.body.scrollHeight || document.documentElement.scrollHeight;
//     // 可视高
//     var clientH = window.innerHeight || document.documentElement.clientHeight;
//     // 计算有效高
//     var validH = totalH - clientH;
//     // 滚动条卷去高度
//     var scrollH =
//       document.body.scrollTop || document.documentElement.scrollTop;

//     // 百分比
//     var result = ((scrollH / validH) * 100).toFixed(0);
//     this.setState({ progress: result })
//     console.log(result);
//   };

//   render() {

//     return (
//       <>
//         <style>
//           {`
//             .page-up {
//               position: fixed;
//               right: 1.5rem;
//               bottom: 1.5rem;
//               font-family: "uuicon";
//               font-size: 1.5rem;
//               text-align: center;
//               width: 2rem;
//               height: 2rem;
//               border-radius: 10rem;
//               line-height: 2rem;
//               z-index: 40;  
//               transform: rotateZ(0deg) scale(4);
//               transition: 0.3s ease;
//               color: var(--Text-1);
//               pointer-events: none;
//               background-color: var(--Glass-BG-P);
//               backdrop-filter: var(--Glass);
//               -webkit-backdrop-filter: var(--Glass);
//               opacity: 0;
//             }
//             .up-scroll {
//               transform: rotateZ(90deg) scale(1);
//               pointer-events: auto;
//               opacity: 1;
//             }
//             .page-up:hover {
//               color: var(--Text-2);
//             }
//             @media screen and (max-width: 48rem) {
//               .page-up {
//                 transform: rotateZ(-90deg) scale(1);
//                 pointer-events: auto;
//                 opacity: 1;
//               }
//               .up-scroll {
//                 transform: rotateZ(90deg) scale(1);
//               }
//             }
//           `}
//         </style>
//         <a href="#up" id="page-up" className="page-up">
//           { this.state.progress }
//         </a>
//       </>
//     );
//   }
// }
// export default PageUp;