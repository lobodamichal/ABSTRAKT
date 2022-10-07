import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../store/user-slice";
import { uiActions } from "../store/ui-slice";

const useDetails = () => {
    const dispatch = useDispatch()
    let lovedProducts = useSelector((state) => state.user.userData.lovedProducts);

    const updateAccountDetails = async (email, details) => {
        const emailFix = email.replace(".", "");
        await fetch(
          `https://abstrakt-5e25f-default-rtdb.europe-west1.firebasedatabase.app/userData/${emailFix}/accountDetails.json`,
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
    
      const loveProduct = async (email, id) => {
        const emailFix = email.replace(".", "");
        if (lovedProducts.includes(id)) {
          await fetch(
            `https://abstrakt-5e25f-default-rtdb.europe-west1.firebasedatabase.app/userData/${emailFix}/lovedProducts.json`,
            {
              method: "POST",
              body: JSON.stringify([...lovedProducts, id]),
              headers: {
                "Content-Type": "aplication/json",
              },
            }
          )
            .then(dispatch(userActions.loveProduct(id)))
            .catch((e) => console.log(e));
        } else {
          const elementIndex = lovedProducts.indexOf(id);
          await fetch(
            `https://abstrakt-5e25f-default-rtdb.europe-west1.firebasedatabase.app/userData/${emailFix}/lovedProducts.json`,
            {
              method: "POST",
              body: JSON.stringify(lovedProducts.splice(elementIndex, 1)),
              headers: {
                "Content-Type": "aplication/json",
              },
            }
          )
            .then(dispatch(userActions.loveProduct(id)))
            .catch((e) => console.log(e));
        }
      };

      return { updateAccountDetails, loveProduct}
}

export default useDetails