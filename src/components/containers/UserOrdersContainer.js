import ButtonReturn from "../ui/buttons/ButtonReturn";
import { useSelector } from "react-redux";

const UserOrdersContainer = () => {
  const orders = useSelector((state) => state.user.userData.orders);
  let id = 0;

  const orderList = orders.map((order) => {
    const total = order.products.reduce(
      (prevVal, nextVal) => prevVal + nextVal.variant.price * nextVal.quantity,
      0
    );

    const products = order.products.map((product) => {
      return (
        <>
          <p>{product.name}</p>
          <p>x{product.quantity}</p>
          <p>{product.variant.price}</p>
        </>
      );
    });

    return (
      <div key={id++}>
        <h3>
          {order.date.day}/{order.date.month}/{order.date.year}
        </h3>
        <div>{products}</div>
        <p>Total:</p>
        <h3>${total}</h3>
      </div>
    );
  });

  return (
    <>
      <h1>Your orders:</h1>
      <div>{orderList}</div>
      <ButtonReturn path="menu" />
    </>
  );
};

export default UserOrdersContainer;
