import { useState, useEffect, createContext } from "react";
import LineBar from "../Components/LineBar/LineBar";
import Code from "../Components/Code/Code";
import Direction from "../Components/Direction/Direction";

const getDegree = (pos) => {
  let angles = [0, 45, 90, 135, 180, 225, 270, 315];
  return angles[pos] + 90;
};

export const SizeContext = createContext({
  size: -1,
  left: 0,
  right: 0,
});

export const SelectedContext = createContext(0);
function App() {
  const selected = useState(0);
  const [gradientType, setGradientType] = useState("linear");
  const [colors, setColor] = useState([
    { code: "#FC77FB", pos: 10 },
    { code: "#EE9944", pos: 90 },
  ]);
  const [linestring, setLineString] = useState(
    `linear-gradient(${getDegree(selected[0])}deg, ${colors[0].code} ${
      colors[0].pos
    }%, ${colors[1].code} ${colors[1].pos}%)`
  );
  const [linestringWithoutDegree, setlinestringWithoutDegree] = useState(
    `linear-gradient(to right, ${colors[0].code} ${colors[0].pos}%, ${colors[1].code} ${colors[1].pos}%)`
  );
  const [radialstring, setRadialString] = useState(
    `radial-gradient(circle, ${colors[0].code} ${colors[0].pos}%, ${colors[1].code} ${colors[1].pos}%)`
  );

  const boxAttributes = useState({
    size: -1,
    left: 0,
    right: 0,
  });

  const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  };
  const getStringColor = () => {
    let newString = "";
    for (let i = 0; i < colors.length; i++) {
      newString += colors[i].code + " " + colors[i].pos + "%";

      if (i != colors.length - 1) {
        newString += ", ";
      } else {
        newString += ")";
      }
    }
    return newString;
  };

  useEffect(() => {
    let newString = getStringColor();
    console.log(newString);
    setLineString(`linear-gradient(${getDegree(selected[0])}deg, ${newString}`);
    setlinestringWithoutDegree(`linear-gradient(to right,  ${newString}`);
    setRadialString(`radial-gradient(circle, ${newString}`);
  }, [selected[0], colors]);

  const setColorUpdater = (pos, idx) => {
    let newColors = [...colors];
    newColors[idx].pos = pos;
    newColors.sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0));
    setColor(newColors);
  };

  // useEffect(() => {
  //   let newString = getStringColor();

  //   setLineString(`linear-gradient(${getDegree(selected[0])}deg, ${newString}`);
  //   setlinestringWithoutDegree(`linear-gradient(to right,  ${newString}`);
  // }, [colors]);

  const colorChange = (e, point) => {
    let newState = [...colors];
    newState[point].code = e.target.value;
    newState.sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0));
    setColor(newState);
  };

  const addBar = (pos) => {
    let oldColors = [...colors];
    let newColor = {
      code: "#000000",
      pos: scale(pos, boxAttributes[0].left, boxAttributes[0].right, 0, 100),
    };
    oldColors.push(newColor);
    oldColors.sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0));
    setColor(oldColors);
  };

  return (
    <div className="App">
      <div
        id="backColor"
        style={{
          background: gradientType == "linear" ? linestring : radialstring,
        }}
      >
        <h1>Generate Awesome Flutter Gradient Easily!</h1>
      </div>

      <div id="mainContent">
        <div id="gradientType">
          <div>
            <input
              type="radio"
              checked="checked"
              name="type"
              id="linear"
              onClick={() => setGradientType("linear")}
            />
            <label htmlFor="linear" className="typeText">
              Linear
            </label>
          </div>
          <div>
            <input
              type="radio"
              name="type"
              id="radial"
              onClick={() => setGradientType("radial")}
            />
            <label htmlFor="radial" className="typeText">
              Radial
            </label>
          </div>
        </div>
        <SizeContext.Provider value={boxAttributes}>
          <LineBar
            colors={colors}
            linestring={linestringWithoutDegree}
            colorChange={colorChange}
            setColorUpdater={setColorUpdater}
            addBar={addBar}
          />
        </SizeContext.Provider>
        {gradientType == "linear" ? (
          <SelectedContext.Provider value={selected}>
            <Direction />
          </SelectedContext.Provider>
        ) : null}
      </div>
      <Code
        colors={colors}
        selected={selected[0]}
        gradientType={gradientType}
      />
    </div>
  );
}

export default App;
