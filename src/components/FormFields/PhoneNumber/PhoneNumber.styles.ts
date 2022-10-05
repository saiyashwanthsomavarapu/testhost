import { createStyles, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles: any = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: "4px 4px !important",
    },
    input: {
      textTransform: "uppercase !important",
      fontSize: "12px !important",
      fontWeight: "bold !important",
      letterSpacing: "1.5px !important",
      "&:before": { borderBottomColor: "#000 !important" },
      "&:after": { borderBottomColor: "#000 !important" },
      "& .MuiSvgIcon-root": {
        color: "#000 !important",
      },
    },
    inputLabel: {
      color: "#000 !important",
      textTransform: "uppercase !important",
      letterSpacing: "1.5px !important",
      fontSize: "12px !important",
      "&.Mui-focused": {
        color: "#000 !important",
      },
    },
  })
);
