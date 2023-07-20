import { useNavigate, useRouteError } from "react-router-dom";

import {
  Alert,
  AlertTitle,
  Button,
  CssBaseline,
  StyledEngineProvider,
} from "@mui/material";

function Context() {
  let error: {
    data: string;
    statusText?: string;
    message?: string;
  } = useRouteError() as any;

  const navigate = useNavigate();
  const backHome = () => {
    navigate(-1);
  };

  console.log(error);

  return (
    <div className={"container bg-gray-100 h-screen "}>
      <div
        className={
          "md:grid md:h-screen md:place-items-center grid place-items-center md:pt-0  pt-8  px-2"
        }>
        <div className="w-11/12 md:max-w-xl  pb-8 rounded-2xl shadow-2xl bg-white">
          <Alert severity="error">
            <AlertTitle className=" text-2xl"> {"Oops"} !</AlertTitle>
            {"sorry-an-unexpected-error-has-occurred"}
          </Alert>
          <div className="p-8">
            {error.data || error.statusText
              ? error.statusText
              : "" || error.message}
          </div>

          <div className="text-right px-8">
            <Button variant="contained" onClick={backHome}>
              {"back-home"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ErrorPage() {
  return (
    <StyledEngineProvider injectFirst>
      <CssBaseline />
      <Context />
    </StyledEngineProvider>
  );
}
