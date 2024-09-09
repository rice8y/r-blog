'use client'

import React, { useState, useEffect } from 'react'

interface PDFViewerProps {
  pdfSrc: string
}

const PDFViewer: React.FC<PDFViewerProps> = ({ pdfSrc }) => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    handleResize()

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return isMobile ? (
    <a href={pdfSrc} style={{ display: 'block', textAlign: 'center', margin: '20px' }}>
      PDF Download
    </a>
  ) : (
    <iframe
      width="100%"
      height="400px"
      src={pdfSrc}
      title="PDF Viewer"
      style={{ border: 'none' }}
    />
  )
}

export default PDFViewer
