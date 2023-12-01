const User = (props) => {
    return <div className="User-div-className">User-div-下的纯文本子节点{props.children}</div>
}

const createElement = () => {
    return <User key={1}><ul><li>react</li></ul></User>
}


// const createElement = () => {
//     return <div key={1}><ul><li>react</li></ul></div>
// }

export default createElement