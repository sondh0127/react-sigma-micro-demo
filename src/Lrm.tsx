import React from "react";
import { hostVite } from "./main";
import WujieReact from "wujie-react";
import { useLocation, useHistory } from "react-router-dom";

export default function Vite({url = hostVite, name = 'vite'}) {
  const location = useLocation();
  // const navigation = useNavigate();
  const history = useHistory()
  // channels/ec63ab7d-bda0-4058-9157-78dff20e5db9

  const path = location.pathname.replace(`/${name}-sub`, "").replace(`/${name}`, "").replace("/", "")
  console.log('[LOG] ~ file: Lrm.tsx ~ line 13 ~ path', path)
  const viteUrl = url + path;
  console.log('[LOG] ~ file: Lrm.tsx ~ line 15 ~ viteUrl', viteUrl)
  const props = {
    jump: (newRoute) => {
      history.replace(`/${newRoute}`);
    },
    goBack: false,
    importProgram: false
  }

  return (
    // Single mode, Name is the same to reuse an unbounded instance,
    // changing the URL sub -application re -rendering instance to the corresponding routing
    <WujieReact
      width="100%"
      height="100%"
      name={name}
      url={viteUrl}
      sync={!path}
      props={props}
    ></WujieReact>
  );
}
