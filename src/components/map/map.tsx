import {useEffect, useRef} from 'react';
import {useMap} from '../../hooks/use-map.ts';
import {Icon, layerGroup, Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {MapPoint} from '../../types/map-point.ts';

type MapProps = {
  centerLocation: MapPoint;
  mapPoints: MapPoint[];
  activePoint?: MapPoint;
  className: string;
}

const defaultMarker = new Icon({iconUrl: 'img/pin.svg'});
const activeMarker = new Icon({iconUrl: 'img/pin-active.svg'});

export function Map({centerLocation, mapPoints, className, activePoint}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, centerLocation);

  useEffect(() => {
    if (map) {
      map.setView({lat: centerLocation.lat, lng: centerLocation.lng});
      const markerLayer = layerGroup().addTo(map);
      mapPoints.forEach((point) => {
        const marker = new Marker({
          lat: point.lat,
          lng: point.lng
        });

        marker.setIcon(point === activePoint ? activeMarker : defaultMarker).addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, mapPoints, centerLocation]);


  return (
    <section className={`${className} map`} ref={mapRef}/>
  );
}
