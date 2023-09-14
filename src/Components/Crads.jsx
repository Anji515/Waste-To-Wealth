import React from 'react';
import { Flex, Text, useBreakpointValue } from '@chakra-ui/react';

const ReusableCard = ({ heading, description }) => {
  const cardWidth = useBreakpointValue({ base: '100%', md: '80%' });
  const cardHeight = useBreakpointValue({ base: 'auto', md: '250px' });

  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      boxShadow="lg"
      width={cardWidth}
      height={cardHeight}
      border={'1px solid black'}
      p={4}
      borderRadius="lg"
      transition="transform 0.3s ease-in-out"
      _hover={{ transform: 'scale(1.05)' }}
    >
      <Text fontWeight="bold" color={'grey'} textDecoration={'underline'} fontSize="2xl" mb={4}>
        {heading}
      </Text>
      <Text>{description}</Text>
    </Flex>
  );
};

export default ReusableCard;
