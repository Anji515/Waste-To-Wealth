import React from "react";
import Highlights from "./Highlights";
import Header from "./Header";
import { Flex } from "@chakra-ui/react";
import ReusableCard from "../../Components/Crads";

const Main = () => {
  return (
    <div>
      <Header />
      <Flex width={"75%"} alignItems={'center'} margin={'auto'} gap={50} padding={10}>
        <ReusableCard
          heading="Vision"
          description="To identify and validate innovative technologies that can help create a cleaner and greener environment in a sustainable way. To boost and augment the Swachh Bharat Mission and Smart Cities Project by leveraging science, technology, and innovation. To create ready reckoners for waste management so best practices can be shared. To drive community initiatives in the area of waste management to drive behavioral change."
        />
        <ReusableCard
          heading="Focus"
          description="The focus of our mission is to provide scientific and technological inputs towards conservation, sustainable use, and restoration of our land, air, and water resources.
        The technology solutions identified will support Urban Local Bodies (ULBs) to create circular economic models that are financially viable for waste management & streamline waste handling in the country"
        />
      </Flex>
      <br />
      <Highlights />
    </div>
  );
};

export default Main;
