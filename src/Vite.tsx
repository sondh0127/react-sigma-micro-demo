import React from "react";
import { hostVite } from "./main";
import WujieReact from "wujie-react";
import { useLocation, useHistory } from "react-router-dom";

export default function Vite({url = hostVite, name = 'vite'}) {
  const location = useLocation();
  // const navigation = useNavigate();
  const history = useHistory()
  const path = location.pathname.replace(`/${name}-sub`, "").replace(`/${name}`, "").replace("/", "")
  const viteUrl = url + path;
  const props = {
    jump: (newRoute) => {
      history.replace(`/${newRoute}`);
    },
  }

  return (
    // Single mode, Name is the same to reuse an unbounded instance,
    // changing the URL sub -application re -rendering instance to the corresponding routing
    <WujieReact
      width="100%"
      height="100%"
      name={name}
      url={viteUrl}
      sync={true}
      props={props}
    ></WujieReact>
  );
}
