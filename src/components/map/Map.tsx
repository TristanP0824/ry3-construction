import React, { useState } from 'react';
import styled from 'styled-components';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';

interface MapLocation {
  id: string;
  title: string;
  description: string;
  image?: string;
  position: {
    lat: number;
    lng: number;
  };
}

interface MapProps {
  locations: MapLocation[];
  center?: {
    lat: number;
    lng: number;
  };
  zoom?: number;
  height?: string;
  className?: string;
}

const MapContainer = styled.div<{ $height: string }>`
  width: 100%;
  height: ${({ $height }) => $height};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.medium};
`;

const InfoWindowContent = styled.div`
  max-width: 250px;
`;

const InfoWindowTitle = styled.h3`
  margin: 0 0 8px;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.darkGrey};
`;

const InfoWindowDescription = styled.p`
  margin: 0 0 8px;
  font-size: 0.875rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.darkGrey};
`;

const InfoWindowImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  margin-bottom: 8px;
`;

const LoadingContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  color: ${({ theme }) => theme.colors.darkGrey};
  font-weight: 500;
`;

const Map: React.FC<MapProps> = ({
  locations,
  center = { lat: 26.1906, lng: -97.6961 }, // Los Fresnos, TX coordinates
  zoom = 10,
  height = '500px',
  className,
}) => {
  const [selectedLocation, setSelectedLocation] = useState<MapLocation | null>(null);
  
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'YOUR_API_KEY', // Replace with your Google Maps API key
  });
  
  const handleMarkerClick = (location: MapLocation) => {
    setSelectedLocation(location);
  };
  
  const handleInfoWindowClose = () => {
    setSelectedLocation(null);
  };
  
  const mapOptions = {
    disableDefaultUI: false,
    zoomControl: true,
    streetViewControl: false,
    mapTypeControl: true,
    fullscreenControl: true,
  };
  
  if (!isLoaded) {
    return (
      <MapContainer $height={height} className={className}>
        <LoadingContainer>Loading map...</LoadingContainer>
      </MapContainer>
    );
  }
  
  return (
    <MapContainer $height={height} className={className}>
      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '100%' }}
        center={center}
        zoom={zoom}
        options={mapOptions}
      >
        {locations.map((location) => (
          <Marker
            key={location.id}
            position={location.position}
            onClick={() => handleMarkerClick(location)}
          />
        ))}
        
        {selectedLocation && (
          <InfoWindow
            position={selectedLocation.position}
            onCloseClick={handleInfoWindowClose}
          >
            <InfoWindowContent>
              {selectedLocation.image && (
                <InfoWindowImage src={selectedLocation.image} alt={selectedLocation.title} />
              )}
              <InfoWindowTitle>{selectedLocation.title}</InfoWindowTitle>
              <InfoWindowDescription>{selectedLocation.description}</InfoWindowDescription>
            </InfoWindowContent>
          </InfoWindow>
        )}
      </GoogleMap>
    </MapContainer>
  );
};

export default Map;
