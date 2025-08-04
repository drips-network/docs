import React from 'react'

export default function Figure({ src, caption }) {
  return (
    <figure style={{ width: '100%', margin: '20px 0 20px 0', padding: 0, }}>
      <img src={src} alt={caption} />
      <figcaption style={{ color: 'var(--vocs-color_text3)', marginTop: '16px' }}>{caption}</figcaption>
    </figure>
  )
}
