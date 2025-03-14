import React, { useEffect, useRef } from "react";
import { mount } from "dashboard/DashboardApp";

const AuthApp = () => {
  const ref = useRef(null);

  // We are taking a refrence of div and passing it on to mount function
  // and mount function will append all its content to this div.
  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref} />;
};

export default AuthApp;
