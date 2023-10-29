import orderFood from "../../assets/img/OrderFood.webp";
import orderFoodx2 from "../../assets/img/OrderFood@x2.webp";

export const OrderImg = () => {
  return (
    <div>
      <img
        srcSet={`${orderFoodx2} 2x, ${orderFood} 1x`}
        src={orderFood}
        alt="girl ordering food on the phone"
      />
    </div>
  );
};
