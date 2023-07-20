import ProductionLineChart from "../components/ProductLine";
import PressLineChart from "../components/PressLine";
import PredictProductionLine from "../components/PredictProductionLine";
import {Box, Button, NativeSelect} from "@mui/material"; 
//@ts-ignore
import ModelPreduction from "../image/ModelPrediction.png";
//@ts-ignore
import Model1 from "../image/1.png";
//@ts-ignore
import Model2 from "../image/2.png";

import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { useState } from "react";

function App() {
  const [productionMode, setProductionMode] = useState("");

  const handleButtonClick = (mode: string) => {
    setProductionMode(mode);
  };

  return (
    <>
    <Box className="flex w-full" sx={{
      background:"#001FAD",
      border: "1px solid white",
      height: "100px",
    }}>
      <Box className="relative h-30 w-80">
        <Button variant="contained" className="absolute top-5 right-5 h-12 " onClick={() => handleButtonClick("手动模式")}>手动模式</Button>  
      </Box>
      <Box className="relative h-30 w-40">
        <Button variant="contained" className="absolute top-5 left-6 h-12 " onClick={() => handleButtonClick("按压生产")}>按压生产</Button>  
      </Box>
      <Box className="relative h-30 w-60">
        <Button variant="contained" className="absolute top-5  h-12 " onClick={() => handleButtonClick("自动生产")}>自动生产</Button>  
      </Box>
      <Box className="relative h-30 w-60">
        <Box className="absolute top-6 h-12">
          <NativeSelectDemo/>
        </Box>
      </Box>
      <Box component={"fieldset"} className="relative h-20 w-60 p-2 border-stone-300  text-white" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <legend>生产模式</legend>
      {productionMode ? <p>当前模式：{productionMode}</p> : <p>当前模式:自动生产</p>}
      </Box>
      <Box component={"fieldset"} className="relative left-5 h-20 w-60 p-2 border-stone-300  text-white" >
      <legend>链接状态</legend>
      <p style={{ margin: 0 }}>PLC</p>
      <p style={{ margin: 0 }}>数据库</p>
      </Box>
    </Box>

    <Box className="flex text-white h-full" sx={{
      background:"#001FAD",
      border: "1px solid white",
    }}>
    <div className="flex flex-col p-4 gap-2 w-full">
     <Box component={"fieldset"}  className="p-5 border-stone-300  text-white	"  sx={{
      height:"400px"
     }}>
      <legend>产品曲线</legend>
      <Box sx={{
        height:"350px"
      }}>
        <ProductionLineChart />
      </Box>    
      </Box>
      <Box component={"fieldset"} className="p-5 border-stone-300 text-white"  sx={{
      height:"400px",
     }} >
      <legend>压力曲线</legend>
      <Box sx={{
        height:"350px"
      }}>
        <PressLineChart />
      </Box>
      </Box>    
    </div>

    <div className="flex flex-col p-4 gap-2 w-full">
    <Box component={"fieldset"} className="p-5 border-stone-300 text-white" sx={{ height: "800px" }}>
      <legend>阀门状态</legend>
      <div className="flex">
        <div style={{ position: 'relative', width: '40%', height: '100%' }}>
          <img src={Model2} style={{ position: 'absolute', top: '85%', left: '39%', transform: 'translate(-50%, -50%)', zIndex: '1' }} />
          <img src={Model1} style={{ width: '90%', height: 'auto', zIndex: '0' }} />
        </div>
        <div className="flex flex-col" style={{ marginLeft: '150px' }}>
          <Box component={"fieldset"} className="p-5 border-stone-300 text-white" sx={{ height: "150px", width: "220px", position: 'relative', zIndex: '2' }}>
            <legend>预测产量(高产模式)</legend>
            <p style={{ fontSize: '20px' ,  marginTop: '-1px'}}>日产量:</p>
            <p style={{ fontSize: '20px' ,  marginTop: '-1px'}}>油压:</p>
          </Box>
          <Box component={"fieldset"} className="p-5 border-stone-300 text-white" sx={{ height: "150px", width: "220px", position: 'relative', zIndex: '2' }}>
            <legend>预测产量(低产模式)</legend>
            <p style={{ fontSize: '20px' ,  marginTop: '-1px'}}>日产量:</p>
            <p style={{ fontSize: '20px' ,  marginTop: '-1px'}}>油压:</p>
          </Box>
          <Box component={"fieldset"} className="p-5 border-stone-300 text-white" sx={{ height: "50px", width: "150px", marginLeft: "-190px", marginTop: "155px", position: 'relative', zIndex: '2' }}>
            <legend>油压</legend>
            <p style={{ fontSize: '20px' ,  marginTop: '-16px', marginLeft: '60px'}}>MPa</p>
          </Box>
          <Box component={"fieldset"} className="p-5 border-stone-300 text-white" sx={{ height: "50px", width: "150px", marginLeft: "-255px", marginTop: "68px", position: 'relative', zIndex: '2' }}>
            <legend>开度</legend>
            <p style={{ fontSize: '20px' ,  marginTop: '-16px', marginLeft: '60px'}}>%</p>
          </Box>
          <Box component={"fieldset"} className="p-5 border-stone-300 text-white" sx={{ height: "50px", width: "150px", marginLeft: "-410px", marginTop: "26px", position: 'relative', zIndex: '2' }}>
            <legend>套压</legend>
            <p style={{ fontSize: '20px' ,  marginTop: '-16px', marginLeft: '60px'}}>MPa</p>
          </Box>
        </div>
      </div>
    </Box>
  </div>
    
    <div className="flex flex-col p-4 gap-2 w-full">
     <Box component={"fieldset"}  className="p-5 border-stone-300 text-white"  sx={{
      height:"400px",
     }}>
      <legend>模型预测</legend>
      <Box sx={{
        height:"350px"
      }}>
      <img  src={ModelPreduction}  alt="fireSpot" style={{ width: "100%", height: "100%"}}/>
      </Box>
      </Box>
      <Box component={"fieldset"} className="p-5 border-stone-300 text-white"  sx={{
      height:"400px",
     }} >
      <legend>产量预测</legend>
      <Box sx={{
        height:"350px"
      }}>
        <PredictProductionLine />
      </Box>
      </Box>    
    </div>
    </Box>
    </>
  );
}

function NativeSelectDemo() {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native" className="text-white text-xl">
          井口选择
        </InputLabel>
        <NativeSelect
          className="text-white text-lg"

          defaultValue={10}
          inputProps={{
            name: 'age',
            id: 'uncontrolled-native',
          }}
        >
          <option value={10} className="text-black">井口1</option>
          <option value={20} className="text-black">井口2</option>
          <option value={30} className="text-black">井口3</option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
}

export default App;

