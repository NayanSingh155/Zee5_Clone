import React, { useEffect, useState } from "react";
import { SimpleGrid, Text } from "@chakra-ui/react";
import axios from "axios";
import ProductAddToCart from "../Moviecard";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import { Alert } from "@coreui/react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@coreui/coreui/dist/css/coreui.min.css";

function Home() {
  const [data, setData] = useState([]);
  const [bdata, setbData] = useState([]);
  const [hdata, sethData] = useState([]);
  useEffect(() => {
    getData();
    getDatab();
    getDatah();
  }, []);
  // var key = "AIzaSyAKo2_8Ji4nOCiN1uTPBhgenXAbYm9XBQs";
  const getData = () => {
    axios({
      url: `https://zee5json.onrender.com/Tren`,
      method: "GET",
    })
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };
  // /////
  const getDatab = () => {
    axios({
      url: `https://zee5json.onrender.com/bolly`,
      method: "GET",
    })
      .then((res) => setbData(res.data))
      .catch((err) => console.log(err));
  };
  // /////
  const getDatah = () => {
    axios({
      url: `https://zee5json.onrender.com/holly`,
      method: "GET",
    })
      .then((res) => sethData(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div>
        <CCarousel controls>
          <CCarouselItem>
            <CImage
              className="d-block w-100"
              src="https://wallpaperaccess.com/full/895201.jpg"
              alt="Game of Thrones"
            />
          </CCarouselItem>
          <CCarouselItem>
            <CImage
              className="d-block w-100 h-80"
              src="https://wallpaperaccess.com/full/637343.jpg"
              alt="slide 1"
            />
          </CCarouselItem>
          {/* <CCarouselItem>
            <CImage
              className="d-block w-100"
              src="https://wallpaperaccess.com/full/758165.jpg"
              alt="slide 2"
            />
          </CCarouselItem> */}

          <CCarouselItem>
            <CImage
              className="d-block w-100"
              src="https://wallpaperaccess.com/full/895179.jpg"
              alt="slide 3"
            />
          </CCarouselItem>
        </CCarousel>
      </div>
      <div>
        <Text pt="30px" fontSize="3xl" bg="rgb(15,6,23)" color="white">
          Trending Movies
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
        <Text pt="30px" fontSize="3xl" bg="rgb(15,6,23)" color="white">
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
            {bdata.map((e) => {
              return <ProductAddToCart key={e.id} props={e}></ProductAddToCart>;
            })}
          </>
        </SimpleGrid>
      </div>
      <div>
        <Text pt="30px" fontSize="3xl" bg="rgb(15,6,23)" color="white">
          Hollywood Movies
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
            {hdata.map((e) => {
              return <ProductAddToCart key={e.id} props={e}></ProductAddToCart>;
            })}
          </>
        </SimpleGrid>
      </div>
    </>
  );
}

export default Home;
