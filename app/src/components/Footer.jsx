import { images } from "../assets/asserts";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center mx-10 border-t">
        <div className="flex items-center gap-3 my-5">
          <img
            src={images.footer_logo}
            alt="footer_logo_image"
            className="w-16 "
          />
        <div className="mb-3">
          <p className="text-sm">Copyright &copy; | All Rights Reserved</p>
            <h1 className="text-sm">Designed & Developed by <br /> <a href="https://www.linkedin.com/in/aditya-chopde-486a102a2"  className="font-bold hover:text-blue-500
            " target="_blank">Aditya Chopde</a></h1>
        </div>
        </div>

      </div>
    </>
  );
};

export default Footer;
