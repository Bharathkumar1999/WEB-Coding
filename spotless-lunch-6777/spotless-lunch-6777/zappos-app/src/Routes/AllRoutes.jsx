import { Route, Routes } from "react-router-dom";

import HomePage from "./HomePage";

// import PrivateRoute from "../Components/PrivateRoute";
import Women from "./Women";
import Men from "./Men";
import Kids from "./Kids";
//import PrivateRoute from "../Components/PrivateRoute";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<Women />} />
        <Route path="/about" element={<Men />} />
        <Route path="/about" element={<Kids />} />
        <Route path="/about" element={ <h1>Departments</h1> } />
        <Route path="/about" element={ <h1>Brands</h1> } />
        <Route path="/about" element={ <h1>Sales</h1> } />
        {/* <Route path="/contact" element={<ContactPage />} />
        <Route
          path="/users"
          element={
            <PrivateRoute>
              <UsersPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/users/:id"
          element={
            <PrivateRoute>
              <SingleUserPage />
            </PrivateRoute>
          }
        /> */}
      </Routes>
     
    </div>
  );
}

export default AllRoutes;
