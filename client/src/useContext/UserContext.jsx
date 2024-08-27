import React, { createContext, useEffect, useReducer } from "react";
import { userReducer } from "./userReducer";
import axios from "axios";
import { url } from "../url";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

const initialState = {
  user: {},
};

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);
  const navigate = useNavigate();

  const handleSetUserAfterLogin = (obj) => {
    dispatch({
      type: "SET_USER_AFTER_LOGIN",
      payload: obj,
    });
  };

  // refetch user after refresh
  const refetch = async () => {
    try {
      const result = await axios.get(url + "/api/auth/refetch", {
        withCredentials: true,
      });
      // console.log(result);
      const { iat, exp, ...rest } = result.data;
      dispatch({
        type: "PERSIST_USER_AFTER_REFRESH",
        payload: rest,
      });
    } catch (error) {
      console.log("runs");
      console.log(error);
    }
  };

  const handleLogout = async () => {
    try {
      const response = await axios.get(`${url}/api/auth/logout`, {
        withCredentials: true,
      });
      dispatch({
        type: "LOGOUT",
        payload: initialState.user,
      });

      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    refetch();
  }, []);

  return (
    <UserContext.Provider
      value={{ handleSetUserAfterLogin, handleLogout, user: state.user }}
    >
      {children}
    </UserContext.Provider>
  );
};
