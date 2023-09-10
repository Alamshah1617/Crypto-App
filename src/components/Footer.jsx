import { Avatar, Box, Stack, Text, VStack, Button } from "@chakra-ui/react";
import React from "react";

const avatarSrc = "https://avatars.githubusercontent.com/u/103488442?v=4";

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            We are a leading crypto trading app in India, offering expert guidance at competitive prices.
          </Text>
        </VStack>

        <VStack>
          <Avatar boxSize={"28"} mt={["4", "0"]} src={avatarSrc} />
          <Text>Founder</Text>
          <Text>Shah Alam</Text>
        </VStack>
        <VStack>
          <Button variant={'link'} fontSize="sm">
            <a target={'_blank'} rel="noopener noreferrer" href="https://www.youtube.com/@shahalam_">
              Youtube
            </a>
          </Button>
          <Button variant={'link'} fontSize="sm">
            <a target={'_blank'} rel="noopener noreferrer" href="https://instagram.com/alam_shah00">
              Instagram
            </a>
          </Button>
          <Button variant={'link'} fontSize="sm">
            <a target={'_blank'} rel="noopener noreferrer" href="https://github.com/Alamshah1617">
              Github
            </a>
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
