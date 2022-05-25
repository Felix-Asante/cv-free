import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Menu from "./Menu";
import { Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { pdfjs } from "react-pdf";
import cv from "../assets/cv.pdf";
import { GrDocumentDownload } from "react-icons/gr";
function Layout(props) {
	pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
	const [numPages, setNumPages] = useState(null);

	function onDocumentLoadSuccess({ numPages }) {
		setNumPages(numPages);
	}

	return (
		<div>
			<Header />
			<div className="flex layout">
				<Menu />
				<div className="contenu">{props.children}</div>
				<div className="affichage">
					<div className="tool-bar">
						<GrDocumentDownload />
					</div>
					<div className="document">
						<Document
							file={cv}
							options={{ workerSrc: "/pdf.worker.js" }}
							onLoadSuccess={onDocumentLoadSuccess}
						>
							{Array.from(new Array(numPages), (el, index) => (
								<Page key={`page_${index + 1}`} pageNumber={index + 1} />
							))}
						</Document>
					</div>
				</div>
			</div>
			<Footer prev={props.prev} next={props.next} />
		</div>
	);
}

export default Layout;
