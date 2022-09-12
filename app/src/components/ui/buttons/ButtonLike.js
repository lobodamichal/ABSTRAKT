const ButtonImage = (props) => {
    return <button onClick={props.onClickHandler}>{props.children}</button>
}

export default ButtonImage