import React from "react";
// import { Link } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import { useGlobalContext } from "helpers/hooks/useGlobalContext";
import "helpers/formating/currency";

export default function ProductDetails({ data }) {
  const [slider, setSlider] = React.useState(() => data?.imgUrls?.[0] || "");
  const { dispatch } = useGlobalContext();
  return (
    <section className="container mx-auto">
      <div className="flex flex-wrap my-4 md:my-12">
        <div className="w-full md:hidden px-4">
          <h2 className="text-5xl font-semibold">{data.title}</h2>
          <span className="text-xl"> IDR {data.price}</span>
        </div>

        <div className="flex-1">
          <div className="slider">
            <div className="thumbnail">
              {data?.imgUrls?.map((item) => {
                return (
                  <div
                    className="px-2"
                    key={item}
                    onClick={() => setSlider(item)}
                  >
                    <div
                      className={[
                        "item",
                        slider === item ? "bg-gray-100 selected" : "",
                      ].join(" ")}
                    >
                      <img
                        className="object-cover w-full h-full rounded-lg"
                        alt={item}
                        src={item}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="preview">
              <div className="item rounded-lg h-full overflow-hidden">
                <img
                  className="object-cover w-full h-full rounded-lg"
                  alt={slider}
                  src={slider}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 px-4 md:p-6">
          <div className="hidden md:block">
            <h2 className="text-5xl font-semibold">{data.title}</h2>
            <span className="text-xl">{data.price.currency()}</span>
          </div>
          <button
            className="transition-all duration-200 bg-pink-400 text-black hover:bg-black hover:text-pink-400 rounded-full px-8 py-3 mt-4 inline-flex w-full md:w-auto justify-center"
            onClick={() =>
              dispatch({
                type: "ADD_TO_CART",
                item: data,
              })
            }
          >
            <svg
              className="fill-current mr-3"
              width="29"
              height="25"
              viewBox="0 0 29 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.8754 19.9824C9.61762 19.9824 8.59436 21.023 8.59436 22.3021C8.59436 23.5812 9.61762 24.6218 10.8754 24.6218C12.1331 24.6218 13.1564 23.5812 13.1564 22.3021C13.1563 21.023 12.1331 19.9824 10.8754 19.9824ZM10.8754 23.3265C10.3199 23.3265 9.86796 22.8669 9.86796 22.302C9.86796 21.7371 10.3199 21.2775 10.8754 21.2775C11.4308 21.2775 11.8828 21.7371 11.8828 22.302C11.8828 22.867 11.4308 23.3265 10.8754 23.3265Z" />
              <path d="M18.8764 19.9824C17.6186 19.9824 16.5953 21.023 16.5953 22.3021C16.5953 23.5812 17.6186 24.6218 18.8764 24.6218C20.1342 24.6218 21.1575 23.5812 21.1575 22.3021C21.1574 21.023 20.1341 19.9824 18.8764 19.9824ZM18.8764 23.3265C18.3209 23.3265 17.869 22.8669 17.869 22.302C17.869 21.7371 18.3209 21.2775 18.8764 21.2775C19.4319 21.2775 19.8838 21.7371 19.8838 22.302C19.8838 22.867 19.4319 23.3265 18.8764 23.3265Z" />
              <path d="M19.438 7.76947H10.3122C9.96051 7.76947 9.67542 8.0594 9.67542 8.41707C9.67542 8.77474 9.96056 9.06467 10.3122 9.06467H19.438C19.7897 9.06467 20.0748 8.77474 20.0748 8.41707C20.0748 8.05935 19.7897 7.76947 19.438 7.76947Z" />
              <path d="M18.9414 11.1324H10.8089C10.4572 11.1324 10.1721 11.4223 10.1721 11.78C10.1721 12.1377 10.4572 12.4276 10.8089 12.4276H18.9413C19.293 12.4276 19.5781 12.1377 19.5781 11.78C19.5781 11.4224 19.293 11.1324 18.9414 11.1324Z" />
              <path d="M25.6499 4.88404C25.407 4.58092 25.0472 4.40711 24.6626 4.40711H4.82655L4.42595 2.42947C4.34232 2.01694 4.06563 1.67055 3.68565 1.50276L0.890528 0.268963C0.567841 0.126419 0.192825 0.276999 0.0528584 0.60505C-0.0872597 0.933204 0.0608116 1.31463 0.383347 1.45696L3.17852 2.69081L6.2598 17.9014C6.38117 18.5004 6.90578 18.9352 7.50723 18.9352H22.7635C23.1152 18.9352 23.4003 18.6452 23.4003 18.2876C23.4003 17.9299 23.1152 17.64 22.7635 17.64H7.50728L7.13247 15.7897H22.8814C23.4828 15.7897 24.0075 15.3549 24.1288 14.7559L25.9101 5.96349C25.9876 5.58063 25.8928 5.1871 25.6499 4.88404ZM22.8814 14.4946H6.87012L5.08895 5.70226L24.6626 5.70231L22.8814 14.4946Z" />
            </svg>{" "}
            Add to Cart
          </button>

          <hr className="my-8" />
          <h6 className="text-xl font-semibold mb-4">About the product</h6>
          {data.description ? ReactHtmlParser(data.description) : ""}
        </div>
      </div>
    </section>
  );
}
