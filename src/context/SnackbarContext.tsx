/**
 * @file React component of buttons with multiple effects.
 * @author Shuto Iwasaki <https://github.com/iwasakishuto>
 * @copyright Shuto Iwasaki 2024
 * @license MIT
 * @reference <https://mui.com/components/snackbars/>
 */

"use client";

import Alert from "@mui/material/Alert";
import Slide from "@mui/material/Slide";
import Snackbar from "@mui/material/Snackbar";
import React, { createContext, useState } from "react";

type AlertColor = "error" | "warning" | "info" | "success";
type SnackbarOriginVertical = "top" | "bottom";
type SnackbarOriginHorizontal = "left" | "center" | "right";

interface SnackbarContextInterface {
  showAlertSnack: ({
    message,
    severity,
    vertical,
    horizontal,
    autoHideDuration,
  }: {
    message: string;
    severity?: AlertColor;
    vertical?: SnackbarOriginVertical;
    horizontal?: SnackbarOriginHorizontal;
    autoHideDuration?: number;
  }) => void;
}

export const SnackbarContext = createContext<SnackbarContextInterface | undefined>(undefined);

type SnackbarContextProviderProps = {
  children: React.ReactNode;
};

export const SnackbarContextProvider: React.FC<SnackbarContextProviderProps> = ({ children }) => {
  /** <--- SnackBar --- */
  const [snackBarProps, setSnackBarProps] = useState<{
    isOpen: boolean;
    message: string;
    severity: AlertColor;
    vertical: SnackbarOriginVertical;
    horizontal: SnackbarOriginHorizontal;
    autoHideDuration: number;
  }>({
    isOpen: false,
    message: "",
    severity: "error",
    vertical: "bottom",
    horizontal: "right",
    autoHideDuration: 3000,
  });

  /**
   * @summary Show SnackBar Alert Message.
   */
  const showAlertSnack = ({
    message,
    severity = "error",
    vertical = "bottom",
    horizontal = "right",
    autoHideDuration = 3000,
  }: {
    message: string;
    severity?: AlertColor;
    vertical?: SnackbarOriginVertical;
    horizontal?: SnackbarOriginHorizontal;
    autoHideDuration?: number;
  }): void => {
    setSnackBarProps({
      isOpen: true,
      message: message,
      severity: severity,
      vertical: vertical,
      horizontal: horizontal,
      autoHideDuration: autoHideDuration,
    });
  };
  const handleCloseSnack = (): void => {
    setSnackBarProps({
      isOpen: false,
      message: "",
      severity: "error",
      vertical: "bottom",
      horizontal: "left",
      autoHideDuration: 3000,
    });
  };

  return (
    <React.Fragment>
      {/* 子コンポーネントの描画 */}
      <SnackbarContext.Provider value={{ showAlertSnack: showAlertSnack }}>{children}</SnackbarContext.Provider>
      {/* Snackbarの描画 */}
      <Snackbar
        open={snackBarProps.isOpen}
        autoHideDuration={snackBarProps.autoHideDuration}
        anchorOrigin={{
          vertical: snackBarProps.vertical,
          horizontal: snackBarProps.horizontal,
        }}
        TransitionComponent={(props) => <Slide {...props} direction="right" />}
        onClose={handleCloseSnack}
        className={snackBarProps.isOpen ? "" : "hidden"}
      >
        <Alert onClose={handleCloseSnack} severity={snackBarProps.severity} className="w-full">
          {snackBarProps.message}
        </Alert>
      </Snackbar>
    </React.Fragment>
  );
};
