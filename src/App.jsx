// import styled, { ThemeProvider } from "styled-components";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { lightTheme } from "./utils/Themes";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import { useState } from "react";
// import Authentication from "./pages/Authentication";
// import Favourites from "./pages/Favourites";
// import Cart from "./pages/Cart";
// import FoodDetails from "./pages/FoodDetails";
// import FoodListing from "./pages/FoodListing";
// import { useSelector } from "react-redux";
// import Contact from './components/Contact'
// import Footer from "./components/cards/Footer";

// const Container = styled.div``;

// function App() {
//   const { currentUser } = useSelector((state) => state.user);
//   const { open, message, severity } = useSelector((state) => state.snackbar);
//   const [openAuth, setOpenAuth] = useState(false);
//   return (
//     <ThemeProvider theme={lightTheme}>
//       <BrowserRouter>
//         <Container>
//           <Navbar
//             setOpenAuth={setOpenAuth}
//             openAuth={openAuth}
//             currentUser={currentUser}
//           />
//           <Routes>
//             <Route path="/" exact element={<Home />} />
//             <Route path="/favorite" exact element={<Favourites />} />
//             <Route path="/cart" exact element={<Cart />} />
//             <Route path="/dishes/:id" exact element={<FoodDetails />} />
//             <Route path="/dishes" exact element={<FoodListing />} />
//             <Route path="/contact" exact element={<Contact />} />
//             <Route path="/footer" exact element={<Footer />} />
//           </Routes>
//           {openAuth && (
//             <Authentication setOpenAuth={setOpenAuth} openAuth={openAuth} />
//           )}
//         </Container>
//       </BrowserRouter>
//     </ThemeProvider>
//   );
// }

// export default App;



import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lightTheme } from "./utils/Themes";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { useState } from "react";
import Authentication from "./pages/Authentication";
import Favourites from "./pages/Favourites";
import Cart from "./pages/Cart";
import FoodDetails from "./pages/FoodDetails";
import FoodListing from "./pages/FoodListing";
import { useSelector } from "react-redux";
import Contact from './components/Contact';
import Footer from "./components/cards/Footer";

const Container = styled.div`
  min-height: 100vh; // Ensures the container takes at least the full height of the viewport
  display: flex;
  flex-direction: column; // Allows stacking of children
`;

function App() {
  const { currentUser } = useSelector((state) => state.user);
  const { open, message, severity } = useSelector((state) => state.snackbar);
  const [openAuth, setOpenAuth] = useState(false);

  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        <Container>
          <Navbar
            setOpenAuth={setOpenAuth}
            openAuth={openAuth}
            currentUser={currentUser}
          />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/favorite" exact element={<Favourites />} />
            <Route path="/cart" exact element={<Cart />} />
            <Route path="/dishes/:id" exact element={<FoodDetails />} />
            <Route path="/dishes" exact element={<FoodListing />} />
            <Route path="/contact" exact element={<Contact />} />
            {/* The Footer is not included in Routes anymore */}
          </Routes>
          {openAuth && (
            <Authentication setOpenAuth={setOpenAuth} openAuth={openAuth} />
          )}
          <Footer /> {/* Footer moved here to be persistent across pages */}
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
