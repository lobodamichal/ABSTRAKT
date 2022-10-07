import { useDispatch } from "react-redux"
import { uiActions } from '../../store/ui-slice'

const UserMenuContainer = () => {
    const dispatch = useDispatch()

    const lovedHandler = () => {
        console.log('redirect')
    }

    const ordersHandler = () => {
        dispatch(uiActions.setModalContent('orders'))
    }
    
    const detailsHandler = () => {
        dispatch(uiActions.setModalContent('details'))
    }

    return (
        <>
            <h1>Welcome!</h1>
            <button onClick={lovedHandler}>loved products</button>
            <button onClick={ordersHandler}>your orders</button>
            <button onClick={detailsHandler}>account details</button>
            <p>return</p>
        </>
    )
}

export default UserMenuContainer