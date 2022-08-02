import { useState } from "react";
import { Drawer } from "@mui/material"

import Humburger from "../parts/hamburger";
import DrawerContents from "../parts/drawerContents";

const Header = () => {

    const [state, setState] = useState(false);

    //引数をopen,closeのstringに変更する
    const toggleDrawer = (toggleState: boolean) => {
        setState(toggleState)
    }

    //データをまとめたjsonファイルを作成する
    const contentsTitle = [
        {    
            "title": "TOP",
            "key": "top"
        },
        {
            "title": "COMPANY",
            "key": "company"
        },
        {
            "title": "BUSINESS",
            "key": "business"
        },
        {
            "title": "CONTACT",
            "key": "contact"
        },
        {
            "title": "RECRUIT",
            "key": "recruit"
        }
    ]

    const listItems = contentsTitle.map((content) =>
        <DrawerContents
            title={content.title}
            key={content.key}
        />
    )

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
                    {listItems}
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