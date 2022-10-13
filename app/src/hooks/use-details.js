import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cart-slice";
import { uiActions } from "../store/ui-slice";
import { userActions } from "../store/user-slice";

const useDetails = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.userData);
  const cart = useSelector((state) => state.cart);

  const updateAccountDetails = async (details) => {
    await fetch(
      `https://abstrakt-5e25f-default-rtdb.europe-west1.firebasedatabase.app/userData/${userData.localId}/accountDetails.json`,
      {
        method: "PUT",
        body: JSON.stringify(details),
        headers: {
          "Content-Type": "aplication/json",
        },
      }
    )
      .then(dispatch(userActions.setAccountDetails(details)))
      .catch((e) => console.log(e));
    //ERROR HANDLER
  };

  const updateLovedProducts = async (id) => {
    let newLovedArray;

    if (!userData.lovedProducts) {
      newLovedArray = [id];
      dispatch(userActions.setLovedProducts(newLovedArray));
    } else if (userData.lovedProducts && !userData.lovedProducts.includes(id)) {
      newLovedArray = [...userData.lovedProducts, id];
      dispatch(userActions.setLovedProducts(newLovedArray));
    } else {
      const elementIndex = userData.lovedProducts.indexOf(id);
      newLovedArray = userData.lovedProducts.filter(
        (_, index) => index !== elementIndex
      );
      dispatch(userActions.setLovedProducts(newLovedArray));
    }

    await fetch(
      `https://abstrakt-5e25f-default-rtdb.europe-west1.firebasedatabase.app/userData/${userData.localId}/lovedProducts.json`,
      {
        method: "PUT",
        body: JSON.stringify({ ...newLovedArray }),
        headers: {
          "Content-Type": "aplication/json",
        },
      }
    ).catch((e) => console.log(e));
  };

  const placeOrder = async () => {
    if (Object.values(userData.accountDetails).includes("")) {
      dispatch(uiActions.setShowModal());
      dispatch(uiActions.setModalContent("details"));
    } else {
      let requestBody;
      const today = new Date();
      const order = {
        products: cart,
        date: {
          day: today.getDate(),
          month: today.getMonth() + 1,
          year: today.getFullYear(),
        },
        details: userData.accountDetails,
      };
      if (userData.orders) {
        requestBody = [...userData.orders, order];
      } else {
        requestBody = [order];
      }
      dispatch(userActions.setOrders(requestBody));
      await fetch(
        `https://abstrakt-5e25f-default-rtdb.europe-west1.firebasedatabase.app/userData/${userData.localId}/orders.json`,
        {
          method: "PUT",
          body: JSON.stringify(requestBody),
          headers: {
            "Content-Type": "aplication/json",
          },
        }
      )
        .then(dispatch(cartActions.clearCart()))
        .catch((e) => console.log(e));
    }
  };

  return { updateAccountDetails, updateLovedProducts, placeOrder };
};

export default useDetails;
