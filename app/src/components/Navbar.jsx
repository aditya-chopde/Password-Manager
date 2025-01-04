import { images, svgs } from "../assets/asserts";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between mx-8 items-center">
        <div>
          <img src={svgs.logout} alt="user-svg-icon" className="w-8 invert" />
        </div>
        <div>
          <img src={images.logo} alt="passpod_logo" className="w-32" />
        </div>
        <div>
          <img src={svgs.user} alt="user-svg-icon" className="w-8 invert" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
