import { SimpleGrid, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axios } from "axios";
import ProductAddToCart from "../Moviecard";

export default function Product() {
  const param = useParams();
  const [sdata, setSdata] = useState([]);
  const [udata, setUdata] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getDataUpcom();
  }, []);

  const { id } = param;
  const getData = async () => {
    try {
      const res = await fetch(
        `https://zee5json.onrender.com/bolly/${id}`
      );
      const data = await res.json();
      setSdata(data);
    } catch (err) {
      console.log(err);
    }
  };
  // console.log(sdata);

  const getDataUpcom = async () => {
    try {
      const res = await fetch(
        `https://zee5json.onrender.com/upcom`
      );
      const data = await res.json();
      setUdata(data);
    } catch (err) {
      console.log(err);
    }
  };
  // console.log(udata);
  return (
    <>
      <div>
        <div>
          <iframe
            allowfullscreen="true"
            width="100%"
            height="700px"
            src={`https://www.youtube.com/embed/${sdata.videoId}`}
          ></iframe>
        </div>
        <div>
          <Text pt="10px" fontSize="3xl" bg="rgb(15,6,23)" color="white">
            Movie Title : {sdata.title}
          </Text>
        </div>
        <div>
          <Text pt="10px" fontSize="xl" bg="rgb(15,6,23)" color="gray">
            Published at : {sdata.publishedAt}
          </Text>
        </div>
        <div>
          <Text pt="10px" fontSize="xl" bg="rgb(15,6,23)" color="gray">
            Movie Description : {sdata.description}
          </Text>
        </div>
      </div>
      <div>
        <Text pt="10px" fontSize="3xl" bg="rgb(15,6,23)" color="white">
          Upcoming Movies
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
            {udata.map((e) => {
              return <ProductAddToCart key={e.id} props={e}></ProductAddToCart>;
            })}
          </>
        </SimpleGrid>
      </div>
    </>
  );
}

//   {/* <div> */}
// {/* <div>
//   <iframe
//     width="100%"
//     height="600px"
//     src={`https://www.youtube.com/embed/${sdata.videoId}`}
//   ></iframe> */}
//   {/* <Text>{sdata.snippet.title}</Text> */}

//   {/* <Text pt="10px" pb="10px" fontSize="xl">
//     {sdata.snippet.title}
//   </Text> */}
//   {/* <h1>{sdata.snippet.title}</h1> */}
// {/* </div> */}

// </div>
