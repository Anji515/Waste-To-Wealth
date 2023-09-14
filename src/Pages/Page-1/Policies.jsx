import {
  Box,
  Card,
  CardBody,
  Heading,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import ReusableAccordion from "./ReusableAccordina";

const Policies = () => {

  const policies = [
    {
      main: "Municipal Solid Waste",
      sub: [
        { title: "Acts/Rules", description: "SWM Rules 2016 & amendments" },
        {
          title: "Policies/Reports",
          description: [
            "Bulk waste generators pdf by MOHUA",
            "Legacy waste report by CPCB",
            "MSW Annual Report 2018-19 CPCB",
          ],
        },
        {
          title: "Central Guidelines",
          description: ["Advisory on decentralized composting by MOHUA"],
        },
      ],
    },
    {
      main: "C and D Waste",
      sub: [
        { title: "Acts/Rules", description: "Description of Acts/Rules" },
        {
          title: "Policies/Reports",
          description: "Description of Policies/Reports",
        },
        {
          title: "Central Guidelines",
          description: "Description of Central Guidelines",
        },
      ],
    },
    {
      main: "Plastic Waste",
      sub: [
        { title: "Acts/Rules", description: "SWM Rules 2016 & amendments" },
        {
          title: "Policies/Reports",
          description: [
            "Bulk waste generators pdf by MOHUA",
            "Legacy waste report by CPCB",
            "MSW Annual Report 2018-19 CPCB",
          ],
        },
        {
          title: "Central Guidelines",
          description: ["Advisory on decentralized composting by MOHUA"],
        },
      ],
    },
    {
      main: "E Waste",
      sub: [
        { title: "Acts/Rules", description: "Description of Acts/Rules" },
        {
          title: "Policies/Reports",
          description: "Description of Policies/Reports",
        },
        {
          title: "Central Guidelines",
          description: "Description of Central Guidelines",
        },
      ],
    },
    {
      main: "Biomedical Waste",
      sub: [
        { title: "Acts/Rules", description: "SWM Rules 2016 & amendments" },
        {
          title: "Policies/Reports",
          description: [
            "Bulk waste generators pdf by MOHUA",
            "Legacy waste report by CPCB",
            "MSW Annual Report 2018-19 CPCB",
          ],
        },
        {
          title: "Central Guidelines",
          description: ["Advisory on decentralized composting by MOHUA"],
        },
      ],
    },
    {
      main: "Hazardous Waste",
      sub: [
        { title: "Acts/Rules", description: "Description of Acts/Rules" },
        {
          title: "Policies/Reports",
          description: "Description of Policies/Reports",
        },
        {
          title: "Central Guidelines",
          description: "Description of Central Guidelines",
        },
      ],
    },
    {
      main: "Sewage Treatment",
      sub: [
        { title: "Acts/Rules", description: "SWM Rules 2016 & amendments" },
        {
          title: "Policies/Reports",
          description: [
            "Bulk waste generators pdf by MOHUA",
            "Legacy waste report by CPCB",
            "MSW Annual Report 2018-19 CPCB",
          ],
        },
        {
          title: "Central Guidelines",
          description: ["Advisory on decentralized composting by MOHUA"],
        },
      ],
    },
    {
      main: "Climate Change",
      sub: [
        { title: "Acts/Rules", description: "Description of Acts/Rules" },
        {
          title: "Policies/Reports",
          description: "Description of Policies/Reports",
        },
        {
          title: "Central Guidelines",
          description: "Description of Central Guidelines",
        },
      ],
    },
  ];

  return (
    <Box>
      <Box>
        <Heading textAlign={"center"} marginTop={"50px"} marginBottom={"40px"}>
          POLICIES
        </Heading>
        <Box
          minH={"40vh"}
          align={"center"}
          justify={"center"}
          bg={useColorModeValue("gray.50", "gray.800")}
        >
          <ReusableAccordion data={policies} />
        </Box>
      </Box>
  <br />
      <Box>
        <Card width={"80%"} margin={"auto"}>
          <SimpleGrid
           columns={[1,2]}
            gap="20px"
          >
            <iframe
              width="100%"
              height="300vh"
              src="https://www.youtube.com/embed/azoyJ97I52E"
              title="vid1"
            ></iframe>
            <iframe
              width="100%"
              height="300vh"
              src="https://www.youtube.com/embed/vgI8KpNSjeo"
              title="vid3"
            ></iframe>
            <iframe
              width="100%"
              height="300vh"
              src="https://www.youtube.com/embed/pEX2_kVs52o"
              title="vid4"
            ></iframe>
            <iframe
              width="100%"
              height="300vh"
              src="https://www.youtube.com/embed/yH_oH5OUwWk"
              title="vid2"
            ></iframe>
          </SimpleGrid>
        </Card>
      </Box>
    </Box>
  );
};

export default Policies;
