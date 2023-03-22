import React, { useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loadUser } from "../actions/userActions";

const ProtectedRoute = ({ children, isAdmin }) => {
  const {
    isAuthenticated,
    loading = true,
    user,
  } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!user) {
      dispatch(loadUser());
    }
  }, [isAuthenticated, loading]);
  // if (loading) {
  //   return <h1>Loading</h1>;
  // } else if (!isAuthenticated) {
  //   return <Navigate to={"/login"} />;
  // } else if (user.role !== "admin") {
  //   return <Navigate to="/" />;
  // } else {
  //   return children;
  // }
  if (loading) return <h1>Loading</h1>;
  if (!loading && isAuthenticated) {
    if (isAdmin === true && user.role !== "admin") {
      return <Navigate to="/" />;
    }
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoute;
