import {
  Button,
  Dialog,
  DialogActions,
  InputAdornment,
  TextField,
} from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import * as React from "react";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

interface Props {
  open: boolean;
  onClose?: () => void;
  onDone?: () => void;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function 基本信息() {
  return (
    <div className="flex gap-4 flex-col">
      <TextField
        label="井筒半径"
        variant="outlined"
        size="small"
        value="0.108"
        InputProps={{
          endAdornment: <InputAdornment position="end">m</InputAdornment>,
        }}
        fullWidth
      />

      <TextField
        label="井筒半径"
        variant="outlined"
        size="small"
        value="0.108"
        InputProps={{
          endAdornment: <InputAdornment position="end">m</InputAdornment>,
        }}
        fullWidth
      />
      <TextField
        label="有效厚度"
        variant="outlined"
        size="small"
        value="0.108"
        InputProps={{
          endAdornment: <InputAdornment position="end">m</InputAdornment>,
        }}
        fullWidth
      />
      <TextField
        label="孔隙度"
        variant="outlined"
        size="small"
        value="0.108"
        InputProps={{
          endAdornment: <InputAdornment position="end">m</InputAdornment>,
        }}
        fullWidth
      />
      <TextField
        label="含水饱和度"
        variant="outlined"
        size="small"
        value="0.108"
        InputProps={{
          endAdornment: <InputAdornment position="end">%</InputAdornment>,
        }}
        fullWidth
      />
      <TextField
        label="起始时间"
        variant="outlined"
        size="small"
        value="0.108"
        fullWidth
      />
    </div>
  );
}

export default function AddOilWellDialog(props: Props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Dialog open={props.open} onClose={props.onClose} fullWidth>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example">
        <Tab label="基本参数" {...a11yProps(0)} />
        <Tab disabled label="油井信息" {...a11yProps(1)} />
        <Tab disabled label="备注" {...a11yProps(2)} />
      </Tabs>

      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}></Box>
        <CustomTabPanel value={value} index={0}>
          <基本信息></基本信息>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          Item Two
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          Item Three
        </CustomTabPanel>
      </Box>
      <DialogActions>
        <Button onClick={props.onClose}>取消</Button>
        <Button onClick={props.onDone}>下一步</Button>
      </DialogActions>
    </Dialog>
  );
}
