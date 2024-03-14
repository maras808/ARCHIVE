"use client";

import { useState } from "react";

export default function UploadFile() {
  const [files, setFiles] = useState<{ file: File; progress: number }[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []).map((file) => ({
      file,
      progress: 0,
    }));
    setFiles(selectedFiles);
  };

  const handleUpload = async () => {
    if (!files) return;

    const updateFileProgress = (index: number, fileProgress: number) => {
      setFiles((prevFiles) => {
        const updatedFiles = [...prevFiles];
        updatedFiles[index].progress = fileProgress;
        return updatedFiles;
      });
    };

    Promise.all(
      files.map((fileObject, index) => {
        return new Promise<void>((resolve, reject) => {
          const xhr = new XMLHttpRequest();
          xhr.open("POST", "/api/upload");
          xhr.setRequestHeader("File-Name", encodeURI(fileObject.file.name));
          xhr.setRequestHeader("Content-Type", "application/octet-stream");
          xhr.upload.addEventListener("progress", (e) => {
            if (e.lengthComputable) {
              const fileProgress = (e.loaded / fileObject.file.size) * 100;
              updateFileProgress(index, fileProgress);
            }
          });
          xhr.onerror = () => {
            reject(
              new Error(`Upload failed for file: ${fileObject.file.name}`)
            );
          };
          xhr.onload = () => resolve();
          xhr.send(fileObject.file);
        });
      })
    );
  };

  return (
    <div>
      <input type="file" multiple onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      <div>
        {files.map(({ file, progress }, index) => (
          <div key={index}>
            <span>{file.name}</span>
            <progress value={progress} max={100} />
            <span>{Math.round(progress)}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
