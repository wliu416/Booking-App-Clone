import {Collapse, Alert, AlertTitle} from "@mui/material";

function simpleAlert (severity, message) {
    return(`<Alert severity=${severity}>${message}</Alert>`);
}

function normalAlert (severity, title, message) {
    return(
        `<Alert severity=${severity}>
            <AlertTitle>${title}</AlertTitle>
            ${message}
            </Alert>
    `);
}

//const [open, setOpen] = React.useState(true);

function closableAlert (message) {
    return `<Collapse in={open}><Alert action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}>
          ${message}
        </Alert>
        </Collapse>>`
}


export { simpleAlert, normalAlert, closableAlert}
