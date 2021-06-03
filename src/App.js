import React from "react";
import "./styles.css";

export default function App() {
  React.useEffect(() => {
    const containers = document.querySelectorAll(".container");
    if (containers) {
      console.log("elements present", containers[1]);
      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.map((entry) => {
            if (!entry.isIntersecting) {
              return;
            }
            console.log(entry.target);
            entry.target.classList.add("animateScrool");
          });
        },
        {
          threshold: 1,
          rootMargin: "-150px"
        }
      );
      containers.forEach((ele) => observer.observe(ele));
    } else {
      console.log("nothing found");
    }
  }, []);
  return (
    <div className="App">
      <div className="middle-container1 container"></div>
      <div className="middle-container2 container hidden"></div>
      <div className="middle-container3 container hidden"></div>
      <div className="middle-container4 container hidden"></div>
      <div className="middle-container5 container hidden"></div>
      <div className="middle-container6 container hidden"></div>
      <div className="middle-container7 container hidden"></div>
      <div className="middle-container8 container hidden"></div>
    </div>
  );
}
