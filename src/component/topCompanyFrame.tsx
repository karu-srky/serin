import React from "react";
import { Button } from "@mui/material"

const TopCompanyFrame = (props: any) => {

    return(
        <div style={styles.frameBox}>
            <div style={styles.frameTitle}>
                <div>
                    
                </div>
                <Button 
                    onClick={() => props.selectBody(props.flag)}
                >
                    Read More...
                </Button>
            </div>
            <div style={styles.frameSlash}>
                <h1>/</h1>
            </div>
            <div style={styles.frameVisual}>
                <img
                    style={styles.framePicture}
                    src={require("../picture/computer.png")} 
                    alt="picture"
                />
            </div>
        </div>
    )
}

const styles = {
    frameBox: {
        width: "100%",
        display: "flex"
    },
    frameTitle: {
        width: "45%",
    },
    frameSlash: {
        width: "10%",
    },
    frameVisual: {
        width: "45%",
    },
    framePicture: {
        width: "300px",
    }
}

export default TopCompanyFrame;