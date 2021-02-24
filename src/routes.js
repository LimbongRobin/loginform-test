import React from "react";
// const Body = React.lazy(() => import("./views/layout/component/body/body.component"));

const Login = React.lazy(() =>
  import("../src/views/Login")
);
const Register = React.lazy(() =>
  import("../src/views/Register")
);
const routes =[
    {
      path:"/login", 
      exact:true, 
      name:"register", 
      component:Login
    },

    {
      path:"/register", 
      exact:true, 
      name:"register", 
      component:Register
    },

]

export default routes;
