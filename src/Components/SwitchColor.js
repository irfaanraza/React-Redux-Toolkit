import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeColor } from "../reducers/theme";

function SwitchColor() {
      const [color, setColor] = useState("");
      const dispatch = useDispatch();

      return (
            <div>
                  <input
                        type='text'
                        onChange={(event) => {
                              setColor(event.target.value);
                        }}
                        style={{
                              width: 200,
                              height: 30,
                              borderRadius: 5,
                              paddingLeft: 8,
                        }}
                  />
                  <button
                        onClick={() => {
                              dispatch(changeColor(color));
                        }}
                        style={{
                              width: 90,
                              height: 36,
                              textAlign: "center",
                              margin: 10,
                              border: 1,
                              borderRadius: 5,
                              backgroundColor: "CORAL",
                              color: "#fff",
                        }}
                  >
                        Switch Color
                  </button>
            </div>
      );
}

export default SwitchColor;
