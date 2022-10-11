import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../store/user-slice";

const useDetails = () => {
  const dispatch = useDispatch();
  const lovedProducts = useSelector(
    (state) => state.user.userData.lovedProducts
  );
  const localId = useSelector((state) => state.user.userData.localId);

  const updateAccountDetails = async (details) => {
    await fetch(
      `https://abstrakt-5e25f-default-rtdb.europe-west1.firebasedatabase.app/userData/${localId}/accountDetails.json`,
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

    if (!lovedProducts) {
      newLovedArray = [id];
      dispatch(userActions.setLovedProducts(newLovedArray));
    } else if (lovedProducts && !lovedProducts.includes(id)) {
      newLovedArray = [...lovedProducts, id];
      dispatch(userActions.setLovedProducts(newLovedArray));
    } else {
      const elementIndex = lovedProducts.indexOf(id);
      newLovedArray = lovedProducts.filter(
        (_, index) => index !== elementIndex
      );
      dispatch(userActions.setLovedProducts(newLovedArray));
    }

    await fetch(
      `https://abstrakt-5e25f-default-rtdb.europe-west1.firebasedatabase.app/userData/${localId}/lovedProducts.json`,
      {
        method: "PUT",
        body: JSON.stringify({ ...newLovedArray }),
        headers: {
          "Content-Type": "aplication/json",
        },
      }
    ).catch((e) => console.log(e));
  };

  return { updateAccountDetails, updateLovedProducts };
};

export default useDetails;
