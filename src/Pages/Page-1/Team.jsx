import React from "react";
import { Flex, Image, Text, Box, SimpleGrid, Center } from "@chakra-ui/react";

const EmployeeCard = ({ name, profession, imageSrc }) => {
  return (
    <Box
      maxW="250px"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      p={2}
      bgColor="white"
      textAlign="center"
          >
      <Center
        border={"1px solid grey"}
        boxShadow= "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset"
        width={["100%","100%"]}
        borderRadius={"50%"}
        height={["170px","220px"]}
        m={'auto'}
      >
        <Image
          src={imageSrc}
          alt={name}
          height={["170px","220px"]}
          width={['100%',"100%"]}
          borderRadius={"50%"}
          objectFit="cover"
        />
      </Center>
      <Text fontWeight="bold" fontSize={["sm","lg"]} mt={2}>
        {name}
      </Text>
      <Text color="gray.500" fontSize={["sm","md"]}>{profession}</Text>
    </Box>
  );
};

const TeamContainer = () => {
  const cards = [
    {
      name: "Prof. Ajay Kumar Sood",
      profession: "Principal Scientific Adviser to the Government of India",
      imageSrc:
        "https://psa.gov.in/CMS/web/sites/default/files/team/P47637-Ajay-Sood_-_Copy-removebg-preview.png",
    },
    {
      name: "Dr. Parvinder Maini",
      profession: "Scientific Secretary",
      imageSrc:
        "https://psa.gov.in/CMS/web/sites/default/files/team/Dr._Parvinder_Maini_image-removebg-preview-removebg-preview_0.png",
    },
    {
      name: "Dr. Monoranjan Mohanty",
      profession: "Adviser/Scientist G",
      imageSrc:
        "https://psa.gov.in/CMS/web/sites/default/files/team/DR_M_Mohanty-removebg-preview.png",
    },
    {
      name: "Ms. Malyaj Varmani",
      profession: "Vice President, Invest India",
      imageSrc:
        "https://www.wastetowealth.gov.in/w2w-drupal/sites/default/files/2022-03/Screenshot%202022-03-25%20at%206.27.13%20PM.png",
    },
    {
      name: "Saurabh Dutta",
      profession: "Sr. Manager",
      imageSrc:
        "https://www.wastetowealth.gov.in/w2w-drupal/sites/default/files/2021-09/MicrosoftTeams-image%20%2817%29.png",
    },
    {
      name: "Aniket Ghanshyam",
      profession: "Sr. Manager",
      imageSrc:
        "https://www.wastetowealth.gov.in/w2w-drupal/sites/default/files/2021-07/aniket.png",
    },
    {
      name: "Jayita Ghosh",
      profession: "Manager",
      imageSrc:
        "https://www.wastetowealth.gov.in/w2w-drupal/sites/default/files/2021-07/jayita.png",
    },
    {
      name: "Surbhi Awasthi",
      profession: "Associate",
      imageSrc:
        "https://www.wastetowealth.gov.in/w2w-drupal/sites/default/files/2022-11/Picture1_0.jpg",
    },
  ];

  return (
    <Flex direction="column" alignItems="center">
      <SimpleGrid columns={[2,3,4]} spacing={4}>
        {cards.map((employee, index) => (
          <EmployeeCard
            key={employee.name}
            name={employee.name}
            profession={employee.profession}
            imageSrc={employee.imageSrc}
          />
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default TeamContainer;
