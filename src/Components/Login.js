import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../reducers/user";

function Login() {
      const dispatch = useDispatch();
      return (
            <div>
                  <button
                        onClick={() =>
                              dispatch(
                                    login({
                                          name: "Irfan Raza",
                                          age: 25,
                                          email: "irfan.rza65@gmail.com",
                                    })
                              )
                        }
                        style={{
                              width: 90,
                              height: 30,
                              textAlign: "center",
                              margin: 10,
                              border: 1,
                              borderRadius: 5,
                              backgroundColor: "#92dff3",
                              color: "black",
                        }}
                  >
                        Login
                  </button>
                  <button
                        onClick={() => dispatch(logout())}
                        style={{
                              width: 90,
                              height: 30,
                              textAlign: "center",
                              margin: 10,
                              border: 1,
                              borderRadius: 5,
                              backgroundColor: "#92dff3",
                              color: "black",
                        }}
                  >
                        Logout
                  </button>
            </div>
      );
}

export default Login;
