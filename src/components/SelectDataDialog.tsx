import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import Paper, { PaperProps } from "@mui/material/Paper";
import Draggable from "react-draggable";
import SelectDataLineChart from "./SelectDataScatterChart";
import { useState } from "react";

interface Props {
  open: boolean;
  onClose?: () => void;
  onDone?: () => void;
  onCalc?: () => void;
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

export default function SelectDataDialog(props: Props) {
  const [extractionDegree, setExtractionDegree] = useState("1");

  const handleChange = (event: SelectChangeEvent) => {
    setExtractionDegree(event.target.value);
  };
  return (
    <Dialog
      PaperComponent={PaperComponent}
      aria-labelledby="draggable-dialog-title"
      fullWidth
      maxWidth="lg"
      open={props.open}
      onClose={props.onClose}>
      <DialogTitle
        style={{ cursor: "move" }}
        id="draggable-dialog-title"
        sx={{ m: 0, p: 1 }}
        bgcolor={(theme) => theme.palette.primary.main}
        color={(theme) => theme.palette.primary.contrastText}>
        数据抽取
      </DialogTitle>
      <div className="p-1 flex">
        <div className="flex flex-col gap-2">
          <Button
            sx={{ whiteSpace: "nowrap" }}
            variant="contained"
            color="primary"
            size="small">
            选点模式
          </Button>

          <div>
            <FormControl
              size="small"
              variant="standard"
              sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="抽提程度-select-standard-label">
                抽提程度
              </InputLabel>
              <Select
                size="small"
                labelId="抽提程度-select-standard-label"
                id="抽提程度-select-standard"
                value={extractionDegree}
                onChange={handleChange}
                label="抽提程度">
                <MenuItem value={1}>1p/cycle</MenuItem>
                <MenuItem value={2}>2p/cycle</MenuItem>
                <MenuItem value={3}>3p/cycle</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="w-full ml-2 h-80">
          <SelectDataLineChart />
        </div>
      </div>
      <DialogActions>
        <Button onClick={props.onCalc}>计算</Button>
        <Button onClick={props.onDone}>下一步</Button>
      </DialogActions>
    </Dialog>
  );
}
