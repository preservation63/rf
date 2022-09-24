import React from "react";

const Scroll = (props) => {
    return (
        <div style={{ 
        overflowY: "scroll",
        border: "1px solid black",
        height: "500px",
        }}> 
        {props.children}
        </div> //Тут можно использовать для CSS двойные {{}}
               //Или можно добавить сам className для отдельного
               //Файла CSS
    );
};

export default Scroll;