const ButtonOption = (props) => {
    const styles = "txt--description txt--description--small button button--option " + props.styles;
    return <button onClick={props.onClickHandler} className={styles}>{props.children}</button>
}

export default ButtonOption