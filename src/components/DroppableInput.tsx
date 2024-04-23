/**
 * DroppableInput Component
 * @description A component that allows users to upload files by clicking or dragging and dropping.
 * @param {onChange} onChange - The function to be called when the input value changes.
 * @param {id} id - The id of the input element.
 * @param {inputProps} inputProps - The props to be passed to the input element.
 * @param {className} className - The class name to be applied to the component.
 * @param {props} props - The props to be passed to the component.
 */

import * as React from "react";

import type { HTMLDivProps, HTMLInputProps, HTMLLabelProps } from "@/types";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CircularProgress from "@mui/material/CircularProgress";

type DroppableInputProps = {
  id: string;
  loading?: boolean;
  text?: string | React.ReactNode;
  inputProps?: HTMLInputProps;
  labelProps?: HTMLLabelProps;
} & HTMLDivProps;

const DroppableInput: React.FC<DroppableInputProps> = ({ id, loading = false, text = "Any File(s)", inputProps = {}, labelProps = {}, className = "", ...props }) => {
  return (
    <div {...props} className={`flex items-center justify-center w-full h-full ${className}`}>
      <label
        htmlFor={id}
        {...labelProps}
        className={`flex flex-col items-center justify-center w-full h-full border-2 border-slate-300 border-dashed rounded-lg cursor-pointer bg-slate-50 dark:hover:bg-bray-800 dark:bg-slate-700 hover:bg-slate-100 dark:border-slate-600 dark:hover:border-slate-500 dark:hover:bg-slate-600 ${
          labelProps.className || ""
        }`}
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          {loading ? <CircularProgress className="w-10 h-10 mb-4 text-slate-500" /> : <CloudUploadIcon className="w-10 h-10 mb-4 text-slate-500" />}
          <p className="mb-2 text-base text-slate-500 dark:text-slate-400">Click to upload or drag and drop</p>
          <p className="text-sm text-slate-500 dark:text-slate-400">{text}</p>
        </div>
        <input {...inputProps} id={id} className={`hidden ${inputProps.className || ""}`} />
      </label>
    </div>
  );
};

export default DroppableInput;
