import React from "react";
import Person from "../component/person"

const Recruit = () => {
    const personInfo = [
        {
            name: "sera",
            profile: "24歳の男、ITエンジニア"
        },
        {
            name: "rin",
            profile: "web系目指して勉強中です"
        }
    ]

    const personList = personInfo.map((person: any) => 
        <Person
            name={person.name}
            profile={person.profile}
        />
    )

    return(
        <>
            <h1>Recruit</h1>
            {personList}
        </>
    )
}

export default Recruit;