import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { FileType } from "../select";

export const handleFileChange = (
  event: ChangeEvent<HTMLInputElement>,
  setFiles: Dispatch<SetStateAction<FileType[]>>
) => {
  setFiles(
    Array.from(event.target.files || []).map((file) => ({
      file,
      progress: 0,
    }))
  );
};

export const handleUpload = async (
  files: { file: File; progress: number }[],
  setFiles: Dispatch<SetStateAction<{ file: File; progress: number }[]>>
) => {
  if (!files) return;
  await Promise.all(
    files.map((fileObj) => {
      return new Promise<void>((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "/api/upload");
        xhr.setRequestHeader("File-Name", encodeURI(fileObj.file.name));
        xhr.setRequestHeader("Content-Type", "application/octet-stream");
        xhr.upload.addEventListener("progress", (e) => {
          if (e.lengthComputable) {
            const fileProgress = (e.loaded / fileObj.file.size) * 100;
            setFiles((prevFiles) =>
              prevFiles
                .map((file) =>
                  file.file === fileObj.file
                    ? { ...file, progress: fileProgress }
                    : file
                )
                .filter((v) => v.progress < 100)
            );
          }
        });
        xhr.onerror = () => {
          reject(new Error(`Upload failed for file: ${fileObj.file.name}`));
        };
        xhr.onload = () => resolve();
        xhr.send(fileObj.file);
      });
    })
  );
};
