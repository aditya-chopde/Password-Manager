import { Link } from "react-router-dom";
import { images } from "../assets/asserts";

const Index = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-[75vh]">
        <div className="flex justify-center items-center my-5">
          <img src={images.hero_image} alt="hero_image_icon" className="w-80" />
        </div>
        <h1 className="font-bold text-2xl">PassPod - Password Manager</h1>
        <div className="flex gap-5 justify-center items-center my-5">
          <Link to={"/login"}>
            <button className="bg-white text-black px-5 py-2 rounded-sm border outline-none transition-all hover:bg-black hover:text-white">
              Login
            </button>
          </Link>
          <button className="border px-5 py-2 rounded-sm transition-all hover:bg-white hover:text-black">
            <Link to={"/signup"}>Sign Up</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Index;
