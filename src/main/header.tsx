import { useState } from "react";
import { Drawer, ListItemButton, ListItemText, Avatar } from "@mui/material"

import Humburger from "../parts/hamburger";
import DrawerContents from "../parts/drawerContents";

const Header = (props: any) => {

    const [drawerState, setDrawerState] = useState(false)

    //ToDo 引数をopen,closeのstringに変更する
    //Drawerのstate管理
    const toggleDrawer = (toggleState: boolean) => {
        setDrawerState(toggleState)
    }

    const listItems = props.contentsTitle.map((content:any) =>
        <DrawerContents
            title={content.title}
            flag={content.flag}
            selectBody={props.selectBody}
            drawerClose={() => toggleDrawer(false)}
        />
    )

    return(
        <>
            <div style={styles.header}>
                <button style={styles.logoButton} onClick={() => props.selectBody("top")}>
                    <img
                        style={styles.logo}
                        src={require("../picture/SeRin_logo.png")} 
                        alt="picture"
                    />
                </button>
                <div style={styles.headerTitle}>SeRin</div>
                <Humburger onClick={() => toggleDrawer(true)}/>
                <Drawer
                    anchor={'right'}
                    open={drawerState}
                    onClose={() => toggleDrawer(false)}
                >
                    {listItems}
                    <div style={styles.listItem}>
                        <ListItemButton component="a" onClick={() => window.open("https://github.com/karu-srky/serin")}>
                            <ListItemText primary="GIT" />
                        </ListItemButton>
                    </div>
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
    },
    listItem: {
        marginTop: "10px",
        backgroundColor: "#fff"
    },
    logoButton: {
        border: "none"
    },
    logo: {
        height: "100px"
    }
}

export default Header;