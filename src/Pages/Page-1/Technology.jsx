import React from "react";
import { Box, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";

const Technology = () => {
  return (
    <Box border={"0px solid orange"} p={2} background={"whatsapp.200"}>
      <br />
      <br />
      <Heading>Technology Deployments</Heading>
      <br />
      <Flex
        w={["95%", "70%"]}
        margin={"auto"}
        justifyContent={"center"}
        flexWrap={["wrap-reverse", "nowrap"]}
        gap={20}
        mb={10}
        border={"0px solid black"}
      >
        <iframe
          width="60%"
          height="auto"
          src="https://www.youtube.com/embed/4TIl-ysyhe0"
          title="Cleaning and Desilting of Barapullah drain: An initiative of Waste to Wealth Mission"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <Box
          w={["100%", "50%"]}
          border={"1px solid grey"}
          p={"50px"}
          borderRadius={"16px"}
        >
          <Heading fontSize={20}>Problem Statement</Heading>
          <br />
          <Text>
            Cleaning of open drains in congested areas has always been a
            challenge in India because there is no or limited access for
            traditional equipment like Joseph Cyril Bamford (JCB) excavator,
            Poclain, etc. and human settlements on both sides of the drain with
            narrow passages make it impossible to dispose of the collected
            waste. The Barapullah drain in South Delhi is one such drain that is
            blocked at various locations with sewage, trash, and debris,
            resulting in foul odor, vector-borne diseases, unhygienic
            conditions, and flooding in the monsoons.
          </Text>
        </Box>
      </Flex>

      <VStack
        w={["95%", "80%"]}
        m={"auto"}
        border={"1px solid grey"}
        borderRadius={"16px"}
        boxShadow="rgba(0, 0, 0, 0.4) 0px 30px 90px;"
      >
        <Flex
          width={"100%"}
          gap={10}
          textAlign={"left"}
          border={"0px solid red"}
        >
          <Box border={"0px solid red"} width={"100%"} height={"auto"} p={5}>
            <Heading fontSize={"22px"}>Technology Solution</Heading>
            <Text fontSize={["sm", "md"]} margin={"auto"}>
              To address this critical problem, the Waste to Wealth Mission, one
              of the ten scientific missions of the Office of the Principal
              Scientific Adviser to the Government of India, collaborated with
              South Delhi Municipal Corporation (now Municipal Corporation of
              Delhi) to jointly pilot an indigenous, customized excavator -
              Drain Master DM-80, designed and developed by M/s Cleantec Infra
              Pvt. Ltd., Mumbai.
            </Text>
          </Box>
          <Text
            margin={"auto"}
            textAlign={"center"}
            border={"0px solid red"}
            width={"100%"}
            height={"auto"}
            p={5}
            fontSize={["sm", "md"]}
          >
            <strong>Prof. Ajay Kumar Sood, </strong>the Principal Scientific
            Adviser (PSA) to the
            <strong> Government of India (GoI)</strong> visited the stretch of
            Barapullah drain near Bhogal Market in South Delhi to witness the
            indigenously designed drain-cleaning excavator ‘Drainmaster DM-80’
            in operation. I
          </Text>
        </Flex>
        <br />
        <Flex
          flexWrap={["wrap", "nowrap"]}
          width={"95%"}
          margin={"auto"}
          gap={20}
        >
          <Image
            borderRadius={16}
            src="https://www.psa.gov.in/assets/images/waste/drainmaster-operation-first.jpg"
          />
          <Image
            borderRadius={16}
            src="https://www.psa.gov.in/assets/images/waste/drainmaster-operation-second.jpg"
          />
        </Flex>
        <br />
        <br />
      </VStack>
      <br />
      <br />

      <VStack
        width={["95%", "50%"]}
        bg={"whatsapp.400"}
        borderRadius={16}
        margin={"auto"}
        padding={5}
        boxShadow="rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px"
      >
        <Heading>Here is the Impact ....</Heading>
        <Text fontSize={["sm", "md"]} textAlign={"left"}>
          The DM-80 unit was in operation for a duration of one year from 3rd
          January 2022 to 2nd January 2023. During this period, Cleantec Infra
          operated the unit to clean and desilt approximately a 3 km stretch of
          the Barapullah drain starting from Sundial Park to Jangpura, removing
          approximately 3000 tons of waste in the process. The Municipal
          Corporation of Delhi provided supporting equipment for the disposal of
          the waste removed from the drain.
        </Text>
        <br />
        <Flex width={"100%"} flexWrap={"wrap"} margin={"auto"} gap={20}>
          <Box>
            <Image
              borderRadius={16}
              src="https://www.psa.gov.in/assets/images/waste/drain-before.jpg"
            />
            <Heading fontSize={18}>Before</Heading>
          </Box>

          <Box>
            <Image
              borderRadius={16}
              src="https://www.psa.gov.in/assets/images/waste/drain-after.jpg"
            />
            <Heading fontSize={18}>After</Heading>
          </Box>
        </Flex>
        <Text
          fontFamily={"-moz-initial"}
          fontSize={["sm", "md"]}
          textDecoration={"underline"}
        >
          Desilting of Barapullah drain
        </Text>
      </VStack>

      <VStack
        width={["95%", "70%"]}
        marginTop={"20px"}
        bg={"whatsapp.400"}
        borderRadius={16}
        margin={"15px auto"}
        padding={5}
        boxShadow="rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px"
      >
        <Heading>The Impact ....</Heading>
        <Text fontSize={["sm", "md"]} textAlign={"left"}>
          At the Technology Park, 10 TPD Municipal waste is onsite segregated
          and treated, resulting in volume reduction and conversion into 1 TPD
          compostable fractions, 2 TPD combustibles fractions, 1.5 TPD
          recyclables. The facility also has a waste compaction unit for
          reducing the volume for handling & transportation. The combustible
          waste will then be processed on-site, leaving only 5-10% of inerts
          reaching landfills. In addition to incoming MSW, floating waste from
          the adjacent 52-cusec drain is also collected and processed on-site.
          <br />
          <br />
          This will also ensure SWM compliance of Urban Local Bodies under Solid
          Waste Management Rules 2016 and for reducing the load on landfill
          sites, without the procurement of new land for setup and disposal.
          <br />
          <br />
          Decentralized processing of waste is a step towards “Zero Landfill”
          with the added advantage of reduction in the transportation of the
          waste.
        </Text>
        <br />
        <Flex
          width={"90%"}
          flexWrap={["wrap", "nowrap"]}
          margin={"auto"}
          alignItems={"center"}
          gap={20}
        >
          <Box h={"400px"} w={"100%"}>
            <Image
              borderRadius={16}
              h={"400px"}
              src="https://wastetowealth.vercel.app/assets/dwmtp-62c15804.png"
            />
            <Heading fontSize={18}>Before</Heading>
          </Box>

          <Box h={"400px"} w={"100%"}>
            <Image
              borderRadius={16}
              h={"400px"}
              src="https://wastetowealth.vercel.app/assets/dwmtp1-f5029a63.png"
            />
            <Heading fontSize={18}>After</Heading>
          </Box>
        </Flex>
        <Text
          fontFamily={"-moz-initial"}
          fontSize={["sm", "md"]}
          mt={10}
          textDecoration={"underline"}
        >
          Decentralized Waste Management Technology Park
        </Text>
      </VStack>
    </Box>
  );
};

export default Technology;
