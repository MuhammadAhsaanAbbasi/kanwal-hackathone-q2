

// "use client;"

// import React, { useState, useEffect } from "react";
// import { FaStar } from "react-icons/fa";
// import { client } from "../../sanity/lib/client";

// const Reviews = ({ productId }) => {
//   const [reviews, setReviews] = useState([]);
//   const [averageRating, setAverageRating] = useState(0);
//   const [newReview, setNewReview] = useState({
//     rating: 0,
//     text: "",
//   });
//   const [hoveredRating, setHoveredRating] = useState(0);
//   const [filter, setFilter] = useState("all");

//   useEffect(() => {
//     const fetchReviews = async () => {
//       try {
//         const query = `*[_type == "review" && product._ref == "${productId}"] | order(date desc) {
//           _id, user, rating, text, date
//         }`;
//         const reviewsData = await client.fetch(query);
//         setReviews(reviewsData);

//         if (reviewsData.length > 0) {
//           const totalRating = reviewsData.reduce((acc, review) => acc + review.rating, 0);
//           setAverageRating(totalRating / reviewsData.length);
//         } else {
//           setAverageRating(0);
//         }
//       } catch (error) {
//         console.error("Error fetching reviews:", error);
//       }
//     };

//     fetchReviews();
//   }, [productId]);

//   const handleReviewSubmit = async () => {
//     try {
//       if (newReview.rating > 0 && newReview.text.length > 0 && newReview.text.length <= 100) {
//         const reviewToSubmit = {
//           _type: "review",
//           product: { _ref: productId, _type: "reference" },
//           rating: newReview.rating,
//           text: newReview.text,
//           date: new Date().toISOString(),
//         };

//         await client.create(reviewToSubmit);

//         const updatedReviews = await client.fetch(
//           `*[_type == "review" && product._ref == "${productId}"] | order(date desc) {
//             _id, user, rating, text, date
//           }`
//         );
//         setReviews(updatedReviews);
//         setNewReview({ rating: 0, text: "" });

//         const totalRating = updatedReviews.reduce((acc, review) => acc + review.rating, 0);
//         setAverageRating(totalRating / updatedReviews.length);
//       }
//     } catch (error) {
//       console.error("Error submitting review:", error);
//     }
//   };

//   const filteredReviews = () => {
//     if (filter === "recent") {
//       return reviews.filter(review => new Date(review.date).getFullYear() === new Date().getFullYear());
//     } else if (filter === "new") {
//       return reviews.slice(0, 1);
//     }
//     return reviews;
//   };

//   return (
//     <div className="reviews-container max-w-4xl mx-auto p-6 space-y-6">
//       <h2 className="text-2xl sm:text-lg font-semibold text-gray-800 mb-4">Customer Reviews</h2>

//       {/* ✅ Filter Buttons - Aligned in a Single Line */}
//       <div className="flex sm:flex-row  justify-center sm:justify-start gap-1 sm:gap-1 mb-4">
//         {["all", "recent", "new"].map((type, index) => (
//           <button
//             key={index}
//             className={`px-4 py-2 text-xs sm:text-sm  rounded-md transition duration-300 ease-in-out 
//               ${filter === type ? "bg-blue-900 text-white" : "bg-orange-600 text-white hover:bg-orange-700"}`}
//             onClick={() => setFilter(type)}
//           >
//             {type === "all" ? "All Reviews" : type === "recent" ? "Recent Comments" : "New Comments"}
//           </button>
//         ))}
//       </div>

//       {/* ✅ Average Rating Display */}
//       <div className="flex items-center space-x-2">
//         <span className="text-lg sm:text-base font-semibold text-blue-700">Average Rating:</span>
//         <span className="text-xl sm:text-lg font-bold text-yellow-500">
//           {reviews.length > 0 ? averageRating.toFixed(1) : "No ratings yet"}
//         </span>
//         <div className="flex">
//           {[...Array(5)].map((_, i) => (
//             <FaStar key={i} className={i < Math.round(averageRating) ? "text-yellow-500" : "text-gray-300"} />
//           ))}
//         </div>
//       </div> 

//       {/* ✅ Reviews List */}
//       <div className="reviews-list space-y-4">
//         {filteredReviews().length > 0 ? (
//           filteredReviews().map((review, index) => (
//             <div key={index} className="review flex flex-wrap sm:flex-nowrap items-start space-x-4 bg-gray-50 p-4 rounded-lg shadow-sm">
//               <div className="w-12 h-12 rounded-full bg-blue-900 flex items-center justify-center">
//                 <span className="text-white lg-text-xl sm:text-[14px]">User</span>
//               </div>
//               <div className="review-details flex-1">
//                 <div className="flex items-center space-x-1">
//                   {[...Array(5)].map((_, i) => (
//                     <FaStar key={i} className={i < review.rating ? "text-yellow-500" : "text-gray-300"} />
//                   ))}
//                 </div>
//                 <p className="mt-2 text-sm sm:text-base text-gray-800">{review.text}</p>
//                 <small className="block text-sm sm:text-xs text-gray-500 mt-1">
//                   {new Date(review.date).toLocaleDateString()}
//                 </small>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className="text-gray-500">No reviews yet. Be the first to review!</p>
//         )}
//       </div>

//       {/* ✅ New Review Form */}
//       <div className="review-form mt-6 p-4 bg-gray-50 rounded-lg shadow-sm">
//         <h3 className="text-xl sm:text-lg font-semibold text-gray-800 mb-4">Add Your Review</h3>

//         {/* Rating Stars */}
//         <div className="rating flex items-center space-x-2 my-4" onMouseLeave={() => setHoveredRating(0)}>
//           {[...Array(5)].map((_, i) => (
//             <FaStar
//               key={i}
//               className={`cursor-pointer 
//                 ${i < (hoveredRating || newReview.rating) ? "text-yellow-500" : "text-gray-300"} 
//                 hover:text-yellow-500`}
//               onClick={() => setNewReview({ ...newReview, rating: i + 1 })}
//               onMouseEnter={() => setHoveredRating(i + 1)}
//               onMouseLeave={() => setHoveredRating(0)}
//             />
//           ))}
//         </div>

//         {/* Review Text */}
//         <textarea
//           className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
//           placeholder="Write your review here (max 100 characters)"
//           maxLength={100}
//           value={newReview.text}
//           onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
//         ></textarea>

//         {/* Submit Button */}
//         <div className="flex justify-between items-center mt-4">
//           <button className="px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-700" onClick={handleReviewSubmit}>
//             Submit Review
//           </button>
//           <span className="text-xs sm:text-sm text-gray-500">{newReview.text.length}/100</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Reviews;



"use client";

import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { client } from "../sanity/lib/client";

const Reviews = ({ productId }) => {
  const [reviews, setReviews] = useState([]);
  const [averageRating, setAverageRating] = useState(0);
  const [newReview, setNewReview] = useState({
    rating: 0,
    text: "",
  });
  const [hoveredRating, setHoveredRating] = useState(0);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const query = `*[_type == "review" && product._ref == "${productId}"] | order(date desc) {
          _id, user, rating, text, date
        }`;
        const reviewsData = await client.fetch(query);
        setReviews(reviewsData);

        if (reviewsData.length > 0) {
          const totalRating = reviewsData.reduce((acc, review) => acc + review.rating, 0);
          setAverageRating(totalRating / reviewsData.length);
        } else {
          setAverageRating(0);
        }
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, [productId]);

  const handleReviewSubmit = async () => {
    try {
      if (newReview.rating > 0 && newReview.text.length > 0 && newReview.text.length <= 100) {
        const reviewToSubmit = {
          _type: "review",
          product: { _ref: productId, _type: "reference" },
          rating: newReview.rating,
          text: newReview.text,
          date: new Date().toISOString(),
        };

        await client.create(reviewToSubmit);

        const updatedReviews = await client.fetch(
          `*[_type == "review" && product._ref == "${productId}"] | order(date desc) {
            _id, user, rating, text, date
          }`
        );
        setReviews(updatedReviews);
        setNewReview({ rating: 0, text: "" });

        const totalRating = updatedReviews.reduce((acc, review) => acc + review.rating, 0);
        setAverageRating(totalRating / updatedReviews.length);
      }
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };

  const filteredReviews = () => {
    if (filter === "recent") {
      return reviews.filter(review => new Date(review.date).getFullYear() === new Date().getFullYear());
    } else if (filter === "new") {
      return reviews.slice(0, 1);
    }
    return reviews;
  };

  return (
    <div className="reviews-container max-w-4xl mx-auto p-6 space-y-6">
      <h2 className="text-2xl sm:text-lg font-semibold text-gray-800 mb-4">Customer Reviews</h2>

      {/* ✅ Filter Buttons - Aligned in a Single Line */}
      <div className="flex sm:flex-row  justify-center sm:justify-start gap-1 sm:gap-1 mb-4">
        {["all", "recent", "new"].map((type, index) => (
          <button
            key={index}
            className={`px-4 py-2 text-xs sm:text-sm  rounded-md transition duration-300 ease-in-out 
              ${filter === type ? "bg-blue-900 text-white" : "bg-orange-600 text-white hover:bg-orange-700"}`}
            onClick={() => setFilter(type)}
          >
            {type === "all" ? "All Reviews" : type === "recent" ? "Recent Comments" : "New Comments"}
          </button>
        ))}
      </div>

      {/* ✅ Average Rating Display */}
      <div className="flex items-center space-x-2">
        <span className="text-lg sm:text-base font-semibold text-blue-700">Average Rating:</span>
        <span className="text-xl sm:text-lg font-bold text-yellow-500">
          {reviews.length > 0 ? averageRating.toFixed(1) : "No ratings yet"}
        </span>
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className={i < Math.round(averageRating) ? "text-yellow-500" : "text-gray-300"} />
          ))}
        </div>
      </div> 

      {/* ✅ Reviews List */}
      <div className="reviews-list space-y-4">
        {filteredReviews().length > 0 ? (
          filteredReviews().map((review, index) => (
            <div key={index} className="review flex flex-wrap sm:flex-nowrap items-start space-x-4 bg-gray-50 p-4 rounded-lg shadow-sm">
              <div className="w-12 h-12 rounded-full bg-blue-900 flex items-center justify-center">
                <span className="text-white lg-text-xl sm:text-[14px]">User</span>
              </div>
              <div className="review-details flex-1">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={i < review.rating ? "text-yellow-500" : "text-gray-300"} />
                  ))}
                </div>
                <p className="mt-2 text-sm sm:text-base text-gray-800">{review.text}</p>
                <small className="block text-sm sm:text-xs text-gray-500 mt-1">
                  {new Date(review.date).toLocaleDateString()}
                </small>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No reviews yet. Be the first to review!</p>
        )}
      </div>

      {/* ✅ New Review Form */}
      <div className="review-form mt-6 p-4 bg-gray-50 rounded-lg shadow-sm">
        <h3 className="text-xl sm:text-lg font-semibold text-gray-800 mb-4">Add Your Review</h3>

        {/* Rating Stars */}
        <div className="rating flex items-center space-x-2 my-4" onMouseLeave={() => setHoveredRating(0)}>
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={`cursor-pointer 
                ${i < (hoveredRating || newReview.rating) ? "text-yellow-500" : "text-gray-300"} 
                hover:text-yellow-500`}
              onClick={() => setNewReview({ ...newReview, rating: i + 1 })}
              onMouseEnter={() => setHoveredRating(i + 1)}
              onMouseLeave={() => setHoveredRating(0)}
            />
          ))}
        </div>

        {/* Review Text */}
        <textarea
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
          placeholder="Write your review here (max 100 characters)"
          maxLength={100}
          value={newReview.text}
          onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
        ></textarea>

        {/* Submit Button */}
        <div className="flex justify-between items-center mt-4">
          <button className="px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-700" onClick={handleReviewSubmit}>
            Submit Review
          </button>
          <span className="text-xs sm:text-sm text-gray-500">{newReview.text.length}/100</span>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
