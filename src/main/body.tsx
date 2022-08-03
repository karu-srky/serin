import React from "react";
import Top from "../contents/top"
import Company from "../contents/company";
import Business from "../contents/business";
import Contact from "../contents/contact";
import Recruit from "../contents/recruit";

const displayBody = (key: string) => {
    switch(key){
        case "top":
            return <Top />
        case "company":
            return <Company />
        case "business":
            return <Business />
        case "contact":
            return <Contact />
        case "recruit":
            return <Recruit />
        default:
            return <Top />
    }
}

const Body = (props: any) => {
    return(
        <>
            <div style={styles.body}>
                {displayBody(props.bodyState)}
            </div>
            
        </>
    )
}

const styles = {
    body: {
        width: "100%",
        backgroundColor: "#EEEEEE"
    }
}

export default Body;