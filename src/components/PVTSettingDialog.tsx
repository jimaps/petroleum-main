import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogTitle,
  FormGroup,
  InputAdornment,
  TextField,
} from "@mui/material";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";

import { ReactNode, Suspense, SyntheticEvent, lazy, useState } from "react";

const PVTLineChart = lazy(() => import("./PVTLineChart"));

interface TabPanelProps {
  className?: string;
  children?: ReactNode;
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

function 气体PVT折线图() {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example">
        <Tab label="Zg" {...a11yProps(0)} />
        <Tab label="Bg" {...a11yProps(1)} />
        <Tab label="Cg" {...a11yProps(2)} />
        <Tab label="μg" {...a11yProps(3)} />
        <Tab label="ρg" {...a11yProps(4)} />
      </Tabs>

      <Box sx={{ width: "100%", height: "100%" }} className="">
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}></Box>
        <CustomTabPanel className=" h-full" value={value} index={0}>
          <Suspense fallback={<div>Loading...</div>}>
            <PVTLineChart />
          </Suspense>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Suspense fallback={<div>Loading...</div>}>
            <PVTLineChart />
          </Suspense>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <Suspense fallback={<div>Loading...</div>}>
            <PVTLineChart />
          </Suspense>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <Suspense fallback={<div>Loading...</div>}>
            <PVTLineChart />
          </Suspense>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={4}>
          <Suspense fallback={<div>Loading...</div>}>
            <PVTLineChart />
          </Suspense>
        </CustomTabPanel>
      </Box>
    </>
  );
}

function 气体PVT() {
  const [非烃矫正, set非烃矫正] = useState(false);
  const [radio1, setRadio1] = useState("DPR");
  const [radio2, setRadio2] = useState("干气");
  return (
    <Box sx={{ maxWidth: "280px" }}>
      <div className="flex flex-col gap-2">
        <TextField
          label="Pi"
          variant="outlined"
          size="small"
          type="number"
          value="87.1800"
          InputProps={{
            endAdornment: <InputAdornment position="end">Mpa</InputAdornment>,
          }}
          fullWidth
        />
        <TextField
          label="Ti"
          variant="outlined"
          size="small"
          type="number"
          value="135"
          InputProps={{
            endAdornment: <InputAdornment position="end">℃</InputAdornment>,
          }}
          fullWidth
        />
        <TextField
          label="Rg"
          variant="outlined"
          size="small"
          type="number"
          value="0.62"
          fullWidth
        />
        <TextField
          label="Pmin"
          variant="outlined"
          size="small"
          type="number"
          value="0.1"
          InputProps={{
            endAdornment: <InputAdornment position="end">Mpa</InputAdornment>,
          }}
          fullWidth
        />
        <TextField
          label="Pmax"
          variant="outlined"
          size="small"
          type="number"
          value="90"
          InputProps={{
            endAdornment: <InputAdornment position="end">Mpa</InputAdornment>,
          }}
          fullWidth
        />
        <TextField
          label="步长"
          variant="outlined"
          size="small"
          type="number"
          value="0.1"
          fullWidth
        />
        <div>
          <FormControl>
            <RadioGroup
              row
              value={radio1}
              onChange={(e) => setRadio1(e.target.value)}
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group">
              <FormControlLabel value="DPR" control={<Radio />} label="DPR" />
              <FormControlLabel
                value="Standing"
                control={<Radio />}
                label="Standing"
              />
            </RadioGroup>
          </FormControl>

          <FormControl>
            <RadioGroup
              row
              value={radio2}
              onChange={(e) => setRadio2(e.target.value)}
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group">
              <FormControlLabel value="干气" control={<Radio />} label="干气" />
              <FormControlLabel
                value="凝析气"
                control={<Radio />}
                label="凝析气"
              />
            </RadioGroup>
          </FormControl>

          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={非烃矫正}
                  onChange={(e) => set非烃矫正(e.target.checked)}
                />
              }
              label="非烃矫正"
            />
          </FormGroup>
        </div>
        <TextField
          disabled={!非烃矫正}
          label="H2S"
          variant="outlined"
          size="small"
          type="number"
          value="0"
          InputProps={{
            endAdornment: <InputAdornment position="end">%</InputAdornment>,
          }}
          fullWidth
        />
        <TextField
          disabled={!非烃矫正}
          label="CO2"
          variant="outlined"
          size="small"
          type="number"
          value="0"
          InputProps={{
            endAdornment: <InputAdornment position="end">%</InputAdornment>,
          }}
          fullWidth
        />
        <TextField
          disabled={!非烃矫正}
          label="N2"
          variant="outlined"
          size="small"
          type="number"
          value="0"
          InputProps={{
            endAdornment: <InputAdornment position="end">%</InputAdornment>,
          }}
          fullWidth
        />
      </div>
    </Box>
  );
}

export default function PVTSettingDialog(props: Props) {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const [calced, setCalced] = useState(false);

  return (
    <Dialog
      maxWidth={false}
      fullWidth
      sx={{
        "& .MuiDialog-paper": {
          maxHeight: "98%",
        },
      }}
      open={props.open}
      onClose={props.onClose}>
      <DialogTitle
        sx={{ m: 0, p: 1 }}
        bgcolor={(theme) => theme.palette.primary.main}
        color={(theme) => theme.palette.primary.contrastText}>
        高压物性
      </DialogTitle>
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: "background.paper",
          display: "flex",
        }}>
        <Tabs
          orientation="vertical"
          value={value}
          onChange={handleChange}
          variant="scrollable"
          aria-label="basic tabs example">
          <Tab label="气体PVT" {...a11yProps(0)} />
          <Tab disabled label="油相PVT" {...a11yProps(1)} />
          <Tab disabled label="水相PVT" {...a11yProps(2)} />
        </Tabs>

        <CustomTabPanel value={value} index={0} className="w-full">
          <div className="flex gap-2  w-full">
            <气体PVT></气体PVT>
            <div className="w-full">
              {calced && <气体PVT折线图></气体PVT折线图>}
            </div>
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          Item Two
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          Item Three
        </CustomTabPanel>
      </Box>
      <DialogActions>
        <Button
          onClick={() => {
            setCalced(true);
          }}>
          计算
        </Button>
        <Button onClick={props.onDone}>下一步</Button>
      </DialogActions>
    </Dialog>
  );
}
