// import React, { useState, useEffect, useRef } from "react";
// import "./App.css";

// const options = [
//   "PML Holidays!",
//   "FOREX",
//   // "INSURANCE"
// ];

// const packageLinks = {
//   "Tropical Escape": [
//     {
//       label: "Andaman with Neil",
//       link: "https://pmlholidays.com/india-tour-packages/Andaman-with-Neil",
//     },
//     {
//       label: "Splendid Phuket",
//       link: "https://pmlholidays.com/international-holidays/Splendid-Phuket",
//     },
//     {
//       label: "Explore Phuket with Krabi",
//       link: "https://pmlholidays.com/international-holidays/Explore-Phuket-with-Krabi",
//     },
//     {
//       label: "Blissful Bali",
//       link: "https://pmlholidays.com/international-holidays/Blissful-Bali",
//     },
//     {
//       label: "Enchanting Mauritius",
//       link: "https://pmlholidays.com/international-holidays/Enchanting-Mauritius",
//     },
//   ],
//   "️Mountain Retreat": [
//     {
//       label: "Beautiful Khasi Hills",
//       link: "https://pmlholidays.com/india-tour-packages/Beautiful-Khasi-Hills-",
//     },
//     {
//       label: "Tops of Switzerland",
//       link: "https://pmlholidays.com/international-holidays/Tops-of-Switzerland",
//     },
//     {
//       label: "Hills of Shimla and Manali",
//       link: "https://pmlholidays.com/india-tour-packages/Hills-of-Shimla-and-Manali",
//     },
//     {
//       label: "Hill Stations of Maharashtra",
//       link: "https://pmlholidays.com/india-tour-packages/Hill-Stations-of-Maharashtra",
//     },
//     {
//       label: "Shimla Getaway",
//       link: "https://pmlholidays.com/india-tour-packages/Shimla-Getaway",
//     },
//   ],
//   "️City Lights & Luxury": [
//     {
//       label: "Ancient Civilizations Turkey",
//       link: "https://pmlholidays.com/international-holidays/-Ancient-Civilizations-Turkey",
//     },
//     {
//       label: "Sizzling Singapore",
//       link: "https://pmlholidays.com/international-holidays/Sizzling-Singapore",
//     },
//     {
//       label: "Golden Triangle Tours",
//       link: "https://pmlholidays.com/india-tour-packages/Golden-Triangle-Tours",
//     },
//     {
//       label: "Spectacular New Zealand",
//       link: "https://pmlholidays.com/international-holidays/Spectacular-New-Zealand",
//     },
//     {
//       label: "Europe Delight",
//       link: "https://pmlholidays.com/international-holidays/Europe-Delight",
//     },
//   ],
// };

// const languages = ["English", "Hindi"];

// const App = () => {
//   const [message, setMessage] = useState("");
//   const [chatHistory, setChatHistory] = useState([]);
//   const [isChatActive, setIsChatActive] = useState(false);
//   const [hasWelcomed, setHasWelcomed] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [conversationId, setConversationId] = useState(null);
//   const chatContainerRef = useRef(null);
//   const [selectedTopic, setSelectedTopic] = useState(null);
//   const [adventureOptions, setAdventureOptions] = useState([]);
//   const [packageOptions, setPackageOptions] = useState([]);
//   const [finalMessageShown, setFinalMessageShown] = useState(false);
//   const [selectedLanguage, setSelectedLanguage] = useState(null);
//   const [userName, setUserName] = useState("");
//   const [nameEntered, setNameEntered] = useState(false);
//   const [userMobile, setUserMobile] = useState("");
//   const [forexOptions, setForexOptions] = useState([]);
//   const [currencyOptions, setCurrencyOptions] = useState([]);
//   const [remittanceOptions, setRemittanceOptions] = useState([]);
//   const [showPincodeInput, setShowPincodeInput] = useState(false);
//   const [selectedForexOption, setSelectedForexOption] = useState(null);
//   const [hasEnteredPincode, setHasEnteredPincode] = useState(false);
//   const [hasClickedPackage, setHasClickedPackage] = useState(false);
//   const hasEnteredPincodeRef = useRef(false);
//   const hasClickedPackageRef = useRef(false);
//   const [subPackageLinks, setSubPackageLinks] = useState([]);
//   const [hasClickedSubPackage, setHasClickedSubPackage] = useState(false);
  

//   const logInteraction = async (eventType, data) => {
//     try {
//       const timestamp = new Date().toISOString();
//       await fetch("http://localhost:8000/log-interaction/", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           conversation_id: conversationId,
//           user_name: userName,
//           mobile_number: userMobile,
//           event_type: eventType,
//           metadata: data,
//           timestamp: timestamp,
//         }),
//       });

//       // Also send email for important events
//       // if (['click', 'submit', 'hover'].includes(eventType)) {
//       //   await fetch('http://localhost:8000/send-email/', {
//       //     method: 'POST',
//       //     headers: {
//       //       'Content-Type': 'application/json',
//       //       'Accept': 'application/json'
//       //     },
//       //     body: JSON.stringify({
//       //       conversation_id: conversationId,
//       //       recipient: "aasthaarya2004@gmail.com",
//       //       event_data: {
//       //         event_type: eventType,
//       //         ...data
//       //       }
//       //     }),
//       //   });
//       // }
//     } catch (error) {
//       console.error("Error logging interaction:", error);
//     }
//   };

//   useEffect(() => {
//     if (chatContainerRef.current) {
//       chatContainerRef.current.scrollTop =
//         chatContainerRef.current.scrollHeight;
//     }
//   }, [chatHistory]);

//   useEffect(() => {
//     const storedId = localStorage.getItem("conversationId");
//     if (!storedId) {
//       const newId = Date.now().toString();
//       localStorage.setItem("conversationId", newId);
//       setConversationId(newId);
//     } else {
//       setConversationId(storedId);
//     }
//   }, []);

//   useEffect(() => {
//     return () => {
//       console.log("🧹 Component is unmounting...");
//       console.log("Flags → ref.pincode:", hasEnteredPincodeRef.current);
//       // When component unmounts, send the full conversation log
//       // if (chatHistory.length > 0) {
//       if (
//         hasEnteredPincode ||
//         hasClickedSubPackage ||
//         hasEnteredPincodeRef.current
//       ) {
//         fetch("http://localhost:8000/send-email-summary/", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Accept: "application/json",
//           },
//           body: JSON.stringify({
//             conversation_id: conversationId,
//             recipient: "accounts2@paulfincap.com",
//           }),
//         }).catch((error) => {
//           console.error("Failed to send summary email:", error);
//         });
//       }
//     };
//   }, [chatHistory, conversationId]);
//   // }, [hasEnteredPincode, hasClickedPackage, chatHistory, conversationId]);

//   // const PAULBOT_TRIGGERS = [
//   //   "If you don't see what you're looking for, click on your preferred choice and explore more options on our website: PML Holidays Website. Our team will connect with you shortly to curate the perfect trip for you!",
//   //   "Thank you! We will contact you shortly."
//   // ];

//   const sendMessage = async (event) => {
//     event.preventDefault();
//     if (message.trim() === "") return;

//     setLoading(true);
//     setChatHistory((prevHistory) => [
//       ...prevHistory,
//       { sender: "user", text: message },
//     ]);

//     try {
//       const response = await fetch("http://localhost:8000/chat/", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           message,
//           role: "user",
//           conversation_id: conversationId,
//         }),
//       });

//       if (!response.ok) throw new Error("Error with API request");

//       const data = await response.json();

//       if (data.conversation_id && data.conversation_id !== conversationId) {
//         localStorage.setItem("conversationId", data.conversation_id);
//         setConversationId(data.conversation_id);
//       }

//       setChatHistory((prev) => [
//         ...prev,
//         { sender: "ai", text: data.response },
//       ]);
//       setMessage("");
//       setIsChatActive(true);
//       // if (PAULBOT_TRIGGERS.some(trigger => data.response.includes(trigger))) {
//       //   await fetch('http://localhost:8000/send-email-summary/', {
//       //     method: 'POST',
//       //     headers: {
//       //       'Content-Type': 'application/json',
//       //       'Accept': 'application/json'
//       //     },
//       //     body: JSON.stringify({
//       //       conversation_id: conversationId,
//       //       recipient: "aasthaarya2004@gmail.com" // replace with dynamic email if needed
//       //     }),
//       //   });
//       //   console.log("📧 Email summary triggered from frontend.");
//       // }
//     } catch (error) {
//       console.error("Error:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleOptionClick = async (option) => {
//     const newId = Date.now().toString();
//     localStorage.setItem("conversationId", newId);
//     setConversationId(newId);
//     await logInteraction("click", { topic: option });
//     setLoading(true);

//     if (option === "PML Holidays!") {
//       setChatHistory([
//         {
//           sender: "ai",
//           text: "Welcome to PML Holidays! Get ready to create unforgettable memories!",
//         },
//         {
//           sender: "ai",
//           text: "What kind of adventure are you looking for? Select from the options below:",
//         },
//       ]);
//       setAdventureOptions([
//         { label: "Solo Explorer", hover: "Discover world by own" },
//         { label: "Couple Goals", hover: "Romantic trip for two of you!" },
//         { label: "Family Vacations", hover: "Fun-filled trips for all ages!" },
//         { label: "BBF's Trip Adventures", hover: "Thrilling with besties!" },
//       ]);
//       setSelectedTopic("PML Holidays!");
//       setIsChatActive(true);
//       setHasWelcomed(true);
//       setMessage("");
//       setLoading(false);
//       return;
//     }

//     if (option === "FOREX") {
//       setChatHistory([
//         {
//           sender: "ai",
//           text: "Welcome to PML Forex! 💱 How can we assist you today?",
//         },
//         { sender: "ai", text: "Would you like to:" },
//       ]);
//       setForexOptions([
//         { label: "Buy currency", value: "buy" },
//         { label: "Sell currency", value: "sell" },
//         { label: "Send money abroad", value: "remittance" },
//       ]);
//       setSelectedTopic("FOREX");
//       setIsChatActive(true);
//       setHasWelcomed(true);
//       setMessage("");
//       setLoading(false);
//       return;
//     }

//     try {
//       const response = await fetch("http://localhost:8000/chat/", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           message: `Tell me about ${option}`,
//           role: "user",
//           conversation_id: conversationId,
//         }),
//       });

//       const data = await response.json();
//       setChatHistory([{ sender: "ai", text: data.response }]);
//       setIsChatActive(true);
//       setMessage("");
//     } catch (error) {
//       console.error("Error:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleAdventureClick = (option) => {
//     logInteraction("adventure_selected", { adventure: option.label });
//     setChatHistory((prev) => [
//       ...prev,
//       { sender: "user", text: option.label },
//       { sender: "ai", text: "Here are some of our most popular packages:" },
//     ]);
//     setAdventureOptions([]);
//     setPackageOptions([
//       { label: "Tropical Escape" },
//       { label: "️Mountain Retreat" },
//       { label: "️City Lights & Luxury" },
//     ]);
//     // setHasClickedPackage(true);
//     setSubPackageLinks([]);
//     setHasClickedPackage(true);
//   };

//   // const handlePackageClick = (packageLabel) => {
//   //   logInteraction("package_selected", { package: packageLabel });
//   //   setChatHistory(prev => [
//   //     ...prev,
//   //     { sender: 'user', text: `Clicked on ${link}` },
//   //     {
//   //       sender: 'ai',
//   //       text: <p>
//   //         If you don't see what you're looking for, click on your preferred choice and explore more
//   //         options on our website:{' '}
//   //         <a href="https://pmlholidays.com" target="_blank" rel="noopener noreferrer">
//   //           PML Holidays Website
//   //         </a>. Our team will connect with you shortly to curate
//   //         the perfect trip for you!
//   //       </p>
//   //     }
//   //   ]);
//   //   setPackageOptions([]);
//   //   setFinalMessageShown(true);
//   // };

// //   const handleSubPackageLinkClick = (pkg) => {
// //   logInteraction("sub_package_selected", {
// //     label: pkg.label,
// //     link: pkg.link,
// //   });
// //   setChatHistory((prev) => [
// //     ...prev,
// //     { sender: "user", text: `Clicked on ${pkg.label}` },
// //     {
// //       sender: "ai",
// //       text: (
// //         <p>
// //           If you don't see what you're looking for, click on your preferred
// //           choice and explore more options on our website:&nbsp;
// //           <a
// //             href="https://pmlholidays.com"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //           >
// //             PML Holidays Website
// //           </a>
// //           . Our team will connect with you shortly to curate the perfect
// //           trip for you!
// //         </p>
// //       ),
// //     },
// //   ]);
// //   setFinalMessageShown(true);
// //   setHasClickedSubPackage(true);
// //   window.open(pkg.link, "_blank", "noopener,noreferrer");
// // };

//   const handleSubPackageLinkClick = (pkg) => {
//   logInteraction("sub_package_selected", {
//     label: pkg.label,
//     link: pkg.link,
//   });

//   setChatHistory((prev) => [
//     ...prev,
//     { sender: "user", text: `Clicked on ${pkg.label}` },
//     {
//       sender: "ai",
//       text: (
//         <p>
//           If you don't see what you're looking for, click on your preferred choice and explore more options on our website:&nbsp;
//           <a href="https://pmlholidays.com" target="_blank" rel="noopener noreferrer">
//             PML Holidays Website
//           </a>
//           . Our team will connect with you shortly to curate the perfect trip for you!
//         </p>
//       ),
//     },
//   ]);
//   setFinalMessageShown(true);
//   setHasClickedSubPackage(true);

//   // Trigger the email API call HERE, synchronously, so it runs on click
//   fetch("http://localhost:8000/send-email-summary/", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//     body: JSON.stringify({
//       conversation_id: conversationId,
//       recipient: "accounts2@paulfincap.com",
//     }),
//   }).catch((error) => {
//     console.error("Failed to send summary email:", error);
//   });

//   window.open(pkg.link, "_blank", "noopener,noreferrer");
// };



//   const handlePackageClick = (packageLabel) => {
//     logInteraction("package_selected", { package: packageLabel });

//     // If the selected package has sub-links, show those instead of direct confirmation
//     if (packageLinks[packageLabel]) {
//       setChatHistory((prev) => [
//         ...prev,
//         { sender: "user", text: `Selected: ${packageLabel}` },
//         {
//           sender: "ai",
//           text: "Here are some holiday packages you can explore:",
//         },
//       ]);
//       setSubPackageLinks(packageLinks[packageLabel]);
//       setPackageOptions([]); // Hide main package options
//       // setFinalMessageShown(true); // Not showing final message yet
//       return;
//     }

//     // const handleSubPackageLinkClick = (pkg) => {
//     //   logInteraction("sub_package_selected", {
//     //     label: pkg.label,
//     //     link: pkg.link,
//     //   });
//     //   window.open(pkg.link, "_blank", "noopener,noreferrer");
//     //   setChatHistory((prev) => [
//     //     ...prev,
//     //     { sender: "user", text: `Clicked on ${pkg.label}` },
//     //     {
//     //       sender: "ai",
//     //       text: (
//     //         <p>
//     //           If you don't see what you're looking for, click on your preferred
//     //           choice and explore more options on our website:&nbsp;
//     //           <a
//     //             href="https://pmlholidays.com"
//     //             target="_blank"
//     //             rel="noopener noreferrer"
//     //           >
//     //             PML Holidays Website
//     //           </a>
//     //           . Our team will connect with you shortly to curate the perfect
//     //           trip for you!
//     //         </p>
//     //       ),
//     //     },
//     //   ]);
//     //   setFinalMessageShown(true);
//     //   setHasClickedPackage(true);
//     //   // Open the link in a new tab
//     //   // window.open(pkg.link, "_blank", "noopener,noreferrer");
//     // };

//     // Otherwise, default fallback (shouldn't happen with only these options)
//     setChatHistory((prev) => [
//       ...prev,
//       { sender: "user", text: `Clicked on ${packageLabel}` },
//       {
//         sender: "ai",
//         text: (
//           <p>
//             If you don't see what you're looking for, click on your preferred
//             choice and explore more options on our website:{" "}
//             <a
//               href="https://pmlholidays.com"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               PML Holidays Website
//             </a>
//             . Our team will connect with you shortly to curate the perfect trip
//             for you!
//           </p>
//         ),
//       },
//     ]);
//     setFinalMessageShown(true);
//   };

//   const handleForexOptionClick = (option) => {
//     logInteraction("forex_option_selected", { option: option.value });
//     setSelectedForexOption(option.value);

//     if (option.value === "remittance") {
//       setChatHistory((prev) => [
//         ...prev,
//         { sender: "user", text: option.label },
//         { sender: "ai", text: "Please select the type of remittance:" },
//       ]);
//       setRemittanceOptions([
//         { label: "Inward Remittance", value: "inward" },
//         { label: "Outward Remittance", value: "outward" },
//       ]);
//       setForexOptions([]);
//     } else {
//       setChatHistory((prev) => [
//         ...prev,
//         { sender: "user", text: option.label },
//         {
//           sender: "ai",
//           text: "Select which Currency you want to buy or sell:",
//         },
//       ]);
//       setCurrencyOptions([
//         { label: "USD", value: "USD" },
//         { label: "Euro", value: "EUR" },
//         { label: "CAD", value: "CAD" },
//         { label: "GBP", value: "GBP" },
//       ]);
//       setForexOptions([]);
//     }
//   };

//   const handleRemittanceOptionClick = (option) => {
//     logInteraction("remittance_option_selected", { option: option.value });
//     setChatHistory((prev) => [
//       ...prev,
//       { sender: "user", text: option.label },
//       { sender: "ai", text: "Select which Currency you want to send:" },
//     ]);
//     setCurrencyOptions([
//       { label: "USD", value: "USD" },
//       { label: "Euro", value: "EUR" },
//       { label: "CAD", value: "CAD" },
//       { label: "GBP", value: "GBP" },
//     ]);
//     setRemittanceOptions([]);
//   };

//   const handleCurrencyClick = (currency) => {
//     logInteraction("currency_selected", { currency: currency.value });
//     setChatHistory((prev) => [
//       ...prev,
//       { sender: "user", text: currency.label },
//       { sender: "ai", text: "Enter your pin code:" },
//     ]);
//     setCurrencyOptions([]);
//     setShowPincodeInput(true);
//   };

//   const handlePincodeSubmit = async (e) => {
//     e.preventDefault();
//     const pincode = message.trim();

//     if (!pincode) {
//       setChatHistory((prev) => [
//         ...prev,
//         { sender: "ai", text: "Please enter a valid pincode." },
//       ]);
//       // setHasEnteredPincode(true);
//       return;
//     }
//     // setHasEnteredPincode(true);
//     setLoading(true);
//     setChatHistory((prev) => [...prev, { sender: "user", text: pincode }]);
//     logInteraction("pincode_entered", { pincode });

//     try {
//       const serviceablePincodes = [
//         "380008",
//         "380015",
//         "380009",
//         "143102",
//         "133001",
//         "143001",
//         "144505",
//         "143505",
//         "142038",
//         "176219",
//         "151001",
//         "176077",
//         "462011",
//         "148101",
//         "151011",
//         "160022",
//         "682025",
//         "144205",
//         "176219",
//         "176219",
//         "151203",
//         "152001",
//         "144207",
//         "122001",
//         "144527",
//         "143521",
//         "146001",
//         "146001",
//         "500029",
//         "452001",
//         "142026",
//         "302001",
//         "180002",
//         "144066",
//         "141401",
//         "132001",
//         "175005",
//         "136118",
//         "141002",
//         "194101",
//         "144401",
//         "226001",
//         "146105",
//         "175131",
//         "160062",
//         "142001",
//         "400099",
//         "144040",
//         "110001",
//         "387001",
//         "110015",
//         "144514",
//         "136128",
//         "144410",
//         "144401",
//         "145001",
//         "147001",
//         "360005",
//         "140001",
//         "335001",
//         "174401",
//         "141104",
//         "395007",
//         "144203",
//         "143401",
//         "174303",
//         "144422",
//         "390007",
//         "140606",
//       ];

//       const isServiceable = serviceablePincodes.includes(pincode);
//       // setHasEnteredPincode(true);

//       if (isServiceable) {
//         // setHasEnteredPincode(true);
//         setChatHistory((prev) => [
//           ...prev,

//           { sender: "ai", text: "Thank you! We will contact you shortly. " },
//         ]);
//         setHasEnteredPincode(true);
//         hasEnteredPincodeRef.current = true;
//         console.log("✅ Pincode accepted, flag set");
//       } else {
//         setChatHistory((prev) => [
//           ...prev,
//           {
//             sender: "ai",
//             text: (
//               <p>
//                 We're sorry, but our Forex services are not available in your
//                 location at the moment. However, we'd love to assist you with
//                 Travel or Insurance services. Check them out here:{" "}
//                 <a
//                   href="https://www.paulmerchants.net/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-400 hover:underline"
//                 >
//                   Paul Merchants Website
//                 </a>
//               </p>
//             ),
//           },
//         ]);
//       }
//     } catch (error) {
//       console.error("Error checking pincode:", error);
//       setChatHistory((prev) => [
//         ...prev,
//         {
//           sender: "ai",
//           text: "There was an error processing your request. Please try again later.",
//         },
//       ]);
//     } finally {
//       setMessage("");
//       setLoading(false);
//       setShowPincodeInput(false);
//     }
//   };

//   const checkPincodeServiceability = async (pincode) => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         const firstDigit = parseInt(pincode.charAt(0));
//         resolve(firstDigit >= 1 && firstDigit <= 4);
//       }, 1000);
//     });
//   };

//   const handleLanguageSelect = (lang) => {
//     setSelectedLanguage(lang);
//     logInteraction("language_selected", { language: lang });
//   };

//   // const handleNameSubmit = (e) => {
//   //   e.preventDefault();
//   //   if (userName.trim()) {
//   //     logInteraction("name_submitted", { name: userName });
//   //     setNameEntered(true);
//   //     setHasWelcomed(true);
//   //   }
//   // };

//   const handleNameSubmit = async (e) => {
//     e.preventDefault();

//     if (userName.trim() && /^[6-9]\d{9}$/.test(userMobile)) {
//       await logInteraction("name_submitted", {
//         name: userName,
//         mobile: userMobile,
//       });
//       setNameEntered(true);
//       setHasWelcomed(true);
//     } else {
//       alert(
//         "Please enter a valid name and 10-digit mobile number starting with 6-9."
//       );
//     }
//   };

//   return (
//     <div className="bg-gradient-to-br from-purple-900 via-gray-950 to-black min-h-screen flex items-center justify-center py-10 px-4">
//       <div className="w-full max-w-[450px] h-[calc(100vh-4rem)] bg-opacity-90 bg-zinc-900 rounded-3xl shadow-2xl border border-zinc-800 p-6 sm:p-8 backdrop-blur-md flex flex-col">
//         <div className="flex items-center justify-between mb-6">
//           <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-widest animate-fade-in drop-shadow-md ml-[10px]">
//             PaulBot 🤖
//           </h1>
//         </div>

//         {!selectedLanguage ? (
//           <>
//             <h2 className="text-white text-lg font-semibold mb-4 ml-[20px] mr-[20px]">
//               Hi, Welcome to Paul Merchants. Choose the language:
//             </h2>
//             <div className="grid grid-cols-2 gap-4 mx-6">
//               {languages.map((lang, idx) => (
//                 <div
//                   key={idx}
//                   className="option-box"
//                   onClick={() => handleLanguageSelect(lang)}
//                 >
//                   {lang}
//                 </div>
//               ))}
//             </div>
//           </>
//         ) : !nameEntered ? (
//           <form
//             onSubmit={handleNameSubmit}
//             className="flex flex-col items-center space-y-4"
//           >
//             <input
//               type="text"
//               value={userName}
//               onChange={(e) => {
//                 const value = e.target.value;
//                 if (/^[a-zA-Z\s]*$/.test(value)) {
//                   setUserName(value);
//                 }
//               }}
//               placeholder="Enter your name"
//               className="px-6 py-4 rounded-2xl bg-zinc-800 border border-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white text-xl placeholder-gray-400 shadow-inner w-500px ml-[10px] mr-[10px] mb-[10px]"
//             />

//             <input
//               type="tel"
//               value={userMobile}
//               onChange={(e) => {
//                 const value = e.target.value;
//                 if (/^[0-9]{0,10}$/.test(value)) {
//                   setUserMobile(value);
//                 }
//               }}
//               placeholder="Enter your mobile number"
//               className="px-6 py-4 rounded-2xl bg-zinc-800 border border-zinc-500 focus:outline-none focus:ring-2 focus:ring-green-500 text-white text-xl placeholder-gray-400 shadow-inner w-500px ml-[10px] mr-[10px] mb-[10px]"
//             />

//             <button
//               type="submit"
//               className="option-box ml-[10px] mr-[10px] w-250px"
//             >
//               Submit
//             </button>
//           </form>
//         ) : !isChatActive && hasWelcomed ? (
//           <>
//             <h2 className="text-white text-lg font-semibold mb-4 ml-[20px] mr-[20px]">
//               What do you want to know about?
//             </h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               {options.map((option, idx) => (
//                 <div
//                   key={idx}
//                   className="option-box"
//                   onClick={() => handleOptionClick(option)}
//                   title={`Learn more about ${option}`}
//                 >
//                   {`${idx + 1}. ${option}`}
//                 </div>
//               ))}
//             </div>
//           </>
//         ) : (
//           <>
//             <div
//               ref={chatContainerRef}
//               className="overflow-y-auto flex-grow bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-xl p-5 space-y-6 border border-zinc-700 shadow-inner scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent"
//             >
//               {chatHistory.map((msg, index) => (
//                 <div
//                   key={index}
//                   className={`w-full flex ${
//                     msg.sender === "user" ? "justify-end" : "justify-start"
//                   } animate-fade-up`}
//                 >
//                   <div
//                     className={`${
//                       msg.sender === "user" ? "user-message" : "ai-message"
//                     } chat-bubble`}
//                   >
//                     <p>{msg.text}</p>
//                   </div>
//                 </div>
//               ))}

//               {loading && (
//                 <div className="flex justify-start animate-pulse">
//                   <div className="max-w-xs px-4 py-2 rounded-xl bg-gray-900 text-white shadow-md">
//                     AI is typing🤔
//                   </div>
//                 </div>
//               )}
//             </div>

//             {adventureOptions.length > 0 && (
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
//                 {adventureOptions.map((opt, idx) => (
//                   <div
//                     key={idx}
//                     className="option-box group relative"
//                     title={opt.hover}
//                     onClick={() => handleAdventureClick(opt)}
//                   >
//                     {opt.label}
//                     <span
//                       onMouseEnter={() =>
//                         logInteraction("hover", {
//                           label: opt.label,
//                           hoverText: opt.hover,
//                         })
//                       }
//                       className="absolute z-10 top-full mt-1 text-xs text-gray-300 opacity-0 group-hover:opacity-100"
//                     >
//                       {opt.hover}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             )}

//             {packageOptions.length > 0 && (
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
//                 {packageOptions.map((pkg, idx) => (
//                   <div
//                     key={idx}
//                     className="option-box"
//                     onClick={() => handlePackageClick(pkg.label)}
//                   >
//                     <a
//                       href={pkg.link}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       {pkg.label}
//                     </a>
//                   </div>
//                 ))}
//               </div>
//             )}

//             {/* {subPackageLinks.length > 0 && (
//   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
//     {subPackageLinks.map((pkg, idx) => (
//       <div
//         key={idx}
//         className="option-box"
//         onClick={() => handleSubPackageLinkClick(pkg)}
//         style={{ cursor: "pointer" }}
//       >
//         <a
//           href={pkg.link}
//           target="_blank"
//           rel="noopener noreferrer"
//           onClick={(e) => e.stopPropagation()} // prevent div onClick if the user clicks the link directly
//         >
//           {pkg.label}
//         </a>
//       </div>
//     ))}
//   </div>
// )} */}

//             {/* {subPackageLinks.length > 0 && (
//   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
//     {subPackageLinks.map((pkg, idx) => (
//       <div
//         key={idx}
//         className="option-box"
//         style={{ cursor: "pointer" }}
//         onClick={() => handleSubPackageLinkClick(pkg)}
//       >
//         <span>{pkg.label}</span>
//       </div>
//     ))}
//   </div>
// )} */}

//             {/* {subPackageLinks.length > 0 && (
//   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
//     {subPackageLinks.map((pkg, idx) => (
//       <a
//         key={idx}
//         href={pkg.link}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="option-box"
//         onClick={(e) => {
//           e.preventDefault();
//           handleSubPackageLinkClick(pkg);
//         }}
//       >
//         {pkg.label}
//       </a>
//     ))}
//   </div>
// )} */}

//             {/* {subPackageLinks.length > 0 && (
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
//                 {subPackageLinks.map((pkg, idx) => (
//                   <a
//                     key={idx}
//                     href={pkg.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="option-box"
//                     onClick={(e) => {
//                       e.preventDefault(); // Prevents the default navigation
//                       handleSubPackageLinkClick(pkg); // Does logging, updates state, and opens link
//                     }}
//                   >
//                     {pkg.label}
//                   </a>
//                 ))}
//               </div>
//             )} */}

// {subPackageLinks.length > 0 && (
//   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
//     {subPackageLinks.map((pkg, index) => (
//       <a
//         key={index}
//         href={pkg.link}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="option-box"
//         onClick={(e) => {
//           e.preventDefault();
//           handleSubPackageLinkClick(pkg);
//         }}
//       >
//         {pkg.label}
//       </a>
//     ))}
//   </div>
// )}

         

//             {forexOptions.length > 0 && (
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
//                 {forexOptions.map((opt, idx) => (
//                   <div
//                     key={idx}
//                     className="option-box"
//                     onClick={() => handleForexOptionClick(opt)}
//                   >
//                     {opt.label}
//                   </div>
//                 ))}
//               </div>
//             )}

//             {remittanceOptions.length > 0 && (
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
//                 {remittanceOptions.map((opt, idx) => (
//                   <div
//                     key={idx}
//                     className="option-box"
//                     onClick={() => handleRemittanceOptionClick(opt)}
//                   >
//                     {opt.label}
//                   </div>
//                 ))}
//               </div>
//             )}

//             {currencyOptions.length > 0 && (
//               <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-4">
//                 {currencyOptions.map((curr, idx) => (
//                   <div
//                     key={idx}
//                     className="option-box"
//                     onClick={() => handleCurrencyClick(curr)}
//                   >
//                     {curr.label}
//                   </div>
//                 ))}
//               </div>
//             )}

//             <form
//               onSubmit={showPincodeInput ? handlePincodeSubmit : sendMessage}
//               className="mt-4 flex flex-row items-center gap-4 animate-fade-in"
//             >
//               <input
//                 type={showPincodeInput ? "number" : "text"}
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//                 className="flex-grow px-10 py-10 ml-[10px] mr-[0px] rounded-2xl bg-zinc-950 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white text-xl placeholder-gray-400 shadow-inner"
//                 placeholder={
//                   showPincodeInput ? "Enter your pincode" : "Ask something..."
//                 }
//               />

//               <button
//                 type="submit"
//                 disabled={loading || !message.trim()}
//                 className="focus:outline-none bg-transparent p-0 m-0 border-none"
//               >
//                 <img
//                   src="/img.png"
//                   className="w-[55px] h-[80px] ml-[0px] mr-[10px] object-contain hover:scale-105 transition-transform duration-200"
//                   style={{
//                     border: "none",
//                     background: "transparent",
//                     padding: 0,
//                     margin: 0,
//                     boxShadow: "none",
//                   }}
//                   alt="Send"
//                 />
//               </button>
//             </form>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default App;










import React, { useState, useEffect, useRef } from "react";
import "./App.css";

const options = [
  "PML Holidays!",
  "FOREX",
  // "INSURANCE"
];

const packageLinks = {
  "Tropical Escape": [
    {
      label: "Andaman with Neil",
      link: "https://pmlholidays.com/india-tour-packages/Andaman-with-Neil",
    },
    {
      label: "Splendid Phuket",
      link: "https://pmlholidays.com/international-holidays/Splendid-Phuket",
    },
    {
      label: "Explore Phuket with Krabi",
      link: "https://pmlholidays.com/international-holidays/Explore-Phuket-with-Krabi",
    },
    {
      label: "Blissful Bali",
      link: "https://pmlholidays.com/international-holidays/Blissful-Bali",
    },
    {
      label: "Enchanting Mauritius",
      link: "https://pmlholidays.com/international-holidays/Enchanting-Mauritius",
    },
  ],
  "️Mountain Retreat": [
    {
      label: "Beautiful Khasi Hills",
      link: "https://pmlholidays.com/india-tour-packages/Beautiful-Khasi-Hills-",
    },
    {
      label: "Tops of Switzerland",
      link: "https://pmlholidays.com/international-holidays/Tops-of-Switzerland",
    },
    {
      label: "Hills of Shimla and Manali",
      link: "https://pmlholidays.com/india-tour-packages/Hills-of-Shimla-and-Manali",
    },
    {
      label: "Hill Stations of Maharashtra",
      link: "https://pmlholidays.com/india-tour-packages/Hill-Stations-of-Maharashtra",
    },
    {
      label: "Shimla Getaway",
      link: "https://pmlholidays.com/india-tour-packages/Shimla-Getaway",
    },
  ],
  "️City Lights & Luxury": [
    {
      label: "Ancient Civilizations Turkey",
      link: "https://pmlholidays.com/international-holidays/-Ancient-Civilizations-Turkey",
    },
    {
      label: "Sizzling Singapore",
      link: "https://pmlholidays.com/international-holidays/Sizzling-Singapore",
    },
    {
      label: "Golden Triangle Tours",
      link: "https://pmlholidays.com/india-tour-packages/Golden-Triangle-Tours",
    },
    {
      label: "Spectacular New Zealand",
      link: "https://pmlholidays.com/international-holidays/Spectacular-New-Zealand",
    },
    {
      label: "Europe Delight",
      link: "https://pmlholidays.com/international-holidays/Europe-Delight",
    },
  ],
};

const languages = ["Enter your details"];

const App = () => {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [isChatActive, setIsChatActive] = useState(false);
  const [hasWelcomed, setHasWelcomed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [conversationId, setConversationId] = useState(null);
  const chatContainerRef = useRef(null);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [adventureOptions, setAdventureOptions] = useState([]);
  const [packageOptions, setPackageOptions] = useState([]);
  const [finalMessageShown, setFinalMessageShown] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [userName, setUserName] = useState("");
  const [nameEntered, setNameEntered] = useState(false);
  const [userMobile, setUserMobile] = useState("");
  const [forexOptions, setForexOptions] = useState([]);
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [remittanceOptions, setRemittanceOptions] = useState([]);
  const [showPincodeInput, setShowPincodeInput] = useState(false);
  const [selectedForexOption, setSelectedForexOption] = useState(null);
  const [hasEnteredPincode, setHasEnteredPincode] = useState(false);
  const [hasClickedPackage, setHasClickedPackage] = useState(false);
  const hasEnteredPincodeRef = useRef(false);
  const hasClickedPackageRef = useRef(false);
  const [subPackageLinks, setSubPackageLinks] = useState([]);
  const [hasClickedSubPackage, setHasClickedSubPackage] = useState(false);
  const [showBackToPackages, setShowBackToPackages] = useState(false);

  const logInteraction = async (eventType, data) => {
    try {
      const timestamp = new Date().toISOString();
      await fetch("http://localhost:8000/log-interaction/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          conversation_id: conversationId,
          user_name: userName,
          mobile_number: userMobile,
          event_type: eventType,
          metadata: data,
          timestamp: timestamp,
        }),
      });

      // Also send email for important events
      // if (['click', 'submit', 'hover'].includes(eventType)) {
      //   await fetch('http://localhost:8000/send-email/', {
      //     method: 'POST',
      //     headers: {
      //       'Content-Type': 'application/json',
      //       'Accept': 'application/json'
      //     },
      //     body: JSON.stringify({
      //       conversation_id: conversationId,
      //       recipient: "aasthaarya2004@gmail.com",
      //       event_data: {
      //         event_type: eventType,
      //         ...data
      //       }
      //     }),
      //   });
      // }
    } catch (error) {
      console.error("Error logging interaction:", error);
    }
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory]);

  useEffect(() => {
    const storedId = localStorage.getItem("conversationId");
    if (!storedId) {
      const newId = Date.now().toString();
      localStorage.setItem("conversationId", newId);
      setConversationId(newId);
    } else {
      setConversationId(storedId);
    }
  }, []);

  useEffect(() => {
    return () => {
      console.log("🧹 Component is unmounting...");
      console.log("Flags → ref.pincode:", hasEnteredPincodeRef.current);
      // When component unmounts, send the full conversation log
      // if (chatHistory.length > 0) {
      if (
        hasEnteredPincode ||
        hasClickedSubPackage ||
        hasEnteredPincodeRef.current
      ) {
        fetch("http://localhost:8000/send-email-summary/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            conversation_id: conversationId,
            recipient: "accounts2@paulfincap.com",
          }),
        }).catch((error) => {
          console.error("Failed to send summary email:", error);
        });
      }
    };
  }, [chatHistory, conversationId]);
  // }, [hasEnteredPincode, hasClickedPackage, chatHistory, conversationId]);

  // const PAULBOT_TRIGGERS = [
  //   "If you don't see what you're looking for, click on your preferred choice and explore more options on our website: PML Holidays Website. Our team will connect with you shortly to curate the perfect trip for you!",
  //   "Thank you! We will contact you shortly."
  // ];

  const sendMessage = async (event) => {
    event.preventDefault();
    if (message.trim() === "") return;

    setLoading(true);
    setChatHistory((prevHistory) => [
      ...prevHistory,
      { sender: "user", text: message },
    ]);

    try {
      const response = await fetch("http://localhost:8000/chat/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message,
          role: "user",
          conversation_id: conversationId,
        }),
      });

      if (!response.ok) throw new Error("Error with API request");

      const data = await response.json();

      if (data.conversation_id && data.conversation_id !== conversationId) {
        localStorage.setItem("conversationId", data.conversation_id);
        setConversationId(data.conversation_id);
      }

      setChatHistory((prev) => [
        ...prev,
        { sender: "ai", text: data.response },
      ]);
      setMessage("");
      setIsChatActive(true);
      // if (PAULBOT_TRIGGERS.some(trigger => data.response.includes(trigger))) {
      //   await fetch('http://localhost:8000/send-email-summary/', {
      //     method: 'POST',
      //     headers: {
      //       'Content-Type': 'application/json',
      //       'Accept': 'application/json'
      //     },
      //     body: JSON.stringify({
      //       conversation_id: conversationId,
      //       recipient: "aasthaarya2004@gmail.com" // replace with dynamic email if needed
      //     }),
      //   });
      //   console.log("📧 Email summary triggered from frontend.");
      // }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleOptionClick = async (option) => {
    const newId = Date.now().toString();
    localStorage.setItem("conversationId", newId);
    setConversationId(newId);
    await logInteraction("click", { topic: option });
    setLoading(true);

    if (option === "PML Holidays!") {
      setChatHistory([
        {
          sender: "ai",
          text: "Welcome to PML Holidays! Get ready to create unforgettable memories!",
        },
        {
          sender: "ai",
          text: "What kind of adventure are you looking for? Select from the options below:",
        },
      ]);
      setAdventureOptions([
        { label: "Solo Explorer", hover: "Discover world by own" },
        { label: "Couple Goals", hover: "Romantic trip for two of you!" },
        { label: "Family Vacations", hover: "Fun-filled trips for all ages!" },
        { label: "BBF's Trip Adventures", hover: "Thrilling with besties!" },
      ]);
      setSelectedTopic("PML Holidays!");
      setIsChatActive(true);
      setHasWelcomed(true);
      setMessage("");
      setLoading(false);
      return;
    }

    if (option === "FOREX") {
      setChatHistory([
        {
          sender: "ai",
          text: "Welcome to PML Forex! 💱 How can we assist you today?",
        },
        { sender: "ai", text: "Would you like to:" },
      ]);
      setForexOptions([
        { label: "Buy currency", value: "buy" },
        { label: "Sell currency", value: "sell" },
        { label: "Send money abroad", value: "remittance" },
      ]);
      setSelectedTopic("FOREX");
      setIsChatActive(true);
      setHasWelcomed(true);
      setMessage("");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/chat/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: `Tell me about ${option}`,
          role: "user",
          conversation_id: conversationId,
        }),
      });

      const data = await response.json();
      setChatHistory([{ sender: "ai", text: data.response }]);
      setIsChatActive(true);
      setMessage("");
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAdventureClick = (option) => {
    logInteraction("adventure_selected", { adventure: option.label });
    setChatHistory((prev) => [
      ...prev,
      { sender: "user", text: option.label },
      { sender: "ai", text: "Here are some of our most popular packages:" },
    ]);
    setAdventureOptions([]);
    setPackageOptions([
      { label: "Tropical Escape" },
      { label: "️Mountain Retreat" },
      { label: "️City Lights & Luxury" },
    ]);
    // setHasClickedPackage(true);
    setSubPackageLinks([]);
    setHasClickedPackage(true);
  };

  // const handlePackageClick = (packageLabel) => {
  //   logInteraction("package_selected", { package: packageLabel });
  //   setChatHistory(prev => [
  //     ...prev,
  //     { sender: 'user', text: `Clicked on ${link}` },
  //     {
  //       sender: 'ai',
  //       text: <p>
  //         If you don't see what you're looking for, click on your preferred choice and explore more
  //         options on our website:{' '}
  //         <a href="https://pmlholidays.com" target="_blank" rel="noopener noreferrer">
  //           PML Holidays Website
  //         </a>. Our team will connect with you shortly to curate
  //         the perfect trip for you!
  //       </p>
  //     }
  //   ]);
  //   setPackageOptions([]);
  //   setFinalMessageShown(true);
  // };

//   const handleSubPackageLinkClick = (pkg) => {
//   logInteraction("sub_package_selected", {
//     label: pkg.label,
//     link: pkg.link,
//   });
//   setChatHistory((prev) => [
//     ...prev,
//     { sender: "user", text: `Clicked on ${pkg.label}` },
//     {
//       sender: "ai",
//       text: (
//         <p>
//           If you don't see what you're looking for, click on your preferred
//           choice and explore more options on our website:&nbsp;
//           <a
//             href="https://pmlholidays.com"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             PML Holidays Website
//           </a>
//           . Our team will connect with you shortly to curate the perfect
//           trip for you!
//         </p>
//       ),
//     },
//   ]);
//   setFinalMessageShown(true);
//   setHasClickedSubPackage(true);
//   window.open(pkg.link, "_blank", "noopener,noreferrer");
// };

    const handleBackToPackages = () => {
    setChatHistory((prev) => [
      ...prev,
      { sender: "user", text: "Back to packages" },
      { sender: "ai", text: "Please select one of the packages below:" },
    ]);
    setSubPackageLinks([]);
    setPackageOptions([
      { label: "Tropical Escape" },
      { label: "️Mountain Retreat" },
      { label: "️City Lights & Luxury" },
    ]);
    setFinalMessageShown(false);
    setShowBackToPackages(false);
  };
  
  const handleSubPackageLinkClick = (pkg) => {
  logInteraction("sub_package_selected", {
    label: pkg.label,
    link: pkg.link,
  });

  setChatHistory((prev) => [
    ...prev,
    { sender: "user", text: `Clicked on ${pkg.label}` },
    {
      sender: "ai",
      text: (
        <p>
          If you don't see what you're looking for, click on your preferred choice and explore more options on our website:&nbsp;
          <a href="https://pmlholidays.com" target="_blank" rel="noopener noreferrer">
            PML Holidays Website
          </a>
          . Our team will connect with you shortly to curate the perfect trip for you!
        </p>
      ),
    },
  ]);
  setFinalMessageShown(true);
  setHasClickedSubPackage(true);
  setShowBackToPackages(true); 

  // Trigger the email API call HERE, synchronously, so it runs on click
  fetch("http://localhost:8000/send-email-summary/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      conversation_id: conversationId,
      recipient: "accounts2@paulfincap.com",
    }),
  }).catch((error) => {
    console.error("Failed to send summary email:", error);
  });

  window.open(pkg.link, "_blank", "noopener,noreferrer");
};



  const handlePackageClick = (packageLabel) => {
    logInteraction("package_selected", { package: packageLabel });

    // If the selected package has sub-links, show those instead of direct confirmation
    if (packageLinks[packageLabel]) {
      setChatHistory((prev) => [
        ...prev,
        { sender: "user", text: `Selected: ${packageLabel}` },
        {
          sender: "ai",
          text: "Here are some holiday packages you can explore:",
        },
      ]);
      setSubPackageLinks(packageLinks[packageLabel]);
      setPackageOptions([]); // Hide main package options
      // setFinalMessageShown(true); // Not showing final message yet
      return;
    }




    // const handleSubPackageLinkClick = (pkg) => {
    //   logInteraction("sub_package_selected", {
    //     label: pkg.label,
    //     link: pkg.link,
    //   });
    //   window.open(pkg.link, "_blank", "noopener,noreferrer");
    //   setChatHistory((prev) => [
    //     ...prev,
    //     { sender: "user", text: `Clicked on ${pkg.label}` },
    //     {
    //       sender: "ai",
    //       text: (
    //         <p>
    //           If you don't see what you're looking for, click on your preferred
    //           choice and explore more options on our website:&nbsp;
    //           <a
    //             href="https://pmlholidays.com"
    //             target="_blank"
    //             rel="noopener noreferrer"
    //           >
    //             PML Holidays Website
    //           </a>
    //           . Our team will connect with you shortly to curate the perfect
    //           trip for you!
    //         </p>
    //       ),
    //     },
    //   ]);
    //   setFinalMessageShown(true);
    //   setHasClickedPackage(true);
    //   // Open the link in a new tab
    //   // window.open(pkg.link, "_blank", "noopener,noreferrer");
    // };

    // Otherwise, default fallback (shouldn't happen with only these options)
    setChatHistory((prev) => [
      ...prev,
      { sender: "user", text: `Clicked on ${packageLabel}` },
      {
        sender: "ai",
        text: (
          <p>
            If you don't see what you're looking for, click on your preferred
            choice and explore more options on our website:{" "}
            <a
              href="https://pmlholidays.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              PML Holidays Website
            </a>
            . Our team will connect with you shortly to curate the perfect trip
            for you!
          </p>
        ),
      },
    ]);
    setFinalMessageShown(true);
  };

  const handleForexOptionClick = (option) => {
    logInteraction("forex_option_selected", { option: option.value });
    setSelectedForexOption(option.value);

    if (option.value === "remittance") {
      setChatHistory((prev) => [
        ...prev,
        { sender: "user", text: option.label },
        { sender: "ai", text: "Please select the type of remittance:" },
      ]);
      setRemittanceOptions([
        { label: "Inward Remittance", value: "inward" },
        { label: "Outward Remittance", value: "outward" },
      ]);
      setForexOptions([]);
    } else {
      setChatHistory((prev) => [
        ...prev,
        { sender: "user", text: option.label },
        {
          sender: "ai",
          text: "Select which Currency you want to buy or sell:",
        },
      ]);
      setCurrencyOptions([
        { label: "USD", value: "USD" },
        { label: "Euro", value: "EUR" },
        { label: "CAD", value: "CAD" },
        { label: "GBP", value: "GBP" },
      ]);
      setForexOptions([]);
    }
  };

  const handleRemittanceOptionClick = (option) => {
    logInteraction("remittance_option_selected", { option: option.value });
    setChatHistory((prev) => [
      ...prev,
      { sender: "user", text: option.label },
      { sender: "ai", text: "Select which Currency you want to send:" },
    ]);
    setCurrencyOptions([
      { label: "USD", value: "USD" },
      { label: "Euro", value: "EUR" },
      { label: "CAD", value: "CAD" },
      { label: "GBP", value: "GBP" },
    ]);
    setRemittanceOptions([]);
  };

  const handleCurrencyClick = (currency) => {
    logInteraction("currency_selected", { currency: currency.value });
    setChatHistory((prev) => [
      ...prev,
      { sender: "user", text: currency.label },
      { sender: "ai", text: "Enter your pin code:" },
    ]);
    setCurrencyOptions([]);
    setShowPincodeInput(true);
  };

  const handlePincodeSubmit = async (e) => {
    e.preventDefault();
    const pincode = message.trim();

    if (!pincode) {
      setChatHistory((prev) => [
        ...prev,
        { sender: "ai", text: "Please enter a valid pincode." },
      ]);
      // setHasEnteredPincode(true);
      return;
    }
    // setHasEnteredPincode(true);
    setLoading(true);
    setChatHistory((prev) => [...prev, { sender: "user", text: pincode }]);
    logInteraction("pincode_entered", { pincode });

    try {
      const serviceablePincodes = [
        "380008",
        "380015",
        "380009",
        "143102",
        "133001",
        "143001",
        "144505",
        "143505",
        "142038",
        "176219",
        "151001",
        "176077",
        "462011",
        "148101",
        "151011",
        "160022",
        "682025",
        "144205",
        "176219",
        "176219",
        "151203",
        "152001",
        "144207",
        "122001",
        "144527",
        "143521",
        "146001",
        "146001",
        "500029",
        "452001",
        "142026",
        "302001",
        "180002",
        "144066",
        "141401",
        "132001",
        "175005",
        "136118",
        "141002",
        "194101",
        "144401",
        "226001",
        "146105",
        "175131",
        "160062",
        "142001",
        "400099",
        "144040",
        "110001",
        "387001",
        "110015",
        "144514",
        "136128",
        "144410",
        "144401",
        "145001",
        "147001",
        "360005",
        "140001",
        "335001",
        "174401",
        "141104",
        "395007",
        "144203",
        "143401",
        "174303",
        "144422",
        "390007",
        "140606",
      ];

      const isServiceable = serviceablePincodes.includes(pincode);
      // setHasEnteredPincode(true);

      if (isServiceable) {
        // setHasEnteredPincode(true);
        setChatHistory((prev) => [
          ...prev,

          { sender: "ai", text: "Thank you! We will contact you shortly. " },
        ]);
        setHasEnteredPincode(true);
        hasEnteredPincodeRef.current = true;
        console.log("✅ Pincode accepted, flag set");
      } else {
        setChatHistory((prev) => [
          ...prev,
          {
            sender: "ai",
            text: (
              <p>
                We're sorry, but our Forex services are not available in your
                location at the moment. However, we'd love to assist you with
                Travel or Insurance services. Check them out here:{" "}
                <a
                  href="https://www.paulmerchants.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Paul Merchants Website
                </a>
              </p>
            ),
          },
        ]);
      }
    } catch (error) {
      console.error("Error checking pincode:", error);
      setChatHistory((prev) => [
        ...prev,
        {
          sender: "ai",
          text: "There was an error processing your request. Please try again later.",
        },
      ]);
    } finally {
      setMessage("");
      setLoading(false);
      setShowPincodeInput(false);
    }
  };

  const checkPincodeServiceability = async (pincode) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const firstDigit = parseInt(pincode.charAt(0));
        resolve(firstDigit >= 1 && firstDigit <= 4);
      }, 1000);
    });
  };

  const handleLanguageSelect = (lang) => {
    setSelectedLanguage(lang);
    logInteraction("language_selected", { language: lang });
  };

  // const handleNameSubmit = (e) => {
  //   e.preventDefault();
  //   if (userName.trim()) {
  //     logInteraction("name_submitted", { name: userName });
  //     setNameEntered(true);
  //     setHasWelcomed(true);
  //   }
  // };

  const handleNameSubmit = async (e) => {
    e.preventDefault();

    if (userName.trim() && /^[6-9]\d{9}$/.test(userMobile)) {
      await logInteraction("name_submitted", {
        name: userName,
        mobile: userMobile,
      });
      setNameEntered(true);
      setHasWelcomed(true);
    } else {
      alert(
        "Please enter a valid name and 10-digit mobile number starting with 6-9."
      );
    }
  };

  return (
    <div className="bg-gradient-to-br from-purple-900 via-gray-950 to-black min-h-screen flex items-center justify-center py-10 px-4">
      <div className="w-full max-w-[450px] h-[calc(100vh-4rem)] bg-opacity-90 bg-zinc-900 rounded-3xl shadow-2xl border border-zinc-800 p-6 sm:p-8 backdrop-blur-md flex flex-col">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-widest animate-fade-in drop-shadow-md ml-[10px]">
            PaulBot 🤖
          </h1>
        </div>

        {!selectedLanguage ? (
          <>
            <h2 className="text-white text-lg font-semibold mb-4 ml-[20px] mr-[20px]">
              Hi, Welcome to Paul Merchants.
            </h2>
            <div className="grid grid-cols-2 gap-4 mx-6">
              {languages.map((lang, idx) => (
                <div
                  key={idx}
                  className="option-box"
                  onClick={() => handleLanguageSelect(lang)}
                >
                  {lang}
                </div>
              ))}
            </div>
          </>
        ) : !nameEntered ? (
          <form
            onSubmit={handleNameSubmit}
            className="flex flex-col items-center space-y-4"
          >
            <input
              type="text"
              value={userName}
              onChange={(e) => {
                const value = e.target.value;
                if (/^[a-zA-Z\s]*$/.test(value)) {
                  setUserName(value);
                }
              }}
              placeholder="Enter your name"
              className="px-6 py-4 rounded-2xl bg-zinc-800 border border-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white text-xl placeholder-gray-400 shadow-inner w-500px ml-[10px] mr-[10px] mb-[10px]"
            />

            <input
              type="tel"
              value={userMobile}
              onChange={(e) => {
                const value = e.target.value;
                if (/^[0-9]{0,10}$/.test(value)) {
                  setUserMobile(value);
                }
              }}
              placeholder="Enter your mobile number"
              className="px-6 py-4 rounded-2xl bg-zinc-800 border border-zinc-500 focus:outline-none focus:ring-2 focus:ring-green-500 text-white text-xl placeholder-gray-400 shadow-inner w-500px ml-[10px] mr-[10px] mb-[10px]"
            />

            <button
              type="submit"
              className="option-box ml-[10px] mr-[10px] w-250px"
            >
              Submit
            </button>
          </form>
        ) : !isChatActive && hasWelcomed ? (
          <>
            <h2 className="text-white text-lg font-semibold mb-4 ml-[20px] mr-[20px]">
              What do you want to know about?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {options.map((option, idx) => (
                <div
                  key={idx}
                  className="option-box"
                  onClick={() => handleOptionClick(option)}
                  title={`Learn more about ${option}`}
                >
                  {`${idx + 1}. ${option}`}
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <div
              ref={chatContainerRef}
              className="overflow-y-auto flex-grow bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-xl p-5 space-y-6 border border-zinc-700 shadow-inner scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent"
            >
              {chatHistory.map((msg, index) => (
                <div
                  key={index}
                  className={`w-full flex ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  } animate-fade-up`}
                >
                  <div
                    className={`${
                      msg.sender === "user" ? "user-message" : "ai-message"
                    } chat-bubble`}
                  >
                    <p>{msg.text}</p>
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex justify-start animate-pulse">
                  <div className="max-w-xs px-4 py-2 rounded-xl bg-gray-900 text-white shadow-md">
                    AI is typing🤔
                  </div>
                </div>
              )}
            </div>

            {adventureOptions.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                {adventureOptions.map((opt, idx) => (
                  <div
                    key={idx}
                    className="option-box group relative"
                    title={opt.hover}
                    onClick={() => handleAdventureClick(opt)}
                  >
                    {opt.label}
                    <span
                      onMouseEnter={() =>
                        logInteraction("hover", {
                          label: opt.label,
                          hoverText: opt.hover,
                        })
                      }
                      className="absolute z-10 top-full mt-1 text-xs text-gray-300 opacity-0 group-hover:opacity-100"
                    >
                      {opt.hover}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {packageOptions.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                {packageOptions.map((pkg, idx) => (
                  <div
                    key={idx}
                    className="option-box"
                    onClick={() => handlePackageClick(pkg.label)}
                  >
                    <a
                      href={pkg.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {pkg.label}
                    </a>
                  </div>
                ))}
              </div>
            )}

            {/* {subPackageLinks.length > 0 && (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
    {subPackageLinks.map((pkg, idx) => (
      <div
        key={idx}
        className="option-box"
        onClick={() => handleSubPackageLinkClick(pkg)}
        style={{ cursor: "pointer" }}
      >
        <a
          href={pkg.link}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()} // prevent div onClick if the user clicks the link directly
        >
          {pkg.label}
        </a>
      </div>
    ))}
  </div>
)} */}

            {/* {subPackageLinks.length > 0 && (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
    {subPackageLinks.map((pkg, idx) => (
      <div
        key={idx}
        className="option-box"
        style={{ cursor: "pointer" }}
        onClick={() => handleSubPackageLinkClick(pkg)}
      >
        <span>{pkg.label}</span>
      </div>
    ))}
  </div>
)} */}

            {/* {subPackageLinks.length > 0 && (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
    {subPackageLinks.map((pkg, idx) => (
      <a
        key={idx}
        href={pkg.link}
        target="_blank"
        rel="noopener noreferrer"
        className="option-box"
        onClick={(e) => {
          e.preventDefault();
          handleSubPackageLinkClick(pkg);
        }}
      >
        {pkg.label}
      </a>
    ))}
  </div>
)} */}

            {/* {subPackageLinks.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                {subPackageLinks.map((pkg, idx) => (
                  <a
                    key={idx}
                    href={pkg.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="option-box"
                    onClick={(e) => {
                      e.preventDefault(); // Prevents the default navigation
                      handleSubPackageLinkClick(pkg); // Does logging, updates state, and opens link
                    }}
                  >
                    {pkg.label}
                  </a>
                ))}
              </div>
            )} */}

{subPackageLinks.length > 0 && (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
    {subPackageLinks.map((pkg, index) => (
      <a
        key={index}
        href={pkg.link}
        target="_blank"
        rel="noopener noreferrer"
        className="option-box"
        onClick={(e) => {
          e.preventDefault();
          handleSubPackageLinkClick(pkg);
        }}
      >
        {pkg.label}
      </a>
    ))}
        {showBackToPackages && (
      <button
        onClick={handleBackToPackages}
        className="option-box text-center bg-gray-700 hover:bg-gray-600 transition rounded-xl mt-4 col-span-full"
      >
        &larr; Back to Packages
      </button>
    )}
  </div>
)}       
            {forexOptions.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                {forexOptions.map((opt, idx) => (
                  <div
                    key={idx}
                    className="option-box"
                    onClick={() => handleForexOptionClick(opt)}
                  >
                    {opt.label}
                  </div>
                ))}
              </div>
            )}

            {remittanceOptions.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                {remittanceOptions.map((opt, idx) => (
                  <div
                    key={idx}
                    className="option-box"
                    onClick={() => handleRemittanceOptionClick(opt)}
                  >
                    {opt.label}
                  </div>
                ))}
              </div>
            )}

            {currencyOptions.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-4">
                {currencyOptions.map((curr, idx) => (
                  <div
                    key={idx}
                    className="option-box"
                    onClick={() => handleCurrencyClick(curr)}
                  >
                    {curr.label}
                  </div>
                ))}
              </div>
            )}

            <form
              onSubmit={showPincodeInput ? handlePincodeSubmit : sendMessage}
              className="mt-4 flex flex-row items-center gap-4 animate-fade-in"
            >
              <input
                type={showPincodeInput ? "number" : "text"}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-grow px-10 py-10 ml-[10px] mr-[0px] rounded-2xl bg-zinc-950 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white text-xl placeholder-gray-400 shadow-inner"
                placeholder={
                  showPincodeInput ? "Enter your pincode" : "Ask something..."
                }
              />

              <button
                type="submit"
                disabled={loading || !message.trim()}
                className="focus:outline-none bg-transparent p-0 m-0 border-none"
              >
                <img
                  src="/img.png"
                  className="w-[55px] h-[80px] ml-[0px] mr-[10px] object-contain hover:scale-105 transition-transform duration-200"
                  style={{
                    border: "none",
                    background: "transparent",
                    padding: 0,
                    margin: 0,
                    boxShadow: "none",
                  }}
                  alt="Send"
                />
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
