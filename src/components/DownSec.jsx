import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
} from "@chakra-ui/react";

export default function DownSec() {
  return (
    <Container maxW={"9xl"} bg="#f7f0ee">
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 20 }}
        direction={{ base: "column", md: "row" }}
        bg="#f7f0ee"
      >
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
        >
          <Box
            position={"relative"}
            height={"300px"}
            rounded={"2xl"}
            align={"center"}
            width={"full"}
            overflow={"hidden"}
          >
            <Image
              alt={"Hero Image"}
              fit={"cover"}
              align={"center"}
              w={"70%"}
              h={"90%"}
              src={
                "https://cdn.caratlane.com/media/static/images/V4/2022/CL/11-NOV/Others/13/OLD-GOLD_.png"
              }
            />
          </Box>
        </Flex>

        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "5xl" }}
          >
            <Text
              as={"span"}
              position={"relative"}
              fontSize={"25px"}
              fontFamily={
                "'BegumMedium','Helvetica Neue',Helvetica,Arial,sans-serif"
              }
              _after={{
                content: "''",
                width: "full",
                height: "30%",
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "#de57e5",
                zIndex: -1,
              }}
            >
              Your precious gold. Our new designs!
            </Text>
            <br />
          </Heading>
          <Text color={"gray.500"}>
            -A Gold Exchange Program that lets you preserve your memories and
            make new ones! Please note: The old gold doesn't have to be from
            only CaratLane, it can be any gold jewellery you have.
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: "column", sm: "row" }}
            display={"flex"}
            justifyContent={"center"}
          >
            <Button
              rounded={"half"}
              borderRadius={"5px"}
              size={"lg"}
              fontWeight={"normal"}
              px={10}
              py={8}
              colorScheme={"de57e5"}
              bg={"#8863fb"}
              _hover={{ bg: "#de57e5" }}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              Know More
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
}
