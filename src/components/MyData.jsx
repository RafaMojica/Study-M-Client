import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { Pencil, Save } from "@/common/Icons";
import IconButton from "@/common/IconButton";
import Input from "@/common/Input";
import useInput from "@/hooks/useInput";
import { fetchUser, fetchUserData } from "@/helpers/apiHelpers";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "@/state/features/authSlice";
import { motion } from "framer-motion";
import Loading_common from "@/common/Loading_common";
import { setUserImg } from "@/state/features/userImgSlice";
import Spin_loading from "@/common/Spin_loading";
const MyData = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [changePassword, setChangePassword] = useState(false);
  const [messageAlert, setMessageAlert] = useState("");
  const [messageAlertOk, setMessageAlertOk] = useState("");
  const fileInputRef = useRef(null);
  const {
    OnChange: OnChangePassword,
    value: valuePassword,
    blur: BlurPassword,
    focus: FocusPassword,
    message: MessagePassword,
    isPasswordVisible: isPasswordVisible,
    setIsPasswordVisible: setIsPasswordVisible,
  } = useInput("password");
  const {
    OnChange: OnChangePassword2,
    value: valuePassword2,
    blur: BlurPassword2,
    focus: FocusPassword2,
    message: MessagePassword2,
    isPasswordVisible: isPasswordVisible2,
    setIsPasswordVisible: setIsPasswordVisible2,
  } = useInput("password");
  const [loading, setLoading] = useState(false);
  const { userImg } = useSelector((state) => state.userImg);

  useEffect(() => {
    const checkUserAuthentication = async () => {
      const user = await fetchUser();
      const userData = await fetchUserData(user._id);
      dispatch(setUserImg(userData.profileImg));
      dispatch(setCredentials(user));
    };

    checkUserAuthentication();
  }, []);

  const handleEditMode = () => {
    setChangePassword(!changePassword);
  };

  //Manejador de click de contraseña
  const handleClickEdit = async (e) => {
    if (valuePassword.trim() == "" || valuePassword2.trim() == "") {
      setMessageAlert("¡Completar todos los campos!");
      setTimeout(() => {
        setMessageAlert("");
      }, 1300);
    } else {
      if (MessagePassword || MessagePassword2) {
        setMessageAlert("¡Verificar campos!");
        setTimeout(() => {
          setMessageAlert("");
        }, 1300);
      } else {
        try {
          await axios.put(
            `${process.env.NEXT_PUBLIC_API_URL}/api/user/updateUserPassword/${user._id}`,
            {
              firstpassword: valuePassword,
              secondpassword: valuePassword2,
            }
          );
          setMessageAlert("");
          setMessageAlertOk("¡Cambio de contraseña exitoso!");
          setTimeout(() => {
            setChangePassword(false);
          }, 2000);
        } catch (error) {
          console.error(error);
          const { data } = error.response;
          if (data == "Invalid Password") {
            setMessageAlert("*Las contraseñas deben coincidir");
            setTimeout(() => {
              setMessageAlert("");
            }, 2000);
          }
        }
      }
    }
  };
  const handleDivClick = () => {
    // Programáticamente hacer clic en el input de tipo file cuando se hace clic en el div
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  const handleFileChange = async (e) => {
    const file = e.target.files[0];

    setLoading(true);

    const formData = new FormData();
    formData.append("archivo", file);
    try {
      const userImage = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/api/user/updateImg/${user?.mail}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      dispatch(setUserImg(userImage.data.profileImg));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    //Contenedor
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="mt-7 relative flex flex-col items-center md:mt-10 md:h-80 md:flex-row md:items-start md:ml-[8%]"
    >
      {/*Imagen e Icono*/}
      <div className="md:basis-[27.5%] flex justify-center items-center md:mr-6">
        {/* Indicador de carga */}
        <div className="flex flex-row justify-between md:absolute md:top-1 md:left-5 md:mt-2.5  ">
          {loading && <Spin_loading />}
          <Image
            src={userImg !== "" ? userImg : "/img/perfilDefault.png"}
            width={100}
            height={100}
            alt="Profile Image"
            className={`rounded-full w-[85px] h-[85px] md:w-[150px] md:h-[150px] lg:w-[190px] lg:h-[190px] ${
              loading ? "opacity-25" : ""
            }`}
          />

          <div
            className="relative md:mb-[6.5%] md:mr-[7.5%]"
            onClick={handleDivClick}
            onChange={handleFileChange}
          >
            <IconButton
              className="absolute bottom-0 right-0 bg-[#1E1E1E] items-center justify-center rounded-full w-[18px] h-[18px] md:w-[24px] md:h-[24px]
              lg:bottom-1 lg:right-1"
              style={{ boxShadow: "0px 4px 6px -2px rgba(0,0,0,0.75)" }}
            >
              <Pencil color="white" width="12" height="10" />
              <input
                ref={fileInputRef}
                type="file"
                className="hidden"
                accept=".png, .jpg, .jpeg, .gif, .avif"
              />
            </IconButton>
          </div>
        </div>
      </div>
      {/*Inputs*/}
      <div className="md:basis-[62.5%] items-start">
        <div className="mb-11 md:grid md:grid-cols-2">
          <Input
            name="name"
            type="text"
            value={user?.name}
            readOnly
            className="md:w-[190px] w-[210px] lg:w-[90%]"
            classNameInput="p-[5.5px] w-full"
            classNameLabel="text-[20px]"
            label="Nombre"
          />
          <Input
            name="lastName"
            type="text"
            value={user?.lastname}
            readOnly
            className="md:w-[190px] w-[210px] lg:w-[90%]"
            classNameInput="p-[5.5px] w-full"
            classNameLabel="text-[20px]"
            label="Apellido"
          />

          <Input
            name="email"
            type="text"
            value={user?.mail}
            readOnly
            className="md:w-[190px] w-[210px] lg:w-[90%]"
            classNameInput="p-[5.5px] w-full"
            classNameLabel="text-[20px]"
            label="Email"
          />
          <Input
            name="document"
            type="int"
            value={Number(user?.dni).toLocaleString().replace(/,/g, ".")}
            readOnly
            className="md:w-[190px] w-[210px] lg:w-[90%]"
            classNameInput="p-[5.5px] w-full"
            classNameLabel="text-[20px]"
            label="DNI"
          />
          {/*Inputs cambio de contraseña*/}
          {changePassword && (
            <>
              <Input
                name="firstpassword"
                type="password"
                value={valuePassword}
                onChange={OnChangePassword}
                placeholder="********"
                className="md:w-[190px] w-[210px] lg:w-[90%]"
                classNameInput="p-[5.5px] w-full"
                classNameLabel="text-[20px]"
                label="Nueva contraseña"
                onFocus={FocusPassword}
                onBlur={BlurPassword}
                isPasswordVisible={isPasswordVisible}
                togglePasswordVisibility={() =>
                  setIsPasswordVisible(!isPasswordVisible)
                }
              />
              <Input
                name="secondpassword"
                type="password"
                value={valuePassword2}
                onChange={OnChangePassword2}
                placeholder="********"
                className="md:w-[190px] w-[210px] lg:w-[90%]"
                classNameInput="p-[5.5px] w-full"
                classNameLabel="text-[20px]"
                label="Confirmar contraseña"
                onFocus={FocusPassword2}
                onBlur={BlurPassword2}
                isPasswordVisible={isPasswordVisible2}
                togglePasswordVisibility={() =>
                  setIsPasswordVisible2(!isPasswordVisible2)
                }
              />
              <div className="h-[.5rem] pb-6">
                {(MessagePassword || MessagePassword2) && (
                  <p className="text-red text-[.8rem] leading-3">
                    {MessagePassword || MessagePassword2}
                  </p>
                )}
              </div>

              <div className="h-[.5rem] w-full">
                {messageAlert != "" ? (
                  <p className="text-red text-[1rem] leading-3">
                    {messageAlert}
                  </p>
                ) : (
                  <p className="text-darkGreen text-[1rem] leading-3">
                    {messageAlertOk}
                  </p>
                )}
              </div>
            </>
          )}
        </div>
      </div>
      <div className="md:basis-[10%]">
        {/* Icono cambio de contraseña */}
        <div
          className={
            "absolute bottom-0 right-0 mr-[5%] mb-[4.5%] md:mr-[4%] md:mb-[3.5%]"
          }
        >
          <IconButton
            className="bg-[#1E1E1E] rounded-full w-6 h-6"
            style={{ boxShadow: "0px 4px 6px -2px rgba(0,0,0,0.75)" }}
            onClick={() =>
              changePassword ? handleClickEdit() : handleEditMode()
            }
          >
            {changePassword ? (
              <Save color="white" width="14" height="14" />
            ) : (
              <Pencil color="white" width="14" height="15" />
            )}
          </IconButton>
        </div>
      </div>
    </motion.div>
  );
};

export default MyData;
