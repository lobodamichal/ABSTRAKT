import { useDispatch, useSelector } from "react-redux";
import useFetchUser from "../../hooks/use-fetch-user";
import { uiActions } from "../../store/ui-slice";
import { useState } from "react";
import useValidation from "../../hooks/use-validation";
import Input from "../elements/Input";

const UserDetailsContainer = () => {
  const dispatch = useDispatch();
  const { updateAccountDetails } = useFetchUser();
  const { detailsValidation } = useValidation();

  const userData = useSelector((state) => state.user.userData);
  const [formData, setFormData] = useState(false);

  const returnHandler = () => {
    dispatch(uiActions.setModalContent("menu"));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    updateAccountDetails(userData.email, formData);
  };

  const formValidation = () => {
    console.log(Object.keys(formData).length);
    if (
      Object.keys(formData).length === 6 &&
      !Object.values(formData).includes("")
    ) {
      return true;
    } else return false;
  };

  const getInputValue = (e) => {
    let { id: key, value } = e;
    key = key.replace(" ", "").toLowerCase();
    setFormData({ ...formData, [key]: value });
  };

  return (
    <>
      <h2>Account details</h2>
      <form onSubmit={submitHandler}>
        <Input
          name="Name"
          type="text"
          inputValidation={detailsValidation}
          getValue={getInputValue}
          formValidation={formValidation}
          value={userData.accountDetails.name}
        />
        <Input
          name="Phone number"
          type="number"
          inputValidation={detailsValidation}
          getValue={getInputValue}
          formValidation={formValidation}
          value={userData.accountDetails.phonenumber}
        />
        <Input
          name="Street"
          type="text"
          inputValidation={detailsValidation}
          getValue={getInputValue}
          formValidation={formValidation}
          value={userData.accountDetails.street}
        />
        <Input
          name="Postcode"
          type="text"
          inputValidation={detailsValidation}
          getValue={getInputValue}
          formValidation={formValidation}
          value={userData.accountDetails.postcode}
        />
        <Input
          name="City"
          type="text"
          inputValidation={detailsValidation}
          getValue={getInputValue}
          formValidation={formValidation}
          value={userData.accountDetails.city}
        />
        <Input
          name="Country"
          type="text"
          inputValidation={detailsValidation}
          getValue={getInputValue}
          formValidation={formValidation}
          value={userData.accountDetails.country}
        />
        <button disabled={!formValidation()}>update details</button>
      </form>
      <p onClick={returnHandler}>return</p>
    </>
  );
};

export default UserDetailsContainer;
