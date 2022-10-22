import { NavLink } from "react-router-dom";
import './style.css';

export default function Drawer() {
  return (
    <>
      <div className="drawer-content">
        <NavLink className={({ isActive }) => isActive ? "drawer-item drawer-item-active" : "drawer-item"} to='/' end>Home</NavLink >
        <NavLink className={({ isActive }) => isActive ? "drawer-item drawer-item-active" : "drawer-item"} to='/sorteio'>Sorteio</NavLink >
      </div>
    </>
  )
}