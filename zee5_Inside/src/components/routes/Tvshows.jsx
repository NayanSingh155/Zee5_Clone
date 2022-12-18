import React, { useEffect, useState } from "react";
import { SimpleGrid, Text } from "@chakra-ui/react";
import axios from "axios";
import ProductAddToCart from "../Moviecard";
import "bootstrap/dist/css/bootstrap.min.css";
import "@coreui/coreui/dist/css/coreui.min.css";
function Tvshows() {
  const [data, setData] = useState([]);
  useEffect((bolly) => {
    getData(bolly)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  // var key = "AIzaSyAKo2_8Ji4nOCiN1uTPBhgenXAbYm9XBQs";
  const getData = (x) => {
    return axios({
      url: `https://zee5json.onrender.com/${x}`,
      method: "GET",
    });
  };
  // console.log(data);
  return (
    <>
      <div>
        <Text pt="30px" fontSize="2xl" bg="rgb(15,6,23)" color="white">
          Bollywood Movies
        </Text>
        <SimpleGrid
          columns={[1, 3, 3, 6]}
          spacing="2%"
          p="3% 5%"
          color="white"
          bg="rgb(15,6,23)"
          w="100%"
        >
          <>
            {data.map((e) => {
              return <ProductAddToCart key={e.id} props={e}></ProductAddToCart>;
            })}
          </>
        </SimpleGrid>
      </div>
      <div>
        <Text pt="30px" fontSize="2xl" bg="rgb(15,6,23)" color="white">
          Bollywood Movies
        </Text>
        <SimpleGrid
          columns={[1, 3, 3, 6]}
          spacing="2%"
          p="3% 5%"
          color="white"
          bg="rgb(15,6,23)"
          w="100%"
        >
          <>
            {data.map((e) => {
              return <ProductAddToCart key={e.id} props={e}></ProductAddToCart>;
            })}
          </>
        </SimpleGrid>
      </div>
      <div>
        <Text pt="30px" fontSize="2xl" bg="rgb(15,6,23)" color="white">
          Bollywood Movies
        </Text>
        <SimpleGrid
          columns={[1, 3, 3, 6]}
          spacing="2%"
          p="3% 5%"
          color="white"
          bg="rgb(15,6,23)"
          w="100%"
        >
          <>
            {data.map((e) => {
              return <ProductAddToCart key={e.id} props={e}></ProductAddToCart>;
            })}
          </>
        </SimpleGrid>
      </div>
    </>
  );
}

export default Tvshows;
