import React from "react";
import { TextField } from "@mui/material";

import SubmitButton from "../parts/submitButton";

const Message = () => {
    return(
        <div>
            <form action="">
                <div style={styles.name}>
                    <TextField 
                        name="name"
                        label="name"
                        variant="standard"
                        autoComplete="off"
                    />
                </div>
                <div style={styles.message}>
                    <TextField 
                        name="message"
                        label="message"
                        variant="outlined"
                        autoComplete="off"
                    />
                </div>
                <SubmitButton 
                    content={"送信"}
                    onClick={() => alert("送信しました")}
                />
            </form>
        </div>
    )
}

const styles = {
    name: {
        margin: "10px",
        padding: "10px"
    },
    message: {
        margin: "10px",
        padding: "10px"
    }
}

export default Message;