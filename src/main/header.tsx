import { useState } from "react";
import { Drawer } from "@mui/material"

import Humburger from "../parts/hamburger";
import DrawerContents from "../parts/drawerContents";

const Header = () => {

    const [state, setState] = useState(false);

    const toggleDrawer = (toggleState: boolean) => {
        setState(toggleState)
    }

    const contentsTitle = {
        
    }

    return(
        <>
            <div style={styles.header}>
                <div style={styles.headerTitle}>SeRin</div>
                <Humburger onClick={() => toggleDrawer(true)}/>
                <Drawer
                    anchor={'right'}
                    open={state}
                    onClose={() => toggleDrawer(false)}
                >
                    <DrawerContents />
                </Drawer>
            </div>
        </>
    )
}

const styles = {
    header: {
        width: "100%",
        backgroundColor: "#EEEEEE"
    },
    headerTitle: {
        fontSize: "40px"
    }
}

export default Header;