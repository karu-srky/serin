import React from "react";
import { IconButton } from "@mui/material";
import { DensityMediumRounded } from "@mui/icons-material"

const Humburger = (props: any) => {
    return(
        <>
            <IconButton onClick={() => props.onClick(false)}>
                <DensityMediumRounded />
            </IconButton>
        </>
    )
}

export default Humburger;