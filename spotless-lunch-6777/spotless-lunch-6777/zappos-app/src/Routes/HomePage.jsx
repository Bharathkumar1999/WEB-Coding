// import { useContext } from "react";
// import { Navigate } from "react-router-dom";
// import { AuthContext } from "../Context/AuthContext";
import "../styles/HomePage.css"
import { saleCategories } from "../helpers/saleCategories"



import React from 'react'

export const HomePage = () => {
  return (
    <div>
    <div className='home-img'>
    <img src="https://m.media-amazon.com/images/G/01/2022/homepage8.22/SALE-VIP-SITE-HERO-1080x720.gif" alt="" />
    {/* <img src="https://m.media-amazon.com/images/G/01/2022/homepage8.22/SALE-VIP-SITE-HERO-1080x720.gif%201x" alt="" /> */}

    </div>

    </div>


    // <div className='home-img'>
    //     <img src="https://m.media-amazon.com/images/G/01/2022/homepage8.22/SALE-VIP-SITE-HERO-1080x720.gif" alt="" />
    //     {/* <img src="https://m.media-amazon.com/images/G/01/2022/homepage8.22/SALE-VIP-SITE-HERO-1080x720.gif%201x" alt="" /> */}

    // </div>
  )
}

// import React from 'react';
// import { saleCategories } from '../helpers/saleCategories';







// function saleCategories(){
//     return(
//         <div className="saleCategories">
//             <h1 className="title">Shop Sale Categories</h1>
//             <div className="saleList">{saleCategories.map((saleCategory,i)=>{
//                 return <saleCategory
//                 key={i} 
//                 image={saleCategory.image} 
//                 name={saleCategory.name} />
//             })}</div>
//         </div>
//     )
// }


// function saleCategories(){
//     return(
//         <div className="saleCategories">
//             <h1 className="title">Shop Sale Categories</h1>
//             <div className="saleList">{saleCategories}</div>
//         </div>
//     )
// }

// export default saleCategories



// function HomePage() {
//   const { isAuth, toggleAuth } = useContext(AuthContext);
//   if (isAuth) {
//     return <Navigate to="/" />;
//   }
//   return (
//     <div>
//       <h1>Home</h1>
//       <div>
//         <button onClick={toggleAuth}>LOGIN</button>
//       </div>
//     </div>
//   );
// }

export default HomePage;