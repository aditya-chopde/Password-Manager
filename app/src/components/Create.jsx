import React from "react";

const Create = () => {
  return (
    <>
    <div className="flex flex-col justify-center items-center">
      <form className="border px-10 py-8 my-24 w-96">
        <div>
          <label htmlFor="">Enter Website URL: </label>
          <br />
          <input className="bg-transparent px-3 py-2 border w-full my-2" type="text" placeholder="http://www.example.com" />
        </div>
        <div>
            <label htmlFor="">Enter Username/Email: </label>
            <br />
            <input type="text" className="bg-transparent px-3 py-2 border w-full my-2" placeholder="abc@xyz.com"/>
        </div>
        <div>
            <label htmlFor="">Enter Password: </label>
            <br />
            <input type="text" className="bg-transparent px-3 py-2 border w-full my-2" placeholder="**********"/>
        </div>
        <div>
            <button className="w-full bg-white text-black border rounded-sm py-2 my-2 transition-all hover:bg-black hover:text-white hover:scale-[1.025]">Add</button>
        </div>
      </form>
    </div>
    </>
  );
};

export default Create;
