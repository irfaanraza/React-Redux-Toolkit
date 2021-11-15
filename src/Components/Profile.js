import React from "react";
import { useSelector } from "react-redux";

function Profile() {
      const user = useSelector((state) => state.user.value);
      const themeColor = useSelector((state) => state.theme.value);

      return (
            <div
                  style={{
                        color: themeColor,
                        marginTop: 150,
                  }}
            >
                  <h2>USER PROFILE</h2>

                  <p>
                        <b>NAME : {user.name}</b>
                  </p>
                  <p>
                        <b> AGE :{user.age}</b>
                  </p>
                  <p>
                        <b>EMAIL : {user.email} </b>
                  </p>
            </div>
      );
}

export default Profile;
