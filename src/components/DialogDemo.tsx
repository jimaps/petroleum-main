import { Dialog, DialogTitle } from "@mui/material";
import Paper, { PaperProps } from "@mui/material/Paper";
import Draggable from "react-draggable";

interface Props {
  open: boolean;
  onClose?: () => void;
  onDone?: () => void;
  onCalcFlowPressure?: () => void;
}

function PaperComponent(props: PaperProps) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}

export default function IndexDialog(props: Props) {
  return (
    <Dialog
      PaperComponent={PaperComponent}
      aria-labelledby="draggable-dialog-title"
      fullWidth
      open={props.open}
      onClose={props.onClose}>
      <DialogTitle
        style={{ cursor: "move" }}
        id="draggable-dialog-title"
        sx={{ m: 0, p: 1 }}
        bgcolor={(theme) => theme.palette.primary.main}
        color={(theme) => theme.palette.primary.contrastText}>
        标题
      </DialogTitle>
    </Dialog>
  );
}
