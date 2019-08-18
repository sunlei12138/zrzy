import React from 'react'

function Head(props) {
        return <header>
            {props.isBack && <span>&lt;</span>}
            <span>{props.title}</span>
        </header>
    }
Head.defaultProps={
    title:'分类',
    isBack:false
}


export default Head
