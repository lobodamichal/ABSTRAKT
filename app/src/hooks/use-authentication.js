import { userActions } from "../store/user-slice";
import { uiActions } from "../store/ui-slice";
import { useDispatch } from "react-redux";

const useAuthentication = () => {
  const dispatch = useDispatch();
  const signUpEndpoint =
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";
  const signInEndpoint =
    "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=";
  const API_KEY = "AIzaSyBWP0rlvv8PWj_35BaIkR1vJPnKMRZwydU";

  const authentication = async (register, email, password) => {
    await fetch(
      register ? signUpEndpoint + API_KEY : signInEndpoint + API_KEY,
      {
        method: "POST",
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "aplication/json",
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
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
        } else {
          dispatch(uiActions.setError(""));
          if (register) {
            authentication(false, email, password);
          } else {
            dispatch(userActions.setIsLogged(true));
          }

          dispatch(uiActions.setModalContent("menu"));

          return response.json().then((data) => {
            dispatch(userActions.setIdToken(data.idToken));
          });
        }
      })
      .catch((e) => console.log(e));
  };
  return authentication;
};

export default useAuthentication;
