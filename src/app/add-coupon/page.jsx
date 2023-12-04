// "use client";
// import Button from "@/common/Button";
// import Input from "@/common/Input";
// import axios from "axios";
// import React, { useState } from "react";

// export default function AddCoupon() {
//   const [couponData, setCouponData] = useState({
//     couponCode: "",
//     discountCoupon: "",
//   });

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setCouponData({ ...couponData, [name]: value });
//   };

//   const handleSubmitAdd = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await axios.post(
//         `${process.env.NEXT_PUBLIC_API_URL}/api/adminCoupon/add`,
//         {
//           couponCode: couponData.couponCode,
//           discountCoupon: parseInt(couponData.discountCoupon),
//         }
//       );

//       if (response.status === 201) {
//         //Notificar al administrador que el cupÃ³n se ha agregado correctamente
//         alert("Cupon agregado exitosamente");

//         //limpiar los campos una vez creado el cupon
//         setCouponData({ couponCode: "", discountCoupon: "" });
//       } else {
//         console.error("Error al agregar el cupon");
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center mt-4">
//       <form className="w-[65%]" onSubmit={handleSubmitAdd}>
//         <Input
//           name="couponCode"
//           type="code"
//           placeholder="escriba su codigo"
//           className="w-full"
//           classNameLabel="text-[20px]"
//           label="Codigo"
//           value={couponData.couponCode}
//           onChange={handleInputChange}
//         />
//         <Input
//           name="discountCoupon"
//           type="number"
//           placeholder="escriba el descuento"
//           className="w-full"
//           classNameLabel="text-[20px]"
//           label="Descuento"
//           value={parseInt(couponData.discountCoupon)}
//           onChange={handleInputChange}
//         />
//         <Button
//           type="submit"
//           className="w-[25%] rounded bg-darkGreen mt-4 flex justify-center"
//         >
//           Confirmar
//         </Button>
//       </form>
//     </div>
//   );
// }

"use client";
import Button from "@/common/Button";
import Input from "@/common/Input";
import React, { useState } from "react";
import axios from "axios";
import useInput from "@/hooks/useInput";
import { useRouter } from "next/navigation";

export default function AddCoupon() {
  const router = useRouter();
  const [messageAlert, setmessageAlert] = useState("");
  const [messageAlertOk, setmessageAlertOk] = useState("");
  const {
    OnChange: OnChangeCouponName,
    value: valueCouponName,
    blur: BlurCouponName,
    focus: FocusCouponName,
    message: MessageCouponName,
  } = useInput("couponName");
  const {
    OnChange: OnChangeDiscount,
    value: valueDiscount,
    blur: BlurDiscount,
    focus: FocusDiscount,
    message: MessageDiscount,
  } = useInput("discount");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    //Verificacion campos de los input
    if (valueCouponName.trim() == "" || valueDiscount.trim() == "") {
      setmessageAlert("¡Completar todos los campos!");
      setTimeout(() => {
        setmessageAlert("");
      }, 1300);
    } else {
      //Verificacion campos de los mensajes de error
      if (MessageCouponName || MessageDiscount) {
        setmessageAlert("¡Verificar campos!");
        setTimeout(() => {
          setmessageAlert("");
        }, 1300);
      } else {
        //Ruta para agregar un coupon
        try {
          await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/api/adminCoupon/add`,
            {
              couponCode: valueCouponName,
              discountCoupon: valueDiscount,
            }
          );
          setmessageAlert("");
          setmessageAlertOk("¡Cupon Creado!");
          setTimeout(() => {
            router.push("/active-coupons");
          }, 1300);
        } catch (error) {
          console.error(error);
          const { data } = error.response;
          console.log(data);
        }
      }
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-full py-[105px] ">
      <h2 className="font-mystery-mixed text-[49px] mb-[10px] sm:text-[71px] sm:mb-[20px] leading-3">
        Agregar Cupón
      </h2>
      <form
        onSubmit={onSubmitForm}
        className="mt-[50px] 
            w-[80%]
            max-w-[300px] 
            sm:max-w-[750px]
            md:flex md:flex-col md:items-center"
      >
        <div
          className="flex flex-col sm:justify-center 
        sm:items-center sm:flex-row  w-full sm:gap-x-3  
        "
        >
          <div className="basis-[32%] mb-[0.1rem]">
            <Input
              className={"flex-none"}
              label={"Nombre del cupón"}
              value={valueCouponName}
              onChange={OnChangeCouponName}
              onBlur={BlurCouponName}
              onFocus={FocusCouponName}
              classNameLabel={"block text-[23px]"}
              placeholder={"Ingresa nombre del cupón"}
              name={"nombre del cupón"}
              classNameInput={`p-[5px] 
              outline-none 
              w-[100%]
              h-[40px] 
              rounded-[3px]   
              bg-black/20`}
            />
            <div className="h-[.5rem]">
              {MessageCouponName && (
                <p className="text-red text-[.9rem] leading-3">
                  {MessageCouponName}
                </p>
              )}
            </div>
          </div>
          <div className="basis-[26%] mb-[0.1rem]">
            <Input
              className={"flex-none"}
              type={"text"}
              label={"Descuento"}
              value={valueDiscount}
              onChange={OnChangeDiscount}
              onBlur={BlurDiscount}
              onFocus={FocusDiscount}
              classNameLabel={"block text-[23px]"}
              name={"descuento"}
              placeholder={"Ingrese el descuento"}
              classNameInput={`p-[4px] 
              outline-none 
              w-[100%]
              h-[40px] 
              rounded-[3px]   
              bg-black/20`}
            />
            <div className="h-[.5rem]">
              {MessageDiscount && (
                <p className="text-red text-[.9rem] leading-3">
                  {MessageDiscount}
                </p>
              )}
            </div>
          </div>
        </div>
        <div
          className="
        flex
        flex-col 
        justify-center 
        items-center 
        mt-[40px] sm:mt-[50px]"
        >
          <div className="h-[.5rem] mb-[1.2rem]">
            {messageAlert ? (
              <p className="text-red text-[1rem] leading-3">{messageAlert}</p>
            ) : (
              <p className="text-darkGreen text-[1rem] leading-3">
                {messageAlertOk}
              </p>
            )}
          </div>

          <Button
            className={`bg-black 
          text-white 
          py-[18px] 
          px-[54px] 
          rounded-[5px] 
          leading-3 
          text-[19px] 
          block
          w-[17rem]
          sm:w-[15rem]`}
          >
            Confirmar
          </Button>
        </div>
      </form>
    </div>
  );
}