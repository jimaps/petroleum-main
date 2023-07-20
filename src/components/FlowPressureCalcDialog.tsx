import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Divider,
  InputAdornment,
  TextField,
} from "@mui/material";
import Paper, { PaperProps } from "@mui/material/Paper";
import { useState } from "react";
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

export default function FlowPressureCalcDialog(props: Props) {
  const [canNext, setCanNext] = useState(false);
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
        流压计算
      </DialogTitle>
      <Box className="flex gap-2 p-1" sx={{ minHeight: 128 }}>
        <Paper className="h-full w-full flex flex-col gap-4 p-1" elevation={2}>
          <Divider>井筒参数</Divider>
          <TextField
            label="套管外径"
            variant="outlined"
            size="small"
            value="0.112"
            InputProps={{
              endAdornment: <InputAdornment position="end">m</InputAdornment>,
            }}
            fullWidth
          />

          <TextField
            label="套管内径"
            variant="outlined"
            size="small"
            value="0.108"
            InputProps={{
              endAdornment: <InputAdornment position="end">m</InputAdornment>,
            }}
            fullWidth
          />

          <TextField
            label="油管外径"
            variant="outlined"
            size="small"
            value="0.108"
            InputProps={{
              endAdornment: <InputAdornment position="end">m</InputAdornment>,
            }}
            fullWidth
          />

          <TextField
            label="油管内径"
            variant="outlined"
            size="small"
            value="0.108"
            InputProps={{
              endAdornment: <InputAdornment position="end">m</InputAdornment>,
            }}
            fullWidth
          />

          <TextField
            label="井斜角"
            variant="outlined"
            size="small"
            value="90"
            InputProps={{
              endAdornment: <InputAdornment position="end">°</InputAdornment>,
            }}
            fullWidth
          />

          <TextField
            label="井底深度"
            variant="outlined"
            size="small"
            type="number"
            value="3981.1"
            InputProps={{
              endAdornment: <InputAdornment position="end">m</InputAdornment>,
            }}
            fullWidth
          />
          <TextField
            label="地表温度"
            variant="outlined"
            size="small"
            value="25"
            InputProps={{
              endAdornment: <InputAdornment position="end">℃</InputAdornment>,
            }}
            fullWidth
          />
          <TextField
            label="井口流温"
            variant="outlined"
            size="small"
            value="25"
            InputProps={{
              endAdornment: <InputAdornment position="end">℃</InputAdornment>,
            }}
            fullWidth
          />
        </Paper>
        <Paper className="h-full w-full flex flex-col gap-4 p-1" elevation={2}>
          <Divider>传热参数</Divider>
          <TextField
            label="地层导热系数"
            variant="outlined"
            size="small"
            value="1.5"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">W/m·K</InputAdornment>
              ),
            }}
            fullWidth
          />
          <TextField
            label="液体密度"
            variant="outlined"
            size="small"
            value="1000"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">kg/m³</InputAdornment>
              ),
            }}
            fullWidth
          />
          <TextField
            label="地温梯度"
            variant="outlined"
            size="small"
            value="0.025"
            InputProps={{
              endAdornment: <InputAdornment position="end">℃/m</InputAdornment>,
            }}
            fullWidth
          />
          <TextField
            label="天然气比热容"
            variant="outlined"
            size="small"
            value="1650"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">J/kg·℃</InputAdornment>
              ),
            }}
            fullWidth
          />
          <TextField
            label="水泥环导热系数"
            variant="outlined"
            size="small"
            value="1.5"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">J/(s·m·℃)</InputAdornment>
              ),
            }}
            fullWidth
          />
          <TextField
            label="底层导热系数"
            variant="outlined"
            size="small"
            value="1.5"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">J/(s·m·℃)</InputAdornment>
              ),
            }}
            fullWidth
          />
          <TextField
            label="环空流体对射传热系数"
            variant="outlined"
            size="small"
            value="1.5"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">J/(s·m·℃)</InputAdornment>
              ),
            }}
            fullWidth
          />
          <TextField
            label="环空流体辐射传热系数"
            variant="outlined"
            size="small"
            value="1.5"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">J/(s·m·℃)</InputAdornment>
              ),
            }}
            fullWidth
          />
        </Paper>
      </Box>
      <DialogActions>
        <Button
          onClick={() => {
            setCanNext(true);
            props.onCalcFlowPressure && props.onCalcFlowPressure();
          }}>
          计算
        </Button>
        <Button disabled={!canNext} onClick={props.onDone}>
          下一步
        </Button>
      </DialogActions>
    </Dialog>
  );
}
