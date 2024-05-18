import React from "react";
import { Link } from "react-router-dom";
import { FaCalendarAlt } from "react-icons/fa";
import NoImage from "/NoImage.webp";
import "./TrendingCards.css"; // Import CSS file for component styling

function TrendingCards({ data }) {
  return (
    <div className="trending-cards-container">
      <div className="trending-cards-list">
        {data.map((item, id) => (
          <Link
            key={id}
            to={`/${item.media_type}/details/${item.id}`} // Example: Link to details page
            className="trending-card"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)), url(https://image.tmdb.org/t/p/original/${
                item.backdrop_path || item.poster_path
              })`,
            }}
          >
            <div className="trending-card-content">
              <h2 className="trending-card-title">
                {item.name || item.original_title}
              </h2>
              <div className="trending-card-info">
                <p className="media-type">{item.media_type}</p>
                <p className="rating">{item.adult ? <NoImage /> : "PG"}</p>
              </div>
              <p className="release-date">
                <FaCalendarAlt />
                {item.release_date || item.first_air_date}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default TrendingCards;

// import React, { useState } from "react";    //Problem here was that during rerendering of image react was throwing an error saying make separate CSS
// import { Link } from "react-router-dom";
// import { FaCalendarAlt } from "react-icons/fa";
// import NoImage from "/NoImage.webp";

// function TrendingCards({ data }) {
//   return (
//     <div className="w-full h-[45%] px-10 py-1">
//       <div className="w-full h-full flex overflow-x-auto gap-5 relative ">
//         {data.map((item, id) => (
//           <Link
//             key={id}
//             style={{
//               background: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.7),rgba(0,0,0,0.9)),url(https://image.tmdb.org/t/p/original/${
//                 item.backdrop_path || item.poster_path
//               })`,
//               backgroundPosition: "50% 15%",
//               backgroundSize: "cover",
//             }}
//             className="w-[20vw] h-[20vw] relative opacity-[0.7] hover:opacity-[1] rounded-md"
//           >
//             <div className="flex w-[15vw] flex-col h-full justify-end p-2">
//               <h2 className="text-white font-bold text-[0.9vw]">
//                 {item.name || item.original_title}
//               </h2>
//               <div className="flex gap-2">
//                 <p className="text-white uppercase text-sm">
//                   {item.media_type}
//                 </p>
//                 {item.adult ? (
//                   <p className="text-white">
//                     <NoImage />
//                   </p>
//                 ) : (
//                   <p className="text-white text-sm">PG</p>
//                 )}
//               </div>
//               <p className="text-white flex gap-2 items-center text-sm">
//                 <FaCalendarAlt />
//                 {item.release_date || item.first_air_date}
//               </p>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default TrendingCards;
