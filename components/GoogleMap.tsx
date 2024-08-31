import React from 'react'

const GoogleMap = ({ src, width, height }) => (
  <iframe
    src={src}
    width={width}
    height={height}
    style={{ border: 0 }}
    allowFullScreen={true}
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Google Maps"
  />
)

export default GoogleMap;
