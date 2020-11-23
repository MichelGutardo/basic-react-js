import React from "react";

function TechItem({tech,onDelete}){
    return (
    <li key={tech}> {tech} 
    <button type='button' onClick={onDelete} > Deletar</button>
    </li>
    )
_}


export default TechItem;