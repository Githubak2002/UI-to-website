import React from "react";

const Card = (props) => {
  return (
    <>
      <section
        key={props.id}
        className={`${
          props.id == 2
            ? " bg-[#FF734F] border-black text-white"
            : " bg-none border-[#FF734F]"
        } m-4 max-w-[268px] border-2 rounded-xl pt-6`}
      >
        <div className=" text-center flex flex-col items-center">
          <h3 className="text-xl font-bold ">{props.main_heading}</h3>
          <h4 className={`pt-2 text-sm h-[50px] mx-2`}>
            {props.main_heading2}
          </h4>

          <div>
            <h2
              className={`${
                2 == props.id ? "text-black" : "text-[#FF734F]"
              } font-bold text-2xl  mt-5`}
            >
              {props.price}
            </h2>
            <h2
              className={`${
                2 == props.id
                  ? "text-black border-white"
                  : "text-[#FF734F] border-[#FF734F]"
              } font-semibold  border-b-2 pb-6 w-[200px]`}
            >
              {props.interval}
            </h2>
          </div>
        </div>

        <div className="ml-6">
          <div className="mt-3 leading-6">
            <h2 className="font-semibold">{props.sub_h1}</h2>
            <div className="text-[14px]">
              <h3>{props.sh1_item1}</h3>
              <h3>{props.sh1_item2}</h3>
              <h3>{props.sh1_item3}</h3>
            </div>
          </div>

          <div className="mt-10 leading-6 mb-6">
            <h2 className=" font-semibold">{props.sub_h2}</h2>
            <div className="text-[14px]">
              <h3 className="pr-4">{props.sh2_item1}</h3>
            </div>
          </div>
        </div>

        <div className="pt-3 flexCenter pb-8">
          <button
            className={` ${
              2 == props.id ? "border-white " : " border-black"
            } w-[220px] bg-transparent rounded-lg py-2 px-8 border-2`}
          >
            TRY FREE
          </button>
        </div>
      </section>
    </>
  );
};

export default Card;
