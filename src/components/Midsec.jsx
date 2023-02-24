import { Box, Image, SimpleGrid } from '@chakra-ui/react'

import React from 'react'

const Midsec = () => {
  return (
    <Box m={5} mt={5} mb={20}>
      <SimpleGrid  columns={[1,2,2,3]} >
      <Image mt={4} src='https://cdn.caratlane.com/media/static/images/V4/2023/CL/02-FEB/HP-Banner/tile/05/Desktop_1.jpg'/>
      <Image mt={4} src='https://cdn.caratlane.com/media/static/images/V4/2023/CL/02-FEB/HP-Banner/tile/05/Desktop_2.jpg'/>
      <Image mt={4} src='https://cdn.caratlane.com/media/static/images/V4/2023/CL/02-FEB/HP-Banner/tile/05/Desktop_3.jpg'/>
      <Image mt={4} src='https://cdn.caratlane.com/media/static/images/V4/2023/CL/02-FEB/HP-Banner/tile/05/Desktop_4.jpg'/>
      <Image mt={4} src='https://cdn.caratlane.com/media/static/images/V4/2023/CL/02-FEB/HP-Banner/tile/08/Desktop_9.jpg'/>
      <Image mt={4} src='https://cdn.caratlane.com/media/static/images/V4/2023/CL/02-FEB/HP-Banner/tile/05/Desktop_7.jpg'/>
      </SimpleGrid>
    </Box>
  )
}

export default Midsec