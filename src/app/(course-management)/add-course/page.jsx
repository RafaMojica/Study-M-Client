"use client";

import AddCourse from "@/components/addCourse";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "@/helpers/apiHelpers";
import { setCredentials } from "@/state/features/authSlice";
import { useEffect } from "react";

export default function AddCourseAdmin() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const checkUserAuthentication = async () => {
      const userData = await fetchUser();
      dispatch(setCredentials(userData));
    };
    checkUserAuthentication();
  }, []);

  return (
    <>
      {user?.isAdmin ? (
        <div className="flex flex-col justify-center items-center w-full h-full py-[105px] ">
          <AddCourse />
        </div>
      ) : (
        <h1 className="bg-black text-white text-2xl flex items-center justify-center h-screen">
          404 | This page could not be found
        </h1>
      )}
    </>
  );
}
