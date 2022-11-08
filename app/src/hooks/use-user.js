import { useDispatch } from "react-redux";
import { userActions } from "../store/user-slice";
import { uiActions } from "../store/ui-slice";

const useUser = () => {
  const dispatch = useDispatch();

  const getUserData = async (localId) => {
    await fetch(
      `https://abstrakt-5e25f-default-rtdb.europe-west1.firebasedatabase.app/userData/${localId}.json`
    )
      .then((response) => {
        if (!response.ok) {
          dispatch(uiActions.setError("Something went wrong..."));
        } else {
          response.json().then((data) => {
            dispatch(userActions.setUserState(data));
          });
        }
      })
      .catch((e) => console.log(e));
    //ERROR HANDLER
  };

  const setUserData = async (responseData) => {
    const userData = {
      email: responseData.email,
      lovedProducts: null,
      accountDetails: {
        name: "",
        phonenumber: "",
        street: "",
        postcode: "",
        city: "",
        country: ""
      },
      localId: responseData.localId,
      orders: null
    };

    await fetch(
      `https://abstrakt-5e25f-default-rtdb.europe-west1.firebasedatabase.app/userData/${responseData.localId}.json`,
      {
        method: "PUT",
        body: JSON.stringify(userData),
        headers: {
          "Content-Type": "aplication/json",
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          dispatch(uiActions.setError("Something went wrong..."))
        } else {
        }
      })
      .catch((e) => console.log(e));

    //ERROR HANDLER
  };

  

  return { getUserData, setUserData };
};

export default useUser;
