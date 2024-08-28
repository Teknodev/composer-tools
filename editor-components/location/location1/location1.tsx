import React, { useEffect, useRef } from 'react';

import { Location } from '../../EditorComponent';
import styles from './location1.module.scss';
import { Map, Marker } from '@vis.gl/react-google-maps';

class LocationComponent1 extends Location {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: 'string',
      key: 'title',
      displayer: 'Title',
      value: 'See Our Location',
    });

    this.addProp({
      type: 'location',
      key: 'location',
      displayer: "Location",
      value: {
        markers: [
          {
            lat: 36.8968908,
            lng: 30.7133233,
          }
        ],
        zoom: 12
      }
    });
  }

  getName(): string {
    return 'Location 1';
  }

  render() {
    console.log("LOCATION PROP : ", this.getPropValue('location'))
    const { markers, zoom } = this.getPropValue('location');

    return (
      <div className={this.decorateCSS('container')}>
        <h1>{JSON.stringify(markers)}</h1>
        <div className={this.decorateCSS('max-content')}>
          <div className={this.decorateCSS('wrapper')}>
            <h1 className={this.decorateCSS('title')}>{this.getPropValue('title')}</h1>
            <section className={this.decorateCSS("map-container")}>
              <ComposerMap markers={markers} zoom={zoom} className={this.decorateCSS("map")} />
            </section>
          </div>
        </div>
      </div>
    );
  }
}

type MapProps = {
  markers: { lat: number; lng: number; }[];
  zoom: number;
  className: string;
};

function ComposerMap({ markers, zoom, className }: MapProps) {


  const getCenter = () => {
    if(markers.length > 0) {
      return {
        lat: markers[0].lat,
        lng: markers[0].lng
      }
    }

    return {
      lat: 36.8968908,
      lng: 30.7133233,
    }
  }

  return (
    <Map
      className={className}
      center={getCenter()}
      zoom={zoom}
    >
      {markers.map((marker, index) => (
        <Marker
          key={index}
          position={{
            lat: marker.lat,
            lng: marker.lng
          }}
          title="Location"
        />
      ))}
    </Map>
  );
}

export default LocationComponent1;