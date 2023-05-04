import "./App.css";

function App() {
  let palm1 = document.getElementById("palm1");
  let palm2 = document.getElementById("palm2");
  let palm3 = document.getElementById("palm3");
  let palm4 = document.getElementById("palm4");
  let palm5 = document.getElementById("palm5");
  let palm6 = document.getElementById("palm6");
  let palm7 = document.getElementById("palm7");

  window.addEventListener("scroll", () => {
    let value = window.scrollY;
    palm1.style.left = value * -0.1 + "px";
    palm2.style.left = value * 0.1 + "px";
    palm3.style.left = value * -0.05 + "px";
    palm4.style.left = value * 0.05 + "px";
    palm5.style.left = value * -1 + "px";
    palm6.style.left = value * 1 + "px";
    palm1.style.top = value * 0.05 + "px";
    palm2.style.top = value * 0.05 + "px";
    palm3.style.top = value * 0.01 + "px";
    palm4.style.top = value * 0.02 + "px";
    palm5.style.top = value * 0.03 + "px";
    palm6.style.top = value * 0.04 + "px";
    palm7.style.top = value * 0.01 + "px";
  });
  return (
    <div className="App">
      <div className="body">
        <div className="header">
          <div className="parallax">
            <div className="animation_layer" id="palm7"></div>
            <div className="animation_layer" id="palm6"></div>
            <div className="animation_layer" id="palm5"></div>
            <div className="animation_layer" id="palm3"></div>
            <div className="animation_layer" id="palm4"></div>
            <div className="animation_layer" id="palm2"></div>
            <div className="animation_layer" id="palm1"></div>
          </div>
          <div>
            <h1>Positive Outlooks</h1>
            <div>
              <h2>Your mind can move mountains!</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
