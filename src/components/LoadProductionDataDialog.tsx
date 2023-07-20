import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { read, utils } from "xlsx";

import FileIcon from "@mui/icons-material/FileOpen";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useState } from "react";
interface Props {
  open: boolean;
  onClose?: () => void;
  onDone?: () => void;
}

export default function LoadProductionDataDialog(props: Props) {
  const [excelData, setExcelData] = useState<Array<Array<number | string>>>([]);
  const [file, setFile] = useState<File | null>(null);
  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    console.log(event.target.files);
    if (event.target.files) {
      const file = event.target.files[0];
      const data = await file.arrayBuffer();
      /* 跳过第一行数据，然后输出 json */
      const workBook = read(data);
      const workSheet = workBook.Sheets[workBook.SheetNames[0]];
      const jsonData = utils.sheet_to_json(workSheet, { header: 1, defval: 0 });

      let dataJson = [];
      for (let i = 0; i < jsonData.length; i++) {
        if (i < 2) {
          continue;
        }

        const row = jsonData[i] as Array<number | string>;
        if (i == 2) {
          dataJson.push(row);
          continue;
        }

        /* 判断第一个元素类型是否为数字 */
        if (typeof row[0] == "number") {
          dataJson.push(row);
        } else {
          break;
        }
      }
      setExcelData(dataJson);
      event.target.value = "";
    }
  };
  return (
    <Dialog
      fullWidth
      maxWidth={false}
      open={props.open}
      onClose={props.onClose}>
      <DialogTitle
        sx={{ m: 0, p: 1 }}
        bgcolor={(theme) => theme.palette.primary.main}
        color={(theme) => theme.palette.primary.contrastText}>
        生产数据
      </DialogTitle>
      <DialogContent>
        <div className="p-2">
          <div className="flex gap-2">
            <Button
              variant="contained"
              component="label"
              color="primary"
              startIcon={<FileIcon></FileIcon>}>
              选择文件
              <input
                type="file"
                hidden
                onChange={handleFileChange}
                accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
              />
            </Button>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group">
              <FormControlLabel
                value="生产日期"
                control={<Radio />}
                label="生产日期"
              />
              <FormControlLabel
                value="累计生产时长"
                control={<Radio />}
                label="累计生产时长"
              />
            </RadioGroup>

            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group">
              <FormControlLabel value="套压" control={<Radio />} label="套压" />
              <FormControlLabel value="油压" control={<Radio />} label="油压" />
              <FormControlLabel value="流压" control={<Radio />} label="流压" />
            </RadioGroup>
          </div>

          {excelData.length > 0 && (
            <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
              <Table stickyHeader aria-label="simple table" size="small">
                <TableHead>
                  <TableRow>
                    {excelData[0].map((item, index) => {
                      return <TableCell key={index}>{item}</TableCell>;
                    })}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {excelData.map((row, index) => {
                    if (index < 1) {
                      return;
                    }
                    return (
                      <TableRow key={index}>
                        {row.map((item, index) => {
                          return <TableCell key={index}>{item}</TableCell>;
                        })}
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onDone}>下一步</Button>
      </DialogActions>
    </Dialog>
  );
}
