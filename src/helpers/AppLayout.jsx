import { Outlet } from "react-router-dom";
import Nav from "./Nav";

import Search from "../ui/Search";
import { useState } from "react";

function AppLayout() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <Nav setIsOpen={setIsOpen} />
      <Search isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="">
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
