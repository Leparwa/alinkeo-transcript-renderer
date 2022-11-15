import * as React from "react";
import getTranscripts from "./getTranscripts";

export interface transcriptSectionProps {
  transcriptContent: string;
}

const transcript: React.FunctionComponent<transcriptSectionProps> = () => {
    const transcripts = getTranscripts()
  return (
    <div>{transcripts.transcriptContent}</div>
  );
};
export default transcript;