import Link from "next/link";
import NavLink from "./navLink.jsx/NavLink";

const Links = () => {
  const links = [
    {
      title: "Homepage",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contacts",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];

  //temporary
  const session = true
  const isAdmin = true

  return (
    <div>
      {links.map((link) => (
        <NavLink item={link} key={link.title} />
      ))}
      {session ? (
        <>
        {isAdmin && <NavLink item={{ title: "Admin", path: "/admin"}} />}
        <button>Logout</button>
        </>
      ) : (
        <NavLink item={{ title: "Login", path: "/login"}} />
      )}
    </div>
  );
};

export default Links;
