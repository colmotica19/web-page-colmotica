import { NavLink } from "react-router";

export function NavBarComponent() {
  return (
    <div className="w-full flex justify-between bg-black text-white">
      <div>Logo tekneo</div>
      <ul className="flex gap-x-5">
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/products"}>Products</NavLink>
        </li>
        <li>
          <NavLink to={"/support"}>Support</NavLink>
        </li>
        <li>
          <NavLink to={"/partners"}>Partners</NavLink>
        </li>
      </ul>
    </div>
  );
}
