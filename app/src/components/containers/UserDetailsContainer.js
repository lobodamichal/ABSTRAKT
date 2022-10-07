import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useValidation from "../../hooks/use-validation";
import useDetails from "../../hooks/use-details";
import { uiActions } from "../../store/ui-slice";
import { userActions } from "../../store/user-slice";
import Input from "../elements/Input";

const UserDetailsContainer = () => {
  const dispatch = useDispatch();
  const { updateAccountDetails } = useDetails();
  const { detailsFormValidation, detailValidation } = useValidation();

  const userData = useSelector((state) => state.user.userData);
  let formData = userData.accountDetails;

  const [formIsValid, setFormIsValid] = useState(
    detailsFormValidation(Object.keys(formData), Object.values(formData))
  );

  const formValidation = () => {
    setFormIsValid(
      detailsFormValidation(Object.keys(formData), Object.values(formData))
    );
  };

  const returnHandler = () => {
    dispatch(uiActions.setModalContent("menu"));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    updateAccountDetails(userData.email, formData);
    dispatch(userActions.setAccountDetails(formData));
  };

  const getInputValue = (e) => {
    let { id: key, value } = e;
    formData = { ...formData, [key.toLowerCase().replace(" ", "")]: value };
  };

  return (
    <section>
      <h2>Account details</h2>
      <form onSubmit={submitHandler}>
        <Input
          name="Name"
          type="text"
          inputValidation={detailValidation}
          getValue={getInputValue}
          formValidation={formValidation}
          initialValue={formData.name}
        />
        <Input
          name="Phone number"
          type="text"
          inputValidation={detailValidation}
          getValue={getInputValue}
          formValidation={formValidation}
          initialValue={formData.phonenumber}
        />
        <Input
          name="Street"
          type="text"
          inputValidation={detailValidation}
          getValue={getInputValue}
          formValidation={formValidation}
          initialValue={formData.street}
        />
        <Input
          name="Postcode"
          type="text"
          inputValidation={detailValidation}
          getValue={getInputValue}
          formValidation={formValidation}
          initialValue={formData.postcode}
        />
        <Input
          name="City"
          type="text"
          inputValidation={detailValidation}
          getValue={getInputValue}
          formValidation={formValidation}
          initialValue={formData.city}
        />
        <Input
          name="Country"
          type="text"
          inputValidation={detailValidation}
          getValue={getInputValue}
          formValidation={formValidation}
          initialValue={formData.country}
        />
        <button disabled={!formIsValid}>update details</button>
      </form>
      <p onClick={returnHandler}>return</p>
    </section>
  );
};

export default UserDetailsContainer;
