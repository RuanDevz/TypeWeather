import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";

export default function SimpleBackdrop({ children }: React.PropsWithChildren) {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setOpen(true);
  }, []);

  return (
    <div>
      <Backdrop
        className="flex flex-col"
        sx={{ color: "#8FB2F5", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
        <p className="mt-2 font-primary font-bold text-[#8FB2F5]">
          Buscando {children}...
        </p>
      </Backdrop>
    </div>
  );
}
