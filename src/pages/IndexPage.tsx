import { Box, Button } from "@mui/material";
import { Suspense, lazy, useState } from "react";
import TCADChart from "../components/TCADChart";

const AddOilWellDialog = lazy(() => import("../components/AddOilWellDialog"));

const FlowPressureCalcDialog = lazy(
  () => import("../components/FlowPressureCalcDialog")
);
const FlowPressureLineChart = lazy(
  () => import("../components/FlowPressureLineChart")
);
const LoadProductionDataDialog = lazy(
  () => import("../components/LoadProductionDataDialog")
);
const PVTSettingDialog = lazy(() => import("../components/PVTSettingDialog"));
const ProductionLineChart = lazy(
  () => import("../components/ProductionLineChart")
);

const SelectDataDialog = lazy(() => import("../components/SelectDataDialog"));

export default function Index() {
  const [addOilWellDialogOpen, setAddOilWellDialogOpen] = useState(false);
  const [pvtSettingDialogOpen, setPVTSettingDialogOpen] = useState(false);
  const [loadProductionDataDialogOpen, setLoadProductionDataDialogOpen] =
    useState(false);

  const [flowPressureCalcDialogOpen, setFlowPressureCalcDialogOpen] =
    useState(false);

  const [productionLineChartOpen, setProductionLineChartOpen] = useState(false);
  const [flowPressureLineChartOpen, setFlowPressureLineChartOpen] =
    useState(false);

  const [selectDataDialogOpen, setSelectDataDialogOpen] = useState(false);

  const [tCADChartOpen, setTCADChartOpen] = useState(false);
  const handleDone = (
    preSetStateActionFn: React.Dispatch<React.SetStateAction<boolean>>,
    nextSetStateActionFn: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    preSetStateActionFn(false);
    nextSetStateActionFn(true);
  };

  return (
    <>
      <div className="p-2">
        <div>
          <Suspense>
            {addOilWellDialogOpen && (
              <AddOilWellDialog
                open={addOilWellDialogOpen}
                onClose={() => {
                  setAddOilWellDialogOpen(false);
                }}
                onDone={() => {
                  handleDone(setAddOilWellDialogOpen, setPVTSettingDialogOpen);
                }}></AddOilWellDialog>
            )}
          </Suspense>

          <Suspense>
            {pvtSettingDialogOpen && (
              <PVTSettingDialog
                open={pvtSettingDialogOpen}
                onClose={() => {
                  setPVTSettingDialogOpen(false);
                }}
                onDone={() => {
                  handleDone(
                    setPVTSettingDialogOpen,
                    setLoadProductionDataDialogOpen
                  );
                }}></PVTSettingDialog>
            )}
          </Suspense>
          <Suspense>
            {loadProductionDataDialogOpen && (
              <LoadProductionDataDialog
                open={loadProductionDataDialogOpen}
                onClose={() => {
                  setLoadProductionDataDialogOpen(false);
                }}
                onDone={() => {
                  handleDone(
                    setLoadProductionDataDialogOpen,
                    setFlowPressureCalcDialogOpen
                  );
                  setProductionLineChartOpen(true);
                }}></LoadProductionDataDialog>
            )}
          </Suspense>
          <Suspense>
            {flowPressureCalcDialogOpen && (
              <FlowPressureCalcDialog
                open={flowPressureCalcDialogOpen}
                onClose={() => {
                  setFlowPressureCalcDialogOpen(false);
                }}
                onDone={() => {
                  handleDone(
                    setFlowPressureCalcDialogOpen,
                    setSelectDataDialogOpen
                  );
                }}
                onCalcFlowPressure={() => {
                  setFlowPressureLineChartOpen(true);
                }}></FlowPressureCalcDialog>
            )}
          </Suspense>
          <Suspense>
            {selectDataDialogOpen && (
              <SelectDataDialog
                open={selectDataDialogOpen}
                onClose={() => {
                  setSelectDataDialogOpen(false);
                }}
                onCalc={() => {
                  setTCADChartOpen(true);
                }}
                onDone={() => {
                  handleDone(setSelectDataDialogOpen, setAddOilWellDialogOpen);
                }}></SelectDataDialog>
            )}
          </Suspense>
        </div>
        <div>
          <Button
            variant="contained"
            onClick={() => {
              setAddOilWellDialogOpen(true);
            }}>
            单井分析
          </Button>
        </div>

        {productionLineChartOpen && (
          <Box sx={{ height: "186px", width: "100%" }}>
            <Suspense>
              <ProductionLineChart></ProductionLineChart>
            </Suspense>
          </Box>
        )}

        {flowPressureLineChartOpen && (
          <Box sx={{ height: "186px", width: "100%" }}>
            <Suspense>
              <FlowPressureLineChart></FlowPressureLineChart>
            </Suspense>
          </Box>
        )}

        {tCADChartOpen && (
          <Box sx={{ height: "400px", width: "100%" }}>
            <Suspense>
              <TCADChart></TCADChart>
            </Suspense>
          </Box>
        )}
      </div>
    </>
  );
}
