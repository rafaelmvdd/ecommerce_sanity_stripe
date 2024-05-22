import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">
      <div className="hero-banner-container-left">
        <p className="beats-solo">{heroBanner.smallText}</p>
        <h3 className="hero-banner-midText">{heroBanner.midText}</h3>
        <h1 className='hero-banner-largeText'>{heroBanner.largeText1}</h1>
        <div className="hero-image-container">
          <img
            src={urlFor(heroBanner.image)}
            alt="headphones"
            className="hero-banner-image"
          />
        </div>

        <div>
          <Link href={`/product/${heroBanner.product}`}>
            <button type="button">{heroBanner.buttonText}</button>
          </Link>
          <div className="desc">
            <h5>Description</h5>
            <p>{heroBanner.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
