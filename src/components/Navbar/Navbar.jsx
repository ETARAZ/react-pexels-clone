import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { DotsHorizontalIcon, MenuIcon } from "./icons";
import { menuData } from "./data";
import Item from "./Item";
import Social from "./Social";
import Search from "./Search";
import Dropdown from "./Dropdown";

function Navbar() {
  const loc = useLocation();
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY >= 50) {
        setScroll(true);
        return;
      }
      setScroll(false);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`${
          scroll || open || loc.pathname != "/" ? "bg-[#232a34]" : ""
        } min-h-66 py-0 top-0 left-0 right-0 px-2 lg:px-4 z-50 flex  fixed items-center transition-colors w-full`}
      >
        <Link to="/" className="flex mr-4  justify-center items-center">
          <div className="w-9 h-9 md:w-10 md:h-10">
            <img
              src="https://theme.zdassets.com/theme_assets/9028340/1e73e5cb95b89f1dce8b59c5236ca1fc28c7113b.png"
              alt="Pexels"
              className="object-cover"
            />
          </div>
          <span className="font-semibold hidden md:block font leading-none text-xl text-white ml-4">
            Pexels
          </span>
        </Link>
        {scroll || open ? <Search text="Search for free photos" /> : null}

        <div className="ml-auto m-0 p-0">
          <ul className="list-none hidden lg:flex items-center  p-0">
            <li className="mr-9">
              <Dropdown
                text="Explorer"
                path="/discover"
                data={menuData.slice(0, 6)}
                type="dropdown1"
              />
            </li>

            <li className="mr-9">
              <Link
                to="/license"
                className="block text-17 leading-none font-normal mt-0 mb-0 text-white decora p-0  transition-opacity whitespace-nowrap hover:opacity-75"
              >
                License
              </Link>
            </li>

            <li className="mr-9">
              <Link
                to="/upload"
                className="block text-17 leading-none font-normal mt-0 mb-0 text-white decora p-0  transition-opacity whitespace-nowrap hover:opacity-75"
              >
                Upload
              </Link>
            </li>

            <li className="mr-9">
              <div className="relative block group">
                <DotsHorizontalIcon className="block cursor-pointer h-6 w-6 mt-0 mb-0 text-white  p-0  transition-opacity hover:opacity-75" />
                <div className="absolute left-auto hidden transi z-30 min-w-172 group-hover:block right-0 top-4">
                  <div className="relative mt-5  rounded-sm shadow-sm bg-white h-full ">
                    <div className="absolute rounded-sm shadow-sm bg-white -z-1 rotate-45  right-1 -top-1 h-arrow-height w-arrow-width"></div>

                    <ul class=" py-3 z-10 ">
                      {menuData
                        .slice(6)
                        .map((e) =>
                          e?.mobile ? null : !e?.flag ? (
                            <Item
                              click={handleToggle}
                              text={e.text}
                              path={e.path}
                              type="dropdown2"
                            />
                          ) : (
                            <Item
                              text={e.text}
                              path={e.path}
                              type="dropdown2"
                              flag
                            />
                          )
                        )}
                    </ul>
                    <Social />
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link
                to="/onboarding"
                className="block text-17 leading-none font-semibold mt-0 mb-0 text-white  py-3 px-7 bg-[#05a081] rounded-md   transition-all hover:opacity-75 hover:-translate-y-px "
              >
                Join
              </Link>
            </li>
          </ul>
          <MenuIcon
            onClick={handleToggle}
            className="md:h-7 h-6 w-6  p-0 m-0 block cursor-pointer lg:hidden md:w-7 text-white"
          />
        </div>
      </nav>
      {open && (
        <div className="fixed bg-[#232a34] z-40 py-2 right-0 left-0 bottom-0 top-66 overflow-auto">
          <div>
            <ul class="py-2 z-10">
              <Item click={handleToggle} text="Home" path="/" type="mobile" />
            </ul>
            <hr className="text-white mx-3 opacity-75" />

            <ul class="py-2 z-10">
              {menuData.slice(0, 6).map((e) => (
                <Item
                  click={handleToggle}
                  text={e.text}
                  path={e.path}
                  type="mobile"
                />
              ))}
            </ul>

            <hr className="text-white mx-3 opacity-75" />

            <ul class="py-2 z-10">
              {menuData
                .slice(6, 10)
                .map((e) =>
                  !e?.flag ? (
                    <Item
                      text={e.text}
                      path={e.path}
                      click={handleToggle}
                      type="mobile"
                    />
                  ) : (
                    <Item
                      text={e.text}
                      click={handleToggle}
                      path={e.path}
                      type="mobile"
                      flag
                    />
                  )
                )}
            </ul>
            <hr className="text-white mx-3 opacity-75" />

            <ul class="py-2 z-10">
              {menuData
                .slice(10)
                .map((e) =>
                  e?.desktop ? null : (
                    <Item
                      click={handleToggle}
                      text={e.text}
                      path={e.path}
                      type="mobile"
                    />
                  )
                )}
            </ul>
            <hr className="text-white  opacity-75" />
            <Social mobile={true} />
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
