import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Text,
  SimpleGrid,
  Box,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const ReusableAccordion = ({ data }) => {
  return (
    <Accordion border={'1px solid grey'} allowMultiple width="80%" rounded="lg">
        <SimpleGrid
        columns={[2,4]}
        gap={10}
        p={5}
        width={'100%'}
        >
        {data.map((mainHeading) => (
          <AccordionItem key={mainHeading.main}>
            <AccordionButton
              display="flex"
              alignItems="center"
              border={'1px solid grey'}
              height={['100px','auto']}
              borderRadius={'16px'}
              justifyContent="space-between"
              p={4}
            >
              <Text fontSize="sm"> <strong>{mainHeading.main}</strong></Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
                {mainHeading.sub.map((subHeading) => (
                  <Box textAlign={'left'} key={subHeading.description} >
                  {console.log(subHeading.description)}
                <strong>{subHeading.title}</strong>: <br /><UnorderedList ml="20px" fontSize={'14px'}>{subHeading?.description?.map((el)=><ListItem key={el}>{el}</ListItem>)}</UnorderedList>
              </Box>
                ))}
              </Text>
            </AccordionPanel>
          </AccordionItem>
        ))}
    </SimpleGrid>
      </Accordion>
  );
};

export default ReusableAccordion;