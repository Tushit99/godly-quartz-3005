import { Box, Flex, Image } from '@chakra-ui/react'
import React from 'react'

const Topsec = () => {
    
  return (
    <Flex gap={5} m={5} flexDirection={["column","column","column","row",'row']}>
        <Image  src='https://cdn.caratlane.com/media/static/images/V4/2023/Shaya/02-FEB/Responsive/23/Responsive_Banner_1.jpg'/>
        <Box gap={10}>
            <Image  src='https://cdn.caratlane.com/media/static/images/V4/2023/CL/02-FEB/AppBanner/Newin/03/1X.jpg'/>
            <Image mt={5} src='https://cdn.caratlane.com/media/static/images/V4/2023/CL/02-FEB/AppBanner/RTS/02/2x1.gif'/>
        </Box>
    </Flex>
  )
}

export default Topsec