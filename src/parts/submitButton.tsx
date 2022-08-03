import React from "react";
import { Button } from "@mui/material";

const SubmitButton = (props: any) => {
    return(
        <>
            <Button
                variant="contained"
                onClick={props.onClick}
            >
                {props.content}
            </Button>
        </>
    )
}

export default SubmitButton;