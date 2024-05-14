import {useEffect, useRef} from 'react';
import {useMap} from '../../hooks/use-map.ts';
import {Icon, layerGroup, Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {MapPoint} from '../../types/map-point.ts';

type MapProps = {
  cityLocation: MapPoint;
  mapPoints: MapPoint[];
  className: string;
}

const defaultMarker = new Icon({iconUrl: 'img/pin.svg'});

export function Map({cityLocation, mapPoints, className}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, cityLocation);

  useEffect(() => {
    if (map) {
      map.setView({lat: cityLocation.lat, lng: cityLocation.lng});
      const markerLayer = layerGroup().addTo(map);
      mapPoints.forEach((point) => {
        const marker = new Marker({
          lat: point.lat,
          lng: point.lng
        });

        marker.setIcon(defaultMarker).addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, mapPoints, cityLocation]);


  return (
    <section className={`${className} map`} ref={mapRef}/>
  );
}
