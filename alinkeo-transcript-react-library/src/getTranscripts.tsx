import * as React from "react";

export interface transcriptMockProps {
  transcriptContent: string;
}
const transcriptMock:transcriptMockProps = {
    transcriptContent:'some  mock data here that looks like transcript words'
}
const getTranscripts = () => {
  return (
    transcriptMock
  );
};
export default getTranscripts;

