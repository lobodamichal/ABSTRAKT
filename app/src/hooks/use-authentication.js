import { uiActions } from "../store/ui-slice";
import { useDispatch } from "react-redux";
import useUser from "./use-user";

const useAuthentication = () => {
  const dispatch = useDispatch();
  const { getUserData, setUserData } = useUser();

  const signUpEndpoint =
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";
  const signInEndpoint =
    "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=";
  const API_KEY = "AIzaSyBWP0rlvv8PWj_35BaIkR1vJPnKMRZwydU";

  const errorHandler = (response) => {
    return response.json().then((data) => {
      switch (data.error.message.split(" ")[0]) {
        case "EMAIL_EXISTS":
          dispatch(uiActions.setError("This Email is already taken."));
          break;
        case "OPERATION_NOT_ALLOWED" ||
          "TOO_MANY_ATTEMPTS_TRY_LATER" ||
          "USER_DISABLED":
          dispatch(uiActions.setError("Something went wrong..."));
          break;
        case "EMAIL_NOT_FOUND":
          dispatch(uiActions.setError("This account doesn't exist."));
          break;
        case "INVALID_PASSWORD":
          dispatch(uiActions.setError("Password is invalid."));
          break;
      }
    });
  };

  const logIn = async (email, password) => {
    await fetch(signInEndpoint + API_KEY, {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "aplication/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          errorHandler(response);
        } else {
          response.json().then((data) => {
            getUserData(data.localId);
          });
          dispatch(uiActions.setIsLogged(true));
          dispatch(uiActions.setModalContent("menu"));
        }
      })
      .catch((e) => console.log(e));
  };

  const signUp = async (email, password) => {
    await fetch(signUpEndpoint + API_KEY, {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "aplication/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          errorHandler(response);
        } else {
          response.json().then((data) => {
            setUserData(data);
            logIn(email, password);
          });
        }
      })
      .then(dispatch(uiActions.setModalContent("details")))
      .catch((e) => console.log(e));
  };

  return { signUp, logIn };
};

export default useAuthentication;
