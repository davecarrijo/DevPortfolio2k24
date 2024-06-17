import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection='geoAzimuthalEqualArea'
      projectionConfig={{
        rotate: [-10.0, -52.0, 0],
        center: [-5, -3],
        scale: 1600
      }}
      style={{ width: "100%", height: "100%" }}
    >
      <Geographies
        geography='/features.json'
        fill='#4c85ba'
        stroke='#FFFFFF'
        strokeWidth={3}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[-9.3522, 38.8566]}
        dx={+90}
        dy={-30}
        connectorProps={{
          stroke: "lightblue",
          strokeWidth: 5,
          strokeLinecap: "round"
        }}
      >
        <text x='+70' textAnchor='end' alignmentBaseline='middle' fill='white'>
          {"Lisbon"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;
