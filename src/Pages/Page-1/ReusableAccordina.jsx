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
  useColorModeValue,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const ReusableAccordion = ({ data }) => {
  return (
    <Accordion border={'1px solid grey'} width="80%" rounded="lg">
        <SimpleGrid
        columns={[1,4]}
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
              <Text fontSize="lg" color={'whatsapp.800'}> <strong>{mainHeading.main}</strong></Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4} position={"absolute"}  bgColor={"gray.50"} zIndex={1}>
              <Text color="orange.600">
                {mainHeading.sub.map((subHeading) => (
                  <Box textAlign={'left'} key={subHeading.description}>
                  {/* {console.log(subHeading.description)} */}
                <Accordion allowMultiple rounded={'lg'} gap={10} > 
                  <AccordionItem>
                    <AccordionButton border={'1px solid grey'} rounded={'md'}>
                  <strong>{subHeading.title}</strong>
                  <ChevronDownIcon/>
                    </AccordionButton>
                    <AccordionPanel>
                    <UnorderedList ml="20px" fontSize={'14px'}>{subHeading?.description?.map((el)=><ListItem fontSize={'15px'} key={el}>{el}</ListItem>)}</UnorderedList>
                    </AccordionPanel>
                  </AccordionItem>
                  </Accordion> 
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