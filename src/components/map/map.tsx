import {useEffect, useRef} from 'react';
import {useMap} from '../../hooks/use-map.ts';
import {layerGroup, Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {MapPoint} from '../../types/map-point.ts';

type MapProps = {
  cityLocation: MapPoint;
  mapPoints: MapPoint[];
  className: string;
}

export function Map({cityLocation, mapPoints, className}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, cityLocation);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      mapPoints.forEach((point) => {
        const marker = new Marker({
          lat: point.lat,
          lng: point.lng
        });

        marker.addTo(markerLayer);
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
