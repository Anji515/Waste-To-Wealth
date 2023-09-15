import React from "react";
import {
  Flex,
  Image,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useMediaQuery,
  Divider,
  Select,
} from "@chakra-ui/react";
import { FaFacebookF, FaHome, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMobile] = useMediaQuery("(max-width: 600px)");

  return (
    <Flex bg={"rgb(235, 158, 42)"} justify={"space-between"} padding={"0px 20px"}>
      <Flex gap={10}>
      {!isMobile && (
          <Image
            width={"300px"}
            p={1}
            src="https://www.wastetowealth.gov.in/static/media/logoPsa.039ea8c9.svg"
          />
        )}
        <Image
          width={"150px"}
          h={"50px"}
          p={1}
          src="https://www.wastetowealth.gov.in/static/media/waste-to-wealth-logo.65754b45.png"
          alt="Logo"
        />
      </Flex>
      {isMobile ? (
        <MobileMenu />
      ) : (
        <Flex fontSize={"22px"} gap={5} align={"center"}>
          <Link to='/'>
          <Flex
            _hover={{ textDecoration: "underline" }}
            justifyContent={"center"}
            gap={1}
            align={"center"}
            cursor={'pointer'}
            >
            <FaHome size={"20px"} />
            <strong>Home Page</strong>
          </Flex>
            </Link>
          <DropdownMenu />
          <Divider orientation="vertical" borderColor={'black'} height="28px" mx={2} />
          <FaFacebookF />
          <FaInstagram />
          <FaYoutube />
        </Flex>
      )}
    </Flex>
  );
};

const MobileMenu = () => {

  return (
    <Menu>
      <MenuButton
        as={IconButton}
        icon={<FaHome size={"20px"} />}
        aria-label="Mobile Menu"
        variant="outline"
      />
      <MenuList>
        <MenuItem gap={2}>
          <FaHome size={"20px"} />
          <strong marginLeft={2}>Home Page</strong>
        </MenuItem>
        <DropdownMenu/>
        <MenuItem>
          <FaFacebookF />
        </MenuItem>
        <MenuItem>
          <FaInstagram />
        </MenuItem>
        <MenuItem>
          <FaYoutube />
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

const DropdownMenu = () => {

  const navigate=useNavigate()
  return (
    <Select
      cursor="pointer"
      bg="transparent"
      w={'200px'}
      border="1px solid grey"
      _hover={{ bg: "transparent" }}
      _focus={{ outline: "none" }}
    >
      <option value="cohort1"><strong marginLeft={2}>Swacchta Saarathi Fellowship</strong></option>
      <option value="cohort1" onClick={()=>(navigate('cohort1'))}>Cohort 1</option>
      <option value="cohort2" onClick={()=>(navigate('cohort2'))}>Cohort 2</option>
    </Select>
  );
};


export default Navbar;