import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useValidation from "../../hooks/use-validation";
import useDetails from "../../hooks/use-details";
import { userActions } from "../../store/user-slice";
import Input from "../elements/Input";
import ButtonReturn from "../ui/buttons/ButtonReturn";

const UserDetailsContainer = () => {
  const buttonRef = useRef();
  const dispatch = useDispatch();
  const { updateAccountDetails } = useDetails();
  const { detailsFormValidation, detailValidation } = useValidation();

  const userData = useSelector((state) => state.user.userData);
  let formData = userData.accountDetails;

  const formValidation = () => {
    buttonRef.current.disabled = !detailsFormValidation(
      Object.keys(formData),
      Object.values(formData)
    );
  };

  useEffect(() => {
    formValidation();
  }, []);

  const submitHandler = (event) => {
    event.preventDefault();
    updateAccountDetails(formData);
    dispatch(userActions.setAccountDetails(formData));
  };

  const getInputValue = (value, name) => {
    formData = { ...formData, [name.toLowerCase().replace(" ", "")]: value };
  };

  return (
    <div className="modal__content">
      <h2 className="txt txt--header txt--header--big">Account details</h2>
      <form className="modal__content__form" onSubmit={submitHandler}>
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
        <button className="button button--main txt txt--description txt--description--normal modal__content__form__submit" ref={buttonRef}>
          update details
        </button>
      </form>
      <ButtonReturn path="menu" />
    </div>
  );
};

export default UserDetailsContainer;
