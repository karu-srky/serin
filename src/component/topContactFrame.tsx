import React from "react";
import { Button } from "@mui/material"

const TopFrame = (props: any) => {

    const frameTitle = (
        <div style={styles.frameTitle}>
            <Button 
                onClick={() => props.selectBody(props.flag)}
            >
                {props.title}
            </Button>
        </div>
    )

    const frameVisual =(
        <div style={styles.frameVisual}>
            <img
                style={styles.framePicture}
                src={require("../picture/computer.png")} 
                alt="picture"
            />
        </div>
    )

    return(
        <div style={styles.frameBox}>
            { props.titlePositionIsLeft ? frameTitle : frameVisual }
            <div style={styles.frameSlash}>
                <h1>/</h1>
            </div>
            { props.titlePositionIsLeft ? frameVisual : frameTitle }
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

export default TopFrame;