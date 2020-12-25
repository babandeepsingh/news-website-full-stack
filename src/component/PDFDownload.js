import React from 'react'
import PdfE1 from '../pdf/TrolleyTimes_Punjabi_V1E1.pdf';
import PdfE2 from '../pdf/TrolleyTimes_Punjabi_V1E2.pdf';
import PdfE1Eng from '../pdf/TrolleyTimes_English_V1E1.pdf';



function PDFDownload() {
    return (
        <div className='d-flex'>
            <a href={PdfE1} className="btn btn-link" target="_blank">Volume 1 Edition 1 (Punjabi)</a>
            <a href={PdfE2} className="btn btn-link" target="_blank">Volume 1 Edition 2 (Punjabi) </a>
            <a href={PdfE1Eng} className="btn btn-link" target="_blank">Volume 1 Edition 1 (English) </a>

        </div>
    )
}

export default PDFDownload
