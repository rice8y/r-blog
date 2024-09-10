import React, { useState, useEffect } from 'react'

interface PDFViewerProps {
  pdfSrc: string
  height?: string
  width?: string
}

const PDFViewer: React.FC<PDFViewerProps> = ({ pdfSrc, height = '400px', width = '100%' }) => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    // Run the resize handler initially to set the correct state
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
    <iframe width={width} height={height} src={pdfSrc} title="PDF Viewer" />
  )
}

export default PDFViewer
