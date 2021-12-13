import ReactDOM from "react-dom";

function Render(props) {
  const { loading } = props;
  return (
    <>
      {loading && <h4 className="subapp-loading">Loading...</h4>}
      <div id="sub-app" />
    </>
  );
}

export default function render({ loading }) {
  const container = document.getElementById("sub-app");
  ReactDOM.render(<Render loading={loading} />, container);
}
