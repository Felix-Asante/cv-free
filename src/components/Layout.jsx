import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Menu from "./Menu";
import { Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { pdfjs } from "react-pdf";
import { GrDocumentDownload } from "react-icons/gr";
import { useAppSelector } from "../hooks/useRedux";
import { saveAs } from "file-saver";
import Pdf from "react-to-pdf";

// NEW
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
// END
function Layout(props) {
	const ref = React.createRef();
	// NEW
	const defaultLayoutPluginInstance = defaultLayoutPlugin();
	// END
	pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
	const [numPages, setNumPages] = useState(0);

	const { document } = useAppSelector((state) => state.general);
	function onDocumentLoadSuccess({ numPages }) {
		setNumPages(numPages || 1);
	}

	const downloadPDF = async () => {
		const pdfBlob = new Blob([document.data], {
			type: "application/pdf",
		});
		saveAs(pdfBlob, "cvfree.pdf");
	};
	const options = {
		orientation: "portrait",
		unit: "in",
		format: "A4",
	};
	return (
		<div>
			<Header />
			<div className="flex layout">
				<Menu />
				<div className="contenu">{props.children}</div>
				<div className="affichage">
					{/* <Pdf
						targetRef={ref}
						filename="cvFree.pdf"
						options={options}
						x={0}
						y={0}
						scale={1}
					>
						{({ toPdf }) => (
							<div className="tool-bar" onClick={toPdf}>
								<GrDocumentDownload />
							</div>
						)}
					</Pdf> */}

					<div className="document" ref={ref}>
						{/* <Document
							file={document}
							options={{ workerSrc: "/pdf.worker.js" }}
							onLoadSuccess={onDocumentLoadSuccess}
						>
							{Array.from(new Array(numPages), (el, index) => (
								<Page key={`page_${index + 1}`} pageNumber={index + 1} />
							))}
						</Document> */}
						<Worker workerUrl="https://unpkg.com/pdfjs-dist@2.13.216/build/pdf.worker.js">
							<div style={{ height: "750px" }}>
								<Viewer
									fileUrl={document}
									plugins={[defaultLayoutPluginInstance]}
								/>
							</div>
						</Worker>
					</div>
				</div>
			</div>
			<Footer prev={props.prev} next={props.next} />
		</div>
	);
}

export default Layout;
