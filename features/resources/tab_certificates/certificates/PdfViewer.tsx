import Styles from "./PdfViewer.module.scss";

import {
  ScrollMode,
  SpecialZoomLevel,
  Viewer,
  ViewMode,
  Worker,
} from "@react-pdf-viewer/core";
import { pageNavigationPlugin } from "@react-pdf-viewer/page-navigation";
import {
  ThumbnailDirection,
  thumbnailPlugin,
} from "@react-pdf-viewer/thumbnail";
import { toolbarPlugin, ToolbarSlot } from "@react-pdf-viewer/toolbar";
import * as React from "react";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/page-navigation/lib/styles/index.css";
import "@react-pdf-viewer/thumbnail/lib/styles/index.css";
import "@react-pdf-viewer/toolbar/lib/styles/index.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const PdfViewer: React.FC = () => {
  const router = useRouter();
  const [pdfUrl, setPdfUrl] = useState<string>(undefined);
  const pageNavigationPluginInstance = pageNavigationPlugin();
  const { jumpToNextPage, jumpToPreviousPage } = pageNavigationPluginInstance;
  const thumbnailPluginInstance = thumbnailPlugin();
  const { Thumbnails } = thumbnailPluginInstance;

  const toolbarPluginInstance = toolbarPlugin();
  const { Toolbar } = toolbarPluginInstance;
  useEffect(() => {
    router.query.document && setPdfUrl(router.query.document as string);
  }, [router.isReady]);

  const keys = (event: KeyboardEvent) => {
    event.preventDefault();
    const key = event.key;
    switch (key) {
      case "ArrowLeft":
        jumpToPreviousPage();
        break;
      case "ArrowRight":
        jumpToNextPage();
        break;
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", (event) => keys(event));
    return document.removeEventListener("keydown", keys);
  });

  return (
    <>
      {pdfUrl && (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.2.146/build/pdf.worker.js">
          <div className={Styles.toolbar}>
            <div className={Styles.toolbar_container}>
              <Toolbar>
                {(props: ToolbarSlot) => {
                  const {
                    CurrentPageInput,
                    Download,
                    EnterFullScreen,
                    GoToNextPage,
                    GoToPreviousPage,
                    NumberOfPages,
                    Print,
                    ZoomIn,
                    ZoomOut,
                  } = props;
                  return (
                    <>
                      <div className={Styles.btn_style}>
                        <ZoomOut />
                      </div>
                      <div className={Styles.btn_style}>
                        <ZoomIn />
                      </div>
                      <div className={Styles.btn_style}>
                        <GoToPreviousPage />
                      </div>
                      <div className={Styles.btn_input}>
                        <CurrentPageInput /> / <NumberOfPages />
                      </div>
                      <div className={Styles.btn_arrow_next}>
                        <GoToNextPage />
                      </div>
                      <div className={Styles.btn_style}>
                        <EnterFullScreen />
                      </div>
                      <div className={Styles.btn_style}>
                        <Download />
                      </div>
                      <div className={Styles.btn_style}>
                        <Print />
                      </div>
                    </>
                  );
                }}
              </Toolbar>
            </div>
            {/* The viewer is shown here */}
          </div>

          <div
            style={{
              border: "1px solid rgba(0, 0, 0, .3)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                borderBottom: "1px solid rgba(0, 0, 0, .3)",
                height: "40rem",
                position: "relative",
              }}
            >
              {/*          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "1rem",
              transform: "translate(0, -100%) rotate(-90deg)",
              zIndex: 1,
            }}
          >
            <MinimalButton onClick={jumpToPreviousPage}>
              <PreviousIcon />
            </MinimalButton>
          </div>*/}
              <Viewer
                defaultScale={SpecialZoomLevel.PageFit}
                scrollMode={ScrollMode.Page}
                viewMode={ViewMode.DualPageWithCover}
                fileUrl={pdfUrl}
                plugins={[
                  pageNavigationPluginInstance,
                  thumbnailPluginInstance,
                  toolbarPluginInstance,
                ]}
              />
              {/*          <div
            style={{
              position: "absolute",
              top: "50%",
              right: "1rem",
              transform: "translate(0, -100%) rotate(-90deg)",
              zIndex: 1,
            }}
          >
            <MinimalButton onClick={jumpToNextPage}>
              <NextIcon />
            </MinimalButton>
          </div>*/}
            </div>
            <div
              style={{
                height: "14rem",
                overflow: "hidden",
              }}
            >
              <Thumbnails thumbnailDirection={ThumbnailDirection.Horizontal} />
            </div>
          </div>
        </Worker>
      )}
    </>
  );
};

export { PdfViewer };
