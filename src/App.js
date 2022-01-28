
import React, { useState } from "react";
import { GoogleMap, InfoWindow, Marker, useJsApiLoader } from "@react-google-maps/api";
import CardComponent from "./components/CardComponent";
import styled from 'styled-components';
import markers from "./hooks/sampleData.json";
import SwipeableBottomSheet from 'react-swipeable-bottom-sheet';

function App() {
  const [showCard, setShowCard] = useState(false);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAvdfaE1dTWVM-HnzYOqrc5mTh2FUaXaXk"
  })

  const handleOnLoad = (map) => {
    const bounds = new window.google.maps.LatLngBounds();
    markers.forEach(({ position }) => bounds.extend(position));
    map.fitBounds(bounds);
  };

  const StyledMapContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
  `;

  const handlePopUp = () => {
    setShowCard(true);
  }

  return (
    <StyledMapContainer>
      {isLoaded && (
        <GoogleMap
          onLoad={handleOnLoad}
          onClick={() => setShowCard(false)}
          mapContainerStyle={{ width: "100vw", height: "100vh" }}
        >
          {markers.map(({ loc_id, name, position }) => (
            <Marker
              key={loc_id}
              position={position}
              onClick={() => handlePopUp()}
            >
            </Marker>
          ))}
        </GoogleMap>
      )
      }
      {
        showCard && (
          <SwipeableBottomSheet overflowHeight={100}>
            <CardComponent />
          </SwipeableBottomSheet>
        )
      }
    </StyledMapContainer >
  )
}

export default App;