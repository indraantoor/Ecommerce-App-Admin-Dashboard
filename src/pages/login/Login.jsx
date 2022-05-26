import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../redux/apiCalls";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, email, password });
  };

  const Background =
    "https://images.pexels.com/photos/4065133/pexels-photo-4065133.jpeg?cs=srgb&dl=pexels-cottonbro-4065133.jpg&fm=jpg";

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
      }}
    >
      <div
        style={{
          width: "25%",
          padding: "20px",
          backgroundColor: "rgba(1,1,1,0.9)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "10px",
        }}
      >
        <h1 style={{ margin: "20px", color: "white" }}>LOGIN</h1>
        <input
          style={{ padding: 10, marginBottom: 20, width: "90%" }}
          type="text"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          style={{ padding: 10, marginBottom: 20, width: "90%" }}
          type="text"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          style={{ padding: 10, marginBottom: 20, width: "90%" }}
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleClick}
          style={{
            padding: 10,
            width: 100,
            backgroundColor: "white",
            color: "black",
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
