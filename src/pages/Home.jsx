// import React, { useEffect, useState } from "react";
// import styled from "styled-components";
// import { category } from "../utils/data";
// import HeaderImage from "../utils/Images/Header.png";
// import ProductCategoryCard from "../components/cards/ProductCategoryCard";
// import ProductsCard from "../components/cards/ProductsCard";
// import { getAllProducts } from "../api";
// import { CircularProgress } from "@mui/material";

// const Container = styled.div`
//   padding: 20px 30px;
//   padding-bottom: 200px;
//   height: 100%;
//   overflow-y: scroll;
//   display: flex;
//   align-items: center;
//   flex-direction: column;
//   gap: 30px;
//   @media (max-width: 768px) {
//     padding: 20px 12px;
//   }
//   background: ${({ theme }) => theme.bg};
// `;
// const Section = styled.div`
//   max-width: 1400px;
//   padding: 32px 16px;
//   display: flex;
//   flex-direction: column;
//   gap: 28px;
// `;
// const Img = styled.img`
//   width: 100%;
//   max-width: 1200px;
// `;
// const Title = styled.div`
//   font-size: 28px;
//   font-weight: 500;
//   display: flex;
//   justify-content: ${({ center }) => (center ? "center" : "space-between")};
//   align-items: center;
// `;
// const CardWrapper = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 32px;
//   justify-content: center;
//   @media (max-width: 760px) {
//     gap: 16px;
//   }
// `;

// const Home = () => {
//   const [loading, setLoading] = useState(false);
//   const [products, setProducts] = useState([]);

//   const getProducts = async () => {
//     setLoading(true);
//     await getAllProducts().then((res) => {
//       setProducts(res.data);
//       setLoading(false);
//     });
//   };

//   useEffect(() => {
//     getProducts();
//   }, []);

//   return (
//     <Container>
//       <Section>
//         <Img src={HeaderImage} />
//       </Section>
//       <Section>
//         <Title>Food Categories</Title>
//         <CardWrapper>
//           {category.map((category) => (
//             <ProductCategoryCard category={category} />
//           ))}
//         </CardWrapper>
//       </Section>

//       <Section>
//         <Title>Most Popular</Title>
//         {loading ? (
//           <CircularProgress />
//         ) : (
//           <CardWrapper>
//             {products.map((product) => (
//               <ProductsCard product={product} />
//             ))}
//           </CardWrapper>
//         )}
//       </Section>
//     </Container>
//   );
// };

// export default Home;


import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { category } from "../utils/data";
import HeaderImage from "../utils/Images/Header.png";
import ProductCategoryCard from "../components/cards/ProductCategoryCard";
import ProductsCard from "../components/cards/ProductsCard";
import { getAllProducts } from "../api";
import { CircularProgress } from "@mui/material";

const Container = styled.div`
  padding: 20px 30px;
  padding-bottom: 200px;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  background: ${({ theme }) => theme.bg};
  
  @media (max-width: 768px) {
    padding: 20px 12px;
    gap: 20px;
  }
`;

const Section = styled.div`
  max-width: 1400px;
  padding: 32px 16px;
  display: flex;
  flex-direction: column;
  gap: 28px;

  @media (max-width: 768px) {
    padding: 16px 8px;
  }
`;

const Img = styled.img`
  width: 100%;
  max-width: 1200px;
  height: auto;  // Maintain aspect ratio
  
  @media (max-width: 768px) {
    max-width: 100%;  // Ensure image is fully responsive on mobile
  }
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: 500;
  display: flex;
  justify-content: ${({ center }) => (center ? "center" : "space-between")};
  align-items: center;

  @media (max-width: 768px) {
    font-size: 24px;  // Slightly smaller font size on mobile
  }
`;

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  justify-content: center;

  @media (max-width: 760px) {
    gap: 16px;
  }
`;

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    setLoading(true);
    try {
      const res = await getAllProducts();
      setProducts(res.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Container>
      <Section>
        <Img src={HeaderImage} alt="Header" />
      </Section>
      <Section>
        <Title>Food Categories</Title>
        <CardWrapper>
          {category.map((category) => (
            <ProductCategoryCard key={category.id} category={category} />
          ))}
        </CardWrapper>
      </Section>

      <Section>
        <Title>Most Popular</Title>
        {loading ? (
          <CircularProgress />
        ) : (
          <CardWrapper>
            {products.map((product) => (
              <ProductsCard key={product.id} product={product} />
            ))}
          </CardWrapper>
        )}
      </Section>
    </Container>
  );
};

export default Home;
