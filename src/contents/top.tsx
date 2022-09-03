import React from "react";

import TopCompanyFrame from "../component/topCompanyFrame";

const Top = (props: any) => {
    return(
        <>
            <h1>Top</h1>
            <TopCompanyFrame 
                selectBody={props.selectBody}
                flag="company"
            />
        </>
    )
}

export default Top;