import React from "react";

const Person = (props: any) => {
    //プロフィール画像を追加
    return(
        <>
            <h3>{props.name}</h3>
            <h5>{props.profile}</h5>
        </>
    )
}

export default Person;