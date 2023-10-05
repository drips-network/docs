import React from 'react'
import useBaseUrl from '@docusaurus/useBaseUrl'

export default function Figure({ src, caption }) {
  return (
    <figure style={{ width: '100%', margin: '20px 0 20px 0', padding: 0, }}>
      <img src={useBaseUrl(src)} alt={caption} />
      <figcaption style={{ color: 'var(--ifm-font-color-secondary)' }}>{caption}</figcaption>
    </figure>
  )
}
