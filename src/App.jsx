import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";

function App() {
  const [markdown, setMarkdown] = useState("# markdown preview");

  function downloadFile(content) {
    const file = new Blob([content], { type: "text/markdown" });
    const fileURL = URL.createObjectURL(file);
    const link = document.createElement("a");
    link.href = fileURL;
    link.download = "README.md";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <main>
      <section className="markdown">
        <textarea
          className="input"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        ></textarea>
        <article className="result">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </article>

        <Button
          variant="contained"
          color="primary"
          onClick={() => downloadFile(markdown)}
        >
          <DownloadIcon />
          Download
        </Button>
      </section>
    </main>
  );
}

export default App;
