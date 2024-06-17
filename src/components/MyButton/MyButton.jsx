import React from "react";

function MyButton(props) {
    return <>
        <button className={"my-button " + props?.class} type={props?.type}>
            {props?.text}
        </button>
    </>
}

export default MyButton;