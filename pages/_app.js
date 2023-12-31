import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

const initialLights = [
  { id: 1, name: "Living Room", isOn: false },
  { id: 2, name: "Kitchen", isOn: false },
  { id: 3, name: "Bedroom", isOn: false },
  { id: 4, name: "Bathroom", isOn: false },
  { id: 5, name: "Garage", isOn: false },
  { id: 6, name: "Porch", isOn: false },
  { id: 7, name: "Garden", isOn: false },
  { id: 8, name: "Office", isOn: false },
];

export default function App({ Component, pageProps }) {

  const [lights, setLights] = useState(initialLights);

  const lightsOnCount = lights.filter((light) => light.isOn).length;

  function toggleLight(id) {
    setLights(
      lights.map((light) => {
        if (light.id === id) {
          return { ...light, isOn: !light.isOn };
        }
        return light;
      })
    );
  };

  function turnAllLightsOff() {
    setLights(lights.map((light) => ({ ...light, isOn: false })));
  }

  function turnAllLightsOn() {
    setLights(lights.map((light) => ({ ...light, isOn: true })));
  }

  return (
    <Layout isDimmed={lightsOnCount === 0}>
      <GlobalStyle />
      <Component
        {...pageProps}
        lights={lights}
        toggleLight={toggleLight}
        lightsOnCount={lightsOnCount}
        turnAllLightsOff={turnAllLightsOff}
        turnAllLightsOn={turnAllLightsOn}
      />
    </Layout>
  );
}
