"use client";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { addToCart } from "@/state/features/cartSlice";
import Button from "@/common/Button";
import Border from "../common/Border";
import IconButton from "@/common/IconButton";
import { fetchFavorites, fetchUser } from "@/helpers/apiHelpers";
import { setCredentials } from "@/state/features/authSlice";
import { useEffect } from "react";
import Alert_common from "@/common/Alert_common";
import CartAlert_common from "@/common/CartAlert";
import {
  deleteFavorite,
  listFavorites,
  updateAlertDelete,
  updateStatusDelete,
} from "@/state/features/myAccountSlice";
import {
  fetchCourses,
  toggleStatusCourse,
} from "@/state/features/setCoursesSlice";

export default function Cards({
  title,
  classNameTitle,
  buttonTitle,
  icon,
  img,
  iconFavorite,
  iconFavorite2,
  classNameImg,
  className,
  className2,
  classNameButton,
  progressBar,
  classNameIconButton,
  classNameBorder,
  courseId,
  isBought,
}) {
  const [isFavorite, setIsFavorite] = useState(true);
  const [out, setout] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [cartAlert, setCartAlert] = useState(false);
  const [isBoughtAlert, setIsBoughtAlert] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const router = useRouter();
  const {
    favoritesUser,
    myAccountStatus,
    alertDelete,
    statusDelete,
    idCoursedelete,
  } = useSelector((state) => state.myAccount);

  useEffect(() => {
    const checkUserAuthentication = async () => {
      const user = await fetchUser();
      dispatch(setCredentials(user));
    };
    checkUserAuthentication();
  }, []);

  const handleAddToCart = async (courseId) => {
    if (!user) {
      router.push("/login");
      return;
    }
    try {
      if (isBought) {
        router.push(`/my-account/${courseId}`);
        throw new Error("Course already bought");
      }
      const cartItems = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/cart/add`,
        {
          courseId,
          userId: user?._id,
        }
      );
      setCartAlert(true);
      setTimeout(() => {
        setCartAlert(false);
      }, 2500);

      dispatch(addToCart(cartItems.data.courseId.length));
    } catch (error) {
      if (isBought) {
        setIsBoughtAlert(true);
      } else if (error.response.data === "Course already in the cart") {
        setShowAlert(true);
      }
    }
  };

  const handleClick = async (courseId) => {
    try {
      router.push(`/courses/${courseId}`);
    } catch (error) {
      console.error("Error al obtener los datos del curso:", error);
    }
  };

  const handleAddFavorites = async () => {
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/favorites/add/${courseId}/${user?._id}`
      );

      if (!favoritesUser.find((favorite) => favorite._id === courseId)) {
        dispatch(
          listFavorites([
            ...favoritesUser,
            { _id: courseId, courseShortTitle: title, courseImg_url: img },
          ])
        );
      }
      setIsFavorite(!isFavorite);
    } catch (error) {
      console.error(error);
    }
  };
  const deleteFavoriteUser = async (courseId, user) => {
    try {
      const fetchDelete = await axios.delete(
        `${process.env.NEXT_PUBLIC_API_URL}/api/favorites/remove/${courseId}/${user?._id}`
      );
      dispatch(
        listFavorites(
          favoritesUser.filter((favorites) => favorites._id !== courseId)
        )
      );
      setIsFavorite(!isFavorite);
      dispatch(updateStatusDelete(!statusDelete));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (statusDelete) {
      if (courseId == idCoursedelete) {
        deleteFavoriteUser(courseId, user);
      }
    }
  }, [statusDelete]);

  const handleDeleteFavorites = async () => {
    try {
      dispatch(deleteFavorite(courseId));
      dispatch(updateAlertDelete(!alertDelete));
    } catch (error) {
      console.error(error);
    }
  };

  const handleAlert = () => {
    setout(true);
    setTimeout(() => {
      setShowAlert(false);
      setIsBoughtAlert(false);
      setout(false);
    }, 700);
  };

  return (
    <div className={`w-80 relative ${className || ""}`}>
      {isBoughtAlert && (
        <Alert_common
          handleAlert={handleAlert}
          out={out}
          titleAlert="¡Ya tienes este curso comprado!"
          classNameAlert="w-[300px]"
        />
      )}
      {showAlert && (
        <Alert_common
          handleAlert={handleAlert}
          out={out}
          titleAlert="¡Este curso ya está en tu carrito!"
          classNameAlert="w-[300px]"
        />
      )}
      {cartAlert && (
        <CartAlert_common
          out={out}
          titleAlert="¡Has agregado un curso al carrito!"
          classNameAlert="w-[300px]"
        />
      )}
      <h2
        className={`text-3xl text-white bg-[#181717] font-mystery-mixed p-1 flex items-center justify-center rounded-t-lg ${
          classNameTitle || ""
        }`}
      >
        {title}
      </h2>
      <div className={`${className2}`}>
        <Image
          src={img}
          width={500}
          height={500}
          alt="Picture"
          className={`${classNameImg}`}
        />
        <IconButton
          className="absolute right-3 top-14"
          onClick={isFavorite ? handleDeleteFavorites : handleAddFavorites}
        >
          {isFavorite ? iconFavorite : iconFavorite2}
        </IconButton>
        <Border
          className={`flex gap-0.5 w-auto h-10 absolute bottom-2 left-1/2 transform -translate-x-1/2 border-pink border-[1px] p-1 ${classNameBorder}`}
        >
          <Button
            onClick={() => handleClick(courseId)}
            className={`font-mystery-mixed bg-[#181717] ${classNameButton}`}
          >
            {buttonTitle}
            {progressBar && (
              <div className="relative w-44 bg-[#D9D9D9] rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="w-full">
                    <div className="flex h-2 overflow-hidden text-xs bg-teal-200 rounded">
                      <div
                        style={{ width: `${progressBar}%` }}
                        className="flex flex-col shadow-none whitespace-nowrap text-white justify-center bg-pink"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Button>
          <Button
            onClick={() => handleAddToCart(courseId)}
            className={`${classNameIconButton}`}
          >
            {icon}
          </Button>
        </Border>
      </div>
    </div>
  );
}
