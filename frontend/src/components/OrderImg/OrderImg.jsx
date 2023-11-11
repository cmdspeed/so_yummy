import orderFood from "../../assets/img/OrderFood.webp";
import orderFoodx2 from "../../assets/img/OrderFood@x2.webp";
import orderFoodPC from "../../assets/img/OrderFoodPC.webp";
import orderFoodPCx2 from "../../assets/img/OrderFoodPC@x2.webp";
import { useState, useEffect } from "react";

export const OrderImg = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <img
        srcSet={
          width >= 1440
            ? `${orderFoodPCx2} 2x, ${orderFoodPC} 1x`
            : `${orderFoodx2} 2x, ${orderFood} 1x`
        }
        src={orderFood}
        alt="girl ordering food on the phone"
      />
    </div>
  );
};
