import React from 'react';
import { summaryData } from '@data';

const Resume = () => {
  const { resumeFileUrl } = summaryData;

  return (
    <div
      className="w-full m-0"
      style={{
        height: 'calc(100vh - 83px)'
      }}
    >
      <object
        className="h-full w-full"
        data={resumeFileUrl}
      />
    </div>
  );
};

export default Resume;
