import { useState } from "react";
import "./EnsoText.css";

export default function EnsoText() {
  const [textContent, setTextContent] = useState("\n\n\n\nType here");
  const onTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    // e.target.selectionStart = e.target.selectionEnd = e.target.value.length;
    if (!textContent.startsWith("\n\n\n\n")) {
      textContent.trimStart();
      setTextContent("\n\n\n\n" + e.target.value);
    } else {
      setTextContent(e.target.value);
    }
  };

  return (
    <>
      <textarea
        id="ensoTextarea"
        dir="auto"
        spellCheck="false"
        autoFocus
        value={textContent}
        onChange={(e) => {
          onTextChange(e);
        }}
      ></textarea>
      <div id="ensoOverlay">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </>
  );
}
