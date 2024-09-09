import React, { useState, useEffect } from 'react'

const PDFviewer = ({ pdfSrc }) => {
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
    <a href={pdfSrc}>PDF Download</a>
  ) : (
    <iframe
      width="100%"
      height="400px"
      src={pdfSrc}
      title="PDF Viewer"
    />
  )
}

export default PDFviewer
