import React, { useState } from "react";
import mock01 from '../assets/images/Brosur3D.png';
import mock02 from '../assets/images/TLJCargo.png';
import mock03 from '../assets/images/MySF.png';
import '../assets/styles/Project.scss';
import { Dialog, DialogTitle, DialogContent, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Brosur3D from '../assets/documents/Brosur3D.pdf';
import BrosurTLJ from '../assets/documents/BrosurTLJ.pdf';
import BrosurSentimen from '../assets/documents/BrosurSentimen.pdf';

function Project() {
    const [open, setOpen] = useState(false);
    const [currentPdf, setCurrentPdf] = useState('');
    const [dialogTitle, setDialogTitle] = useState('');

    const openPdf = (pdf: string, title: string) => {
        setCurrentPdf(pdf);
        setDialogTitle(title);
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
        setCurrentPdf('');
        setDialogTitle('');
    }

    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <img src={mock03} className="zoom" alt="Sentiment Analysis thumbnail" width="100%" style={{cursor: 'pointer'}} onClick={() => openPdf(BrosurSentimen, "Sentiment Analysis Model for MySF's Review (PDF)")} />
                <a href="https://github.com/DoxRe23/model-analisis-sentimen-mysf" target="_blank" rel="noreferrer"><h2>Sentiment Analysis Model for MySF's Review</h2></a>
                <p>An analysis model developed using Python and BERT method to compile the user’s review data of MySF application from Google Playstore and turn them into information containing user sentiments, classified into positive, neutral, and negative categories. </p>
            </div>
            <div className="project">
                <img src={mock02} className="zoom" alt="TLJ Cargo thumbnail" width="100%" style={{cursor: 'pointer'}} onClick={() => openPdf(BrosurTLJ, "TLJ Cargo Management System (PDF)")} />
                <a href="https://github.com/DoxRe23/tlj-cargo-management-system" target="_blank" rel="noreferrer"><h2>TLJ Cargo Management System</h2></a>
                <p>A web-based goods delivery management system made with PHP, MySQL and BootStrap designed to streamline the shipping management process for TLJ Cargo.</p>
            </div>
            <div className="project">
                <img src={mock01} className="zoom" alt="3D Brochures thumbnail" width="100%" style={{cursor: 'pointer'}} onClick={() => openPdf(Brosur3D, "3D Brochures for Kitchen Product (PDF)")} />
                <a href="https://github.com/DoxRe23/brosur-3d" target="_blank" rel="noreferrer"><h2>3D Brochures for Kitchen Product</h2></a>
                <p>An android application made with Android Studio, Vuforia and Unity, developed to assist in the marketing of kitchenware products. It provides information on the marketed kitchenware products utilizing Alternate  Reality and 3D technology, along with their specifications and prices.</p>
            </div>

        </div>

        <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
            <DialogTitle>
                {dialogTitle}
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    style={{ position: 'absolute', right: 8, top: 8 }}
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent dividers>
                <iframe src={currentPdf} title={dialogTitle} width="100%" height="600px" style={{border:0}} />
            </DialogContent>
        </Dialog>

    </div>
    );
}

export default Project;