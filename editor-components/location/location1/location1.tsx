import React from 'react';
import { Location } from '../../EditorComponent';
import styles from './location1.module.scss';
import ComposerMap from '../../../composer-base-components/map/map';

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
      }
    });
  }

  getName(): string {
    return 'Location 1';
  }

  render() {
    const { markers } = this.getPropValue('location');

    return (
      <div className={this.decorateCSS('container')}>
        <div className={this.decorateCSS('max-content')}>
          <div className={this.decorateCSS('wrapper')}>
            <h1 className={this.decorateCSS('title')}>{this.getPropValue('title')}</h1>
            <section className={this.decorateCSS("map-container")}>
              <ComposerMap markers={markers} className={this.decorateCSS("map")} />
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default LocationComponent1;