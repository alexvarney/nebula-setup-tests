import DeckGL from "@deck.gl/react";
import { DrawPolygonMode, EditableGeoJsonLayer } from "nebula.gl";
import React, { useState } from "react";

const myFeatureCollection = {
  type: "FeatureCollection",
  features: [
    /* insert features here */
  ],
};

const selectedFeatureIndexes: number[] = [];

export const App = () => {
  const [state, setState] = useState(myFeatureCollection);

  //@ts-ignore
  const layer = new EditableGeoJsonLayer({
    id: "geojson-layer",
    data: state,
    mode: DrawPolygonMode,
    selectedFeatureIndexes,

    onEdit: ({ updatedData }) => {
      setState(updatedData);
    },
  });

  return <DeckGL layers={[layer]} />;
};

export default App;
