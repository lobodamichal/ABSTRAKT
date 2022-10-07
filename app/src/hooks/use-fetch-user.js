import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../store/user-slice";
import { uiActions } from "../store/ui-slice";

const useFetchUser = () => {
  const dispatch = useDispatch();

  const getUserData = async (email) => {
    const emailFix = email.replace(".", "");
    await fetch(
      `https://abstrakt-5e25f-default-rtdb.europe-west1.firebasedatabase.app/userData/${emailFix}.json`
    )
      .then((response) => {
        if (!response.ok) {
          dispatch(uiActions.setError("Something went wrong..."));
        } else {
          response.json().then((data) => {
            dispatch(userActions.setUserState(data));
            dispatch(uiActions.setError(""));
          });
        }
      })
      .catch((e) => console.log(e));
    //ERROR HANDLER
  };

  const setUserData = async (responseData) => {
    const userData = {
      email: responseData.email,
      lovedProducts: ['0'],
      accountDetails: {
        name: "",
        phonenumber: "",
        street: "",
        postcode: "",
        city: "",
        country: ""
      },
      idToken: responseData.idToken,
    };

    const emailFix = responseData.email.replace(".", "");

    await fetch(
      `https://abstrakt-5e25f-default-rtdb.europe-west1.firebasedatabase.app/userData/${emailFix}.json`,
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
          dispatch(uiActions.setError(""));
        }
      })
      .catch((e) => console.log(e));


    //ERROR HANDLER
  };

  

  return { getUserData, setUserData };
};

export default useFetchUser;
