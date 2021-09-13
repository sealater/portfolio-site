// Resume.js
import React from 'react';
import { Document, Page, pdfjs } from "react-pdf";
import './Resume.scss'
import PDF from '../assets/resume-revised-redacted.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Resume(props) {
    const smallDevice = props.SmallDevice;

    if (smallDevice) {
        return (
            <Document loading="" file={PDF} className="resume__document">
                <Page loading="" scale="1" pageNumber={1} className="resume__page" />
            </Document>
        );
    }

    return (
        <Document loading="" file={PDF} className="resume__document">
            <Page loading="" scale="1.6" pageNumber={1} className="resume__page" />
        </Document>
    );
}

export default Resume;