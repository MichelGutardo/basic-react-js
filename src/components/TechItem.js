import React from "react";
import PropTypes from 'prop-types';

function TechItem({tech,onDelete}){
    return (
    <li key={tech}> {tech} 
    <button type='button' onClick={onDelete} > Deletar</button>
    </li>
    )
_}


TechItem.propTypes = {
    tech: PropTypes.string,
    onDelete: PropTypes.func.isRequired,
}

TechItem.defaultProps = {
    tech: "ReactJS" ,
}


export default TechItem;