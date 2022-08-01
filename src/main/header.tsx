import React from "react";
import Humburger from "../parts/hamburger";

const Header = () => {
    return(
        <>
            <div style={styles.header}>
                <div style={styles.headerTitle}>SeRin</div>
                <Humburger />
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