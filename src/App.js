
import React, { useState } from "react";
import { GoogleMap, InfoWindow, Marker, useJsApiLoader } from "@react-google-maps/api";
import CardComponent from "./components/CardComponent";
import styled from 'styled-components';
import markers from "./hooks/sampleData.json";
import SwipeableBottomSheet from 'react-swipeable-bottom-sheet';

function App() {
  const [showCard, setShowCard] = useState(false);
  const [nameOfCenter, setNameOfCenter] = useState('Early Childhood Fun Center')
  const [centerAddress, setCenterAddress] = useState('438 University Ave #1900, Toronto, ON')
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

  const handlePopUp = (name, address) => {
    setShowCard(true);
    setNameOfCenter(name);
    setCenterAddress(address);
  }

  return (
    <StyledMapContainer>
      {isLoaded && (
        <GoogleMap
          onLoad={handleOnLoad}
          onClick={() => setShowCard(false)}
          mapContainerStyle={{ width: "100vw", height: "100vh" }}
        >
          {markers.map(({ loc_id, agency, position, full_address }) => (
            <Marker
              key={loc_id}
              position={position}
              onClick={() => handlePopUp(agency, full_address)}
            >
            </Marker>
          ))}
        </GoogleMap>
      )
      }
      {
        showCard && (
          <SwipeableBottomSheet overflowHeight={100}>
            <CardComponent centerName={nameOfCenter} centerAddress={centerAddress} />
          </SwipeableBottomSheet>
        )
      }
    </StyledMapContainer >
  )
}

export default App;