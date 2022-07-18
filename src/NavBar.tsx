
import { Link } from "react-router-dom";
interface NavBarProps {

}

const NavBar = (props: NavBarProps) => {
  return <div className='flex gap-2 items-center justify-center'>
    <div className="p-2 bg-neutral rounded">
      <Link to="/">Home</Link>
    </div>
    <div className="p-2 bg-neutral rounded">
      <Link to="/about">About</Link>
    </div>
    <div className="p-2 bg-neutral rounded">
      <Link to="/topics">Topics</Link>
    </div>
    <div className="p-2 bg-neutral rounded">
      <Link to="/sigma/ssai">SSAI</Link>
    </div>
    <div className="p-2 bg-neutral rounded">
      <Link to="/sigma/transcode">Transcode</Link>
    </div>
    <div className="p-2 bg-neutral rounded">
      <Link to="/sigma/library">Library</Link>
    </div>
    <div className="p-2 bg-neutral rounded">
      <Link to="/sigma/lrm">LRM</Link>
    </div>
    <div className="p-2 bg-neutral rounded">
      <Link to="/sigma/interactive"> Interactive </Link>
    </div>
    {/* <button onClick={changeToken}> Change Token </button> */}
  </div>
}

export default NavBar
