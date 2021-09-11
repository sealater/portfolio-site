// Resume.js
import React from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import './Resume.scss'
import PDF from '../assets/resume-revised.pdf';

function Resume() {
    return (
        <Document loading="" file={PDF} className="resume__document">
            <Page loading="" scale="1.6" pageNumber={1} className="resume__page" />
            <Page loading="" scale="1.6" pageNumber={2} className="resume__page" />
        </Document>
    );
}

export default Resume;