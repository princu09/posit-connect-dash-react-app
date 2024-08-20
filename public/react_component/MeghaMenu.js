import React from "react";
const MeghaMenu = () => {
  const [show, setShow] = React.useState(false);
  const [singleDrillhole, setSingleDrillhole] = React.useState(false);
  const [showContent, setShowContent] = React.useState(false);
  const handleOpen = () => {
    setShow(!show);
    setTimeout(() => {
      setShowContent(!show ? true : false);
    }, 500);
  };
  let css = {
    menu: "bg-[#51422f] hover:bg-[#352b1f] transition-all duration-300 cursor-pointer ease p-3 rounded-lg flex items-center gap-5 w-[200px]",
  };
  const [searchValue, setSearchValue] = React.useState("");
  const [logconeSearchValue, setLogconeSearchValue] = React.useState("");
  let searchMenu = [
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Help",
      path: "/help",
    },
    {
      title: "Map View",
      path: "/map-view",
    },
    {
      title: "Drillhole",
      path: "/drillhole",
    },
    {
      title: "Project View",
      path: "/project-view",
    },
  ];
  const [filteredSearchMenu, setFilteredSearchMenu] =
    React.useState(searchMenu);
  React.useEffect(() => {
    setFilteredSearchMenu(
      searchMenu.filter((item) =>
        item.title.toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  }, [searchValue]);
  return /*#__PURE__*/ React.createElement(
    "div",
    {
      className: "max-w-[100vw]",
    },
    /*#__PURE__*/ React.createElement(
      "div",
      {
        className: "relative bg-[#352b1f] flex items-center justify-center",
      },
      /*#__PURE__*/ React.createElement(
        "div",
        {
          className:
            "w-full container h-[70px] flex justify-between items-center",
        },
        /*#__PURE__*/ React.createElement(
          "p",
          {
            className: "text-[#f6ede6]  text-3xl font-bold",
          },
          "RioTinto"
        ),
        /*#__PURE__*/ React.createElement(
          "div",
          {
            className: "cursor-pointer",
            onClick: () => handleOpen(),
          },
          /*#__PURE__*/ React.createElement(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "30",
              height: "30",
              fill: "white",
              class: "bi bi-list",
              viewBox: "0 0 16 16",
            },
            /*#__PURE__*/ React.createElement("path", {
              "fill-rule": "evenodd",
              d: "M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5",
            })
          )
        )
      )
    ),
    /*#__PURE__*/ React.createElement(
      "div",
      {
        className: `w-full bg-[#40362c]   text-[#f6ede6]  rounded-b-2xl 
        transition-all duration-200 ease 
        ${show ? "opacity-100 h-[400px]" : "opacity-0 h-0"}
        flex items-center justify-center
        `,
      },
      /*#__PURE__*/ React.createElement(
        "div",
        {
          className: `
        transition-all duration-300 ease ${
          showContent ? "opacity-100" : "opacity-0"
        }
          `,
        },
        /*#__PURE__*/ React.createElement(
          "div",
          {
            className: "grid grid-cols-4 gap-5",
          },
          /*#__PURE__*/ React.createElement(
            "div",
            {
              className: css.menu,
            },
            /*#__PURE__*/ React.createElement(
              "div",
              {
                className: "bg-[#40362c]   p-3 rounded-full",
              },
              /*#__PURE__*/ React.createElement(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "15",
                  height: "15",
                  fill: "white",
                  class: "bi bi-building",
                  viewBox: "0 0 16 16",
                },
                /*#__PURE__*/ React.createElement("path", {
                  d: "M4 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z",
                }),
                /*#__PURE__*/ React.createElement("path", {
                  d: "M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm11 0H3v14h3v-2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V15h3z",
                })
              )
            ),
            /*#__PURE__*/ React.createElement(
              "p",
              {
                className: "text-[#f6ede6]  text-sm",
              },
              "About"
            )
          ),
          /*#__PURE__*/ React.createElement(
            "div",
            {
              className: css.menu,
            },
            /*#__PURE__*/ React.createElement(
              "div",
              {
                className: "bg-[#40362c]   p-3 rounded-full",
              },
              /*#__PURE__*/ React.createElement(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "15",
                  height: "15",
                  fill: "white",
                  class: "bi bi-building",
                  viewBox: "0 0 16 16",
                },
                /*#__PURE__*/ React.createElement("path", {
                  d: "M4 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z",
                }),
                /*#__PURE__*/ React.createElement("path", {
                  d: "M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm11 0H3v14h3v-2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V15h3z",
                })
              )
            ),
            /*#__PURE__*/ React.createElement(
              "p",
              {
                className: "text-[#f6ede6]  text-sm",
              },
              "Help"
            )
          ),
          /*#__PURE__*/ React.createElement(
            "div",
            {
              className: css.menu,
            },
            /*#__PURE__*/ React.createElement(
              "div",
              {
                className: "bg-[#40362c]   p-3 rounded-full",
              },
              /*#__PURE__*/ React.createElement(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "15",
                  height: "15",
                  fill: "white",
                  class: "bi bi-building",
                  viewBox: "0 0 16 16",
                },
                /*#__PURE__*/ React.createElement("path", {
                  d: "M4 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z",
                }),
                /*#__PURE__*/ React.createElement("path", {
                  d: "M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm11 0H3v14h3v-2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V15h3z",
                })
              )
            ),
            /*#__PURE__*/ React.createElement(
              "p",
              {
                className: "text-[#f6ede6]  text-sm",
              },
              "Videos"
            )
          ),
          /*#__PURE__*/ React.createElement(
            "div",
            {
              className: css.menu,
            },
            /*#__PURE__*/ React.createElement(
              "div",
              {
                className: "bg-[#40362c]   p-3 rounded-full",
              },
              /*#__PURE__*/ React.createElement(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "15",
                  height: "15",
                  fill: "white",
                  class: "bi bi-building",
                  viewBox: "0 0 16 16",
                },
                /*#__PURE__*/ React.createElement("path", {
                  d: "M4 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z",
                }),
                /*#__PURE__*/ React.createElement("path", {
                  d: "M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm11 0H3v14h3v-2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V15h3z",
                })
              )
            ),
            /*#__PURE__*/ React.createElement(
              "p",
              {
                className: "text-[#f6ede6]  text-sm",
              },
              "Minerals Library"
            )
          ),
          /*#__PURE__*/ React.createElement(
            "div",
            {
              className: "col-span-4 grid grid-cols-3 gap-5 h-[50px]",
            },
            /*#__PURE__*/ React.createElement(
              "div",
              {
                className: "search--box relative flex items-center",
              },
              /*#__PURE__*/ React.createElement(
                "div",
                {
                  className: "absolute left-3",
                },
                /*#__PURE__*/ React.createElement(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "16",
                    height: "16",
                    fill: "currentColor",
                    class: "bi bi-search",
                    viewBox: "0 0 16 16",
                  },
                  /*#__PURE__*/ React.createElement("path", {
                    d: "M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0",
                  })
                )
              ),
              /*#__PURE__*/ React.createElement("input", {
                className:
                  "bg-[#51422f]  text-[#f6ede6]  p-3 rounded-lg w-full focus:outline-none px-10 text-sm h-full",
                value: searchValue,
                onChange: (e) => {
                  setSearchValue(e.target.value);
                  setLogconeSearchValue("");
                  setSingleDrillhole(false);
                },
              }),
              /*#__PURE__*/ React.createElement(
                "div",
                {
                  className: "absolute right-3 cursor-pointer",
                  onClick: () => setSearchValue(""),
                },
                /*#__PURE__*/ React.createElement(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "16",
                    height: "16",
                    fill: "currentColor",
                    class: "bi bi-x-circle",
                    viewBox: "0 0 16 16",
                  },
                  /*#__PURE__*/ React.createElement("path", {
                    d: "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16",
                  }),
                  /*#__PURE__*/ React.createElement("path", {
                    d: "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708",
                  })
                )
              )
            ),
            /*#__PURE__*/ React.createElement(
              "div",
              {
                className: "logcone--search--box relative flex items-center",
              },
              /*#__PURE__*/ React.createElement(
                "div",
                {
                  className: "absolute left-3",
                },
                /*#__PURE__*/ React.createElement(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "16",
                    height: "16",
                    fill: "currentColor",
                    class: "bi bi-search",
                    viewBox: "0 0 16 16",
                  },
                  /*#__PURE__*/ React.createElement("path", {
                    d: "M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0",
                  })
                )
              ),
              /*#__PURE__*/ React.createElement("input", {
                className:
                  "bg-[#51422f]  text-[#f6ede6]  p-3 rounded-lg w-full focus:outline-none px-10 text-sm h-full",
                value: logconeSearchValue,
                onChange: (e) => setLogconeSearchValue(e.target.value),
              }),
              /*#__PURE__*/ React.createElement(
                "div",
                {
                  className: "absolute right-3 cursor-pointer",
                  onClick: () => setLogconeSearchValue(""),
                },
                /*#__PURE__*/ React.createElement(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "16",
                    height: "16",
                    fill: "currentColor",
                    class: "bi bi-x-circle",
                    viewBox: "0 0 16 16",
                  },
                  /*#__PURE__*/ React.createElement("path", {
                    d: "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16",
                  }),
                  /*#__PURE__*/ React.createElement("path", {
                    d: "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708",
                  })
                )
              )
            ),
            /*#__PURE__*/ React.createElement(
              "div",
              {
                className: "",
              },
              /*#__PURE__*/ React.createElement(
                "button",
                {
                  onClick: () => {
                    setSingleDrillhole(!singleDrillhole);
                    setSearchValue("");
                    setLogconeSearchValue("");
                  },
                  className:
                    "bg-[#51422f]  text-[#f6ede6]  rounded-lg w-full text-xs h-full text-start p-3 ",
                },
                "Single Drillhole"
              )
            )
          ),
          /*#__PURE__*/ React.createElement(
            "div",
            {
              className: `col-span-4 grid grid-cols-4 gap-5 h-[50px]
            transition-all duration-300 ease
            ${singleDrillhole ? "opacity-100 h-[50px]" : "opacity-0 h-0"}
            `,
            },
            /*#__PURE__*/ React.createElement(
              "button",
              {
                className:
                  "bg-[#f6ede6]  text-[#40362c]   h-full rounded-full text-xs font-bold",
              },
              "Downhole"
            ),
            /*#__PURE__*/ React.createElement(
              "button",
              {
                className:
                  "bg-[#f6ede6]  text-[#40362c]   h-full rounded-full text-xs font-bold",
              },
              "Stats View"
            ),
            /*#__PURE__*/ React.createElement(
              "button",
              {
                className:
                  "bg-[#f6ede6]  text-[#40362c]   h-full rounded-full text-xs font-bold",
              },
              "Core Images"
            ),
            /*#__PURE__*/ React.createElement(
              "button",
              {
                className:
                  "bg-[#f6ede6]  text-[#40362c]   h-full rounded-full text-xs font-bold",
              },
              "Vein Long View"
            )
          ),
          /*#__PURE__*/ React.createElement(
            "div",
            {
              className: `col-span-4 grid grid-cols-4 gap-5 h-[50px] transition-all duration-300 ease`,
            },
            searchValue !== "" &&
              filteredSearchMenu?.map((item, index) =>
                /*#__PURE__*/ React.createElement(
                  "a",
                  {
                    href: item?.path,
                    className: "w-full",
                  },
                  /*#__PURE__*/ React.createElement(
                    "button",
                    {
                      key: index,
                      className:
                        "bg-[#f6ede6]  text-[#40362c]   h-full rounded-full text-xs font-bold w-full",
                    },
                    item.title
                  )
                )
              )
          )
        )
      )
    ),
    /*#__PURE__*/ React.createElement("div", {
      className: "fixed top-0 bottom-0 left-0 right-0 -z-10",
      onClick: () => {
        setShow(false);
        setShowContent(false);
      },
    })
  );
};
export default MeghaMenu;
