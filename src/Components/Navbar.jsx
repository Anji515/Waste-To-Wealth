import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";
import { FaFacebookF, FaHome, FaInstagram, FaYoutube } from "react-icons/fa";

const Navbar = () => {
  return (
    <Flex
      bg={"rgb(235, 158, 42)"}
      justify={"space-between"}
      padding={"0px 20px"}
    >
      <Flex gap={10}>
        <Image
          width={"300px"}
          p={1}
          src="https://www.wastetowealth.gov.in/static/media/logoPsa.039ea8c9.svg"
        />
        <Image
          width={"150px"}
          h={"50px"}
          p={1}
          src="https://www.wastetowealth.gov.in/static/media/waste-to-wealth-logo.65754b45.png"
          alt="Logo"
        />
      </Flex>
      <Flex fontSize={'22px'} gap={5} align={"center"}>
        <Flex
          _hover={{ textDecoration: "underline" }}
          justifyContent={"center"}
          gap={1}
          align={"center"}
        >
          <FaHome size={"20px"} />
          <strong>Home Page</strong>
        </Flex>
        <Box 
        _hover={{ textDecoration: "underline" }}
        >
        <strong>SSF</strong> |
        </Box>
        <FaFacebookF />
        <FaInstagram />
        <FaYoutube />
      </Flex>
    </Flex>
  );
};

export default Navbar;
