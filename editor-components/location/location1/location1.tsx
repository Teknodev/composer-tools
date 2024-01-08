import React, { useState, useCallback } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { Location } from '../../EditorComponent';
import styles from './location1.module.scss';


class LocationComponent1 extends Location {
  constructor(props?: any) {
    super(props, styles);

    // Bu kısımda özellik eklemeye devam edebilirsiniz.
    this.addProp({
      type: 'string',
      key: 'title',
      displayer: 'Title',
      value: 'Logo Clouds',
    });
    // ...


    // Google Haritalar için özellik ekleniyor.
    this.addProp({
      type: 'object',
      key: 'mapConfig',
      displayer: 'Google Map Configuration',
      value: [
        {
          key: "lat",
          displayer: "Lat",
          type: "number",
          value:1
        },
        {
          key: "lng",
          displayer: "LNG",
          type: "number",
          value:2
        }
      ] ,
    });
  }

  getName(): string {
    return 'Logo Compaa 1';
  }

  render() {
    const mapConfig = this.getPropValue('mapConfig');
    // console.log(mapConfig)

    return (
      <div className={this.decorateCSS('container')}>
        <div className={this.decorateCSS('max-content')}>
          <div className={this.decorateCSS('logo-comp1-page')}>
            <h1 className={this.decorateCSS('title')}>{this.getPropValue('title')}</h1>
            <section>
              <center>
                <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
                <GoogleMap
                  mapContainerStyle={{
                    width: "300px",
                    height: "300px"
                  }}
                    center={{
                      lat: mapConfig[0]?.value,
                      lng: mapConfig[1]?.value
                    }}
                   zoom={mapConfig.zoom}
                       >
                      {mapConfig.center && (
                      <Marker 
                        position={{
                        lat: mapConfig.center.lat,
                        lng: mapConfig.center.lng,
                      }}
                      title="Logo Comp 1 Location"
                    />
                  )}
                </GoogleMap>
                </LoadScript>
              </center>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default LocationComponent1;