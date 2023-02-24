import { Box, Image, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import DownSec from "../components/DownSec";

import Topsec from "../components/Topsec";
import Midsec from "../components/Midsec";
import CaptionCarousel from "../components/Carousel";



const Home = () => {

  return (
    <Box>
     
     <CaptionCarousel/>
      <Topsec/>
      <br />
      
      <Midsec />

      <Box m={5}  data-aos="fade-up">
        <SimpleGrid gap={5} columns={[1, 2, 2, 2]}>
          <Image
            mt={4}
            src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/02-FEB/AppBanner/Personal/01/2X.jpg"
          />
          <Image
            mt={4}
            src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/02-FEB/HP-Banner/RunWay/1X.jpg"
          />
          <Image
            mt={4}
            src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/02-FEB/AppBanner/Store/02/2x.gif"
          />
          <Image
            mt={4}
            src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/02-FEB/AppBanner/Best/01/2x.jpg"
          />
        </SimpleGrid>
      </Box>
      <DownSec />
      
    </Box>
  );
};

export default Home;
