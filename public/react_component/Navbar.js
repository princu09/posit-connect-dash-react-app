import React from "react";
export default function Navbar() {
  const menuList = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Dashboard",
      link: "/dashboard",
    },
    {
      name: "Projects",
      link: "/projects",
    },
    {
      name: "Task",
      link: "/task",
    },
    {
      name: "User",
      link: "/user",
    },
  ];
  return /*#__PURE__*/ React.createElement(
    "div",
    {
      className:
        "h-[60px] shadow-md flex items-center justify-between lg:px-20 px-5",
    },
    /*#__PURE__*/ React.createElement(
      "div",
      {
        className: "flex gap-5 items-center",
      },
      /*#__PURE__*/ React.createElement(
        "h1",
        {
          className: "text-xl font-bold mr-10",
        },
        "Logo"
      ),
      /*#__PURE__*/ React.createElement(
        "ul",
        {
          className: "flex gap-5",
        },
        menuList.map((menu, index) =>
          /*#__PURE__*/ React.createElement(
            "li",
            {
              key: index,
            },
            /*#__PURE__*/ React.createElement(
              "a",
              {
                href: menu.link,
              },
              menu.name
            )
          )
        )
      )
    ),
    /*#__PURE__*/ React.createElement(
      "div",
      {
        className: "flex gap-3",
      },
      /*#__PURE__*/ React.createElement(
        "button",
        {
          className: "btn !text-accent !bg-accentbg",
        },
        "Login"
      ),
      /*#__PURE__*/ React.createElement(
        "button",
        {
          className: "btn !text-accent !bg-accentbg",
        },
        "Sign Up"
      )
    )
  );
}
