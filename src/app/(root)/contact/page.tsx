// // import React from "react";
// // import { HiLocationMarker } from "react-icons/hi"; // Importing a location icon

// // const MapLinkComponent: React.FC = () => {
// //   return (
// //     <div className="flex flex-col items-center w-full bg-[#f9f9f9] py-10">
// //       <h2 className="text-xl sm:text-2xl font-semibold text-[#2A254B] mb-4">
// //         Visit Abdullah Fast Food
// //       </h2>

// //       <div className="relative w-full max-w-[600px] mb-6">
// //         {/* Use a regular img tag instead of next/image */}
// //         <img
// //           src="https://maps.googleapis.com/maps/api/staticmap?center=24.8187749,67.043799&zoom=17&size=600x400&markers=color:red|24.8187749,67.043799&key=YOUR_GOOGLE_MAPS_API_KEY"
// //           alt="Abdullah Fast Food Location"
// //           className="rounded-lg shadow-md"
// //         />
// //       </div>

// //       <a
// //         href="https://www.google.com/maps/place/Abdullah+Fast+Food/@24.8187749,67.043799,17z/data=!3m1!4b1!4m6!3m5!1s0x3eb33d8c1f9717e9:0xcbb716672bee3a5a!8m2!3d24.8187749!4d67.043799!16s%2Fg%2F11fkl9j63n?entry=ttu&g_ep=EgoyMDI1MDExNS4wIKXMDSoASAFQAw%3D%3D"
// //         target="_blank"
// //         rel="noopener noreferrer"
// //         className="flex items-center gap-2 px-4 py-2 bg-[#2A254B] text-white rounded-md shadow-lg hover:bg-[#3a2f6b] transition duration-300"
// //       >
// //         <HiLocationMarker className="text-lg" />
// //         <span>Get Directions on Google Maps</span>
// //       </a>
// //     </div>
// //   );
// // };

// // export default MapLinkComponent;

// // "use client"
   
// // import React, { useState } from "react";

// // const ContactForm: React.FC = () => {
// //   const [name, setName] = useState("");
// //   const [message, setMessage] = useState("");

// //   const handleSubmit = (e: React.FormEvent) => {
// //     e.preventDefault(); // Prevent the default form submission behavior

// //     // Construct the mailto link
// //     const mailtoLink = `mailto:sammjoel88@gmail.com?subject=Message%20from%20${encodeURIComponent(
// //       name
// //     )}&body=${encodeURIComponent(message)}`;

// //     // Open the user's email client with the mailto link
// //     window.location.href = mailtoLink;
// //   };

// //   return (
// //     <div className="flex flex-col items-center w-full bg-[#f9f9f9] py-10">
// //       <h2 className="text-xl sm:text-2xl font-semibold text-[#2A254B] mb-6">
// //         Contact Us
// //       </h2>
// //       <form
// //         onSubmit={handleSubmit}
// //         className="w-full max-w-[500px] bg-white p-6 rounded-lg shadow-md"
// //       >
// //         {/* Name Field */}
// //         <div className="mb-4">
// //           <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
// //             Name
// //           </label>
// //           <input
// //             type="text"
// //             id="name"
// //             value={name}
// //             onChange={(e) => setName(e.target.value)}
// //             required
// //             placeholder="Enter your name"
// //             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
// //           />
// //         </div>

// //         {/* Message Field */}
// //         <div className="mb-4">
// //           <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
// //             Message
// //           </label>
// //           <textarea
// //             id="message"
// //             value={message}
// //             onChange={(e) => setMessage(e.target.value)}
// //             required
// //             placeholder="Enter your message"
// //             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 h-32 resize-none"
// //           />
// //         </div>

// //         {/* Submit Button */}
// //         <button
// //           type="submit"
// //           className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-indigo-600 transition duration-300"
// //         >
// //           Send Message
// //         </button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default ContactForm;

// "use client";

// import React, { useState } from "react";
// import TopNav from "../components/nav";

// const ContactFormWithMap: React.FC = () => {
//   const [name, setName] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     const mailtoLink = `mailto:sammjoel88@gmail.com?subject=Message%20from%20${encodeURIComponent(
//       name
//     )}&body=${encodeURIComponent(message)}`;
//     window.location.href = mailtoLink;
//   };

//   return (
//     <div className="flex flex-col items-center w-full bg-[#f9f9f9] py-10 px-4">
//       <TopNav />
//       <h2 className="text-xl sm:text-2xl font-semibold text-[#2A254B] mt-6 mb-8 text-center font-clash">
//         Contact Us
//       </h2>
//       <div className="container flex flex-wrap lg:flex-nowrap items-start justify-between gap-8 max-w-6xl">
//         {/* Contact Form */}
//         <form
//           onSubmit={handleSubmit}
//           className="w-full lg:w-1/2 bg-white p-6 rounded-lg shadow-md"
//         >
//           {/* Name Field */}
//           <div className="mb-6">
//             <label
//               htmlFor="name"
//               className="block text-sm font-medium text-gray-700 mb-1 font-satoshi"
//             >
//               Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//               placeholder="Enter your name"
//               className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2A254B] text-gray-900"
//             />
//           </div>

//           {/* Message Field */}
//           <div className="mb-6">
//             <label
//               htmlFor="message"
//               className="block text-sm font-medium text-gray-700 mb-1"
//             >
//               Message
//             </label>
//             <textarea
//               id="message"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               required
//               placeholder="Enter your message"
//               className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2A254B] h-32 resize-none text-blue-"
//             />
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-[#2A254B] text-white py-3 px-4 rounded-md shadow-md hover:bg-[#3a2f6b] transition duration-300 text-center text-sm sm:text-base  font-satoshi"
//           >
//             Send Message
//           </button>
//         </form>

//         {/* Map Section */}
//         <div className="w-full lg:w-1/2 rounded-lg overflow-hidden shadow-md">
//           <iframe
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.0660366667034!2d67.01761267544592!3d24.861594077928526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33d8c1f9717e9%3A0xcbb716672bee3a5a!2sAbdullah%20Fast%20Food!5e0!3m2!1sen!2s!4v1734538991269!5m2!1sen!2s"
//             width="100%"
//             height="400"
//             style={{ border: 0 }}
//             allowFullScreen
//             loading="lazy"
//             title="Google Maps Location"
//           ></iframe>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactFormWithMap;


"use client";

import React, { useState } from "react";
import TopNav from "../../../components/nav";

const ContactFormWithMap: React.FC = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const mailtoLink = `mailto:sammjoel88@gmail.com?subject=Message%20from%20${encodeURIComponent(
      name
    )}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;

    // Clear the form fields after submission
    setName("");
    setMessage("");

    // Show the success popup
    setShowSuccessPopup(true);

    // Hide the success popup after 3 seconds
    setTimeout(() => {
      setShowSuccessPopup(false);
    }, 3000);
  };

  return (
    <div className="flex flex-col items-center w-full bg-[#f9f9f9] py-10 px-4">
      <TopNav />
      <h2 className="text-xl sm:text-2xl font-semibold text-[#2A254B] mt-6 mb-8 text-center font-clash">
        Contact Us
      </h2>
      <div className="container flex flex-wrap lg:flex-nowrap items-start justify-between gap-8 max-w-6xl">
        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full lg:w-1/2 bg-white p-6 rounded-lg shadow-md"
        >
          {/* Name Field */}
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1 font-satoshi"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Enter your name"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2A254B] text-gray-900"
            />
          </div>

          {/* Message Field */}
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              placeholder="Enter your message"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2A254B] h-32 resize-none text-blue-950"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#2A254B] text-white py-3 px-4 rounded-md shadow-md hover:bg-[#3a2f6b] transition duration-300 text-center text-sm sm:text-base  font-satoshi"
          >
            Send Message
          </button>
        </form>

        {/* Map Section */}
        <div className="w-full lg:w-1/2 rounded-lg overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.0660366667034!2d67.01761267544592!3d24.861594077928526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33d8c1f9717e9%3A0xcbb716672bee3a5a!2sAbdullah%20Fast%20Food!5e0!3m2!1sen!2s!4v1734538991269!5m2!1sen!2s"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Google Maps Location"
          ></iframe>
        </div>
      </div>

      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-md shadow-lg max-w-sm text-center animate-moveSlow">
            <h3 className="text-lg font-semibold text-[#2A254B] mb-2 font-clash ">Thank you!😊</h3>
            <p className="text-yellow-600 font-satoshi">Your message has been sent successfully.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactFormWithMap;


