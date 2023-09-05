import React, { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import Styles from "./styles.module.scss";
import { useParams } from "react-router-dom";
// import { pdfjs } from "react-pdf";
// import PPPDF from "./99xStartup-compressed.pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import useWindowDimensions from "../hooks/useWindowDimensions";

function PDFViewer() {
  const { height, width } = useWindowDimensions();
  const [numPages, setNumPages] = useState();
  const params = useParams();
  let fileName = params.fileName;
  console.log({ height, width, fileName });
  const [isLoading, setLoading] = useState(true);
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    console.log({ numPages });
    setLoading(false);
  }

  // useEffect(() => {
  // 	// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  // 	//   "pdfjs-dist/build/pdf.worker.min.js",
  // 	//   import.meta.url
  // 	// ).toString();
  // }, []);

  let loadingIcons = [
    "https://ik.imagekit.io/99x/startup/components/loading/Loader_01_0O2P6qwDpg.gif",
    "https://ik.imagekit.io/99x/startup/components/loading/Loader-02_h5wStRKxVV.gif",
    "https://ik.imagekit.io/99x/startup/components/loading/Loader_04_p8yul5iLv.gif",
  ];

  let getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  };

  return (
    <div className={Styles.main}>
      {/* <h1>PDF Viewer</h1> */}
      <Document
        file={`https://99xassets.s3.ap-south-1.amazonaws.com/Cover+Videos/Case+Study/${fileName}`} // Replace with the actual URL of your PDF
        onLoadSuccess={onDocumentLoadSuccess}
      >
        {isLoading ? (
          <div className="loading-container">
            <div className="loading-img">
              <img
                style={{ width: "30vw" }}
                src={loadingIcons[getRandomInt(3)]}
              />
            </div>
          </div>
        ) : (
          <Page
            width={width}
            // height={"auto"}
            pageNumber={numPages}
          />
        )}
      </Document>
    </div>
  );
}

export default PDFViewer;

// import React from "react";
// import DocViewer, { DocViewerRenderers } from "react-doc-viewer";

// function PDFViewer() {
//   const docs = [
//     {
//       uri: require("../../case-studies/Earthy+Tales-compressed.pdf"),
//     },
//   ];
//   return (
//     <div>
//       <h1>hello</h1>
//       <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} />
//     </div>
//   );
// }

// export default PDFViewer;
