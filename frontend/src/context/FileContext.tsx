import { createContext, useState, PropsWithChildren } from "react";
import {
  InputFilesType,
  OptionsType,
  FileContextType,
} from "../types/Filetypes";

// Create a context with the appropriate default value
export const FileContext = createContext<FileContextType>({
  inputFiles: { files: [], stocks: [], svgFiles: [], fileProperties: [] },
  setInputFiles: () => {},
  options: {
    useMaterial: false,
    estimateSheets: false,
    useLable: false,
    useDirection: false,
    edgeBanding: false,
  },
  setOptions: () => {},
});

export const FileContextProvider = ({ children }: PropsWithChildren) => {
  const [inputFiles, setInputFiles] = useState<InputFilesType>({
    files: [],
    stocks: [],
    svgFiles: [],
    fileProperties: [{ length: 0, width: 0, qty: 0, label: 0 }],
  }); // Define useState type as an array of File

  const [options, setOptions] = useState<OptionsType>({
    useMaterial: false,
    estimateSheets: false,
    useLable: false,
    useDirection: false,
    edgeBanding: false,
  });

  // Define the context value, passing the state and the updater functions
  const value = {
    inputFiles,
    setInputFiles,
    options,
    setOptions,
  };

  return <FileContext.Provider value={value}>{children}</FileContext.Provider>;
};
