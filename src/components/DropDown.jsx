import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

function DropDown({ number, direction, ...args }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const numberOfIp = (number) => {
    console.log("Number of Ip: ", number);
  };

  return (
    <div className="d-flex">
      <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={direction}>
        <DropdownToggle
          caret
          style={{ paddingRight: `30px`, paddingLeft: "30px" }}
          className="text-black bg-white"
        >
          Action
        </DropdownToggle>
        <DropdownMenu {...args} style={{ width: "35px" }}>
          <DropdownItem onClick={() => numberOfIp(number)}>
            Foo Action
          </DropdownItem>
          <DropdownItem onClick={() => numberOfIp(number)}>
            Bar Action
          </DropdownItem>
          <DropdownItem onClick={() => numberOfIp(number)}>
            Quo Action
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

export default DropDown;
