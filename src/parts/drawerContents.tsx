import React from "react";
import { ListItemButton, ListItemText } from "@mui/material"

const DrawerContents = (props: any) => {
    
    const clickListItem = () => {
        props.selectBody(props.flag)
        props.drawerClose()
    }

    return(
        <>
            <div style={styles.listItem}>
                <ListItemButton
                    component="a" 
                    onClick={clickListItem}
                >
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