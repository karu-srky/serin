import { useState } from "react";
import { ListItemButton, ListItemText } from "@mui/material"

const DrawerContents = (props: any) => {
    return(
        <>
            <div style={styles.listItem}>
                <ListItemButton component="a" onClick={() => props.selectBody(props.flag)}>
                    <ListItemText primary={props.title} />
                </ListItemButton>
            </div>
        </>
    )
}

const styles = {
    listItem: {
        marginTop: "10px",
        backgroundColor: "#fff"
    }
}

export default DrawerContents;