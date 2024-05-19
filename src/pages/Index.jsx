import { Container, Text, VStack, Box, Heading, Button, Image, HStack, IconButton } from "@chakra-ui/react";
import { FaMapMarkerAlt, FaBuilding, FaUsers } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      {/* Hero Section */}
      <Box bgImage="url('https://images.unsplash.com/photo-1494625927555-6ec4433b1571?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjBsYW5kc2NhcGUlMjBvZiUyMEJlaXNla2VyJTIwQWxiZXJ0YXxlbnwwfHx8fDE3MTYxMzIwNjd8MA&ixlib=rb-4.0.3&q=80&w=1080" bgSize="cover" bgPos="center" height="60vh" display="flex" alignItems="center" justifyContent="center" color="white">
        <VStack spacing={4} textAlign="center">
          <Heading as="h1" size="2xl" fontFamily="Clarendon Text Pro">
            Discover Beiseker
          </Heading>
          <Text fontSize="xl" fontFamily="Montserrat">
            Feel Hours Away, Be Minutes From Everywhere
          </Text>
          <Button colorScheme="teal" size="lg">
            Learn More
          </Button>
        </VStack>
      </Box>

      {/* Key Messages Section */}
      <VStack spacing={8} py={16}>
        <Heading as="h2" size="xl" fontFamily="Clarendon Text Pro">
          Why Beiseker?
        </Heading>
        <HStack spacing={8} justifyContent="center">
          <Box textAlign="center">
            <IconButton aria-label="Location" icon={<FaMapMarkerAlt />} size="lg" isRound colorScheme="teal" />
            <Text fontSize="lg" fontFamily="Montserrat" mt={2}>
              Prime Location
            </Text>
          </Box>
          <Box textAlign="center">
            <IconButton aria-label="Business" icon={<FaBuilding />} size="lg" isRound colorScheme="teal" />
            <Text fontSize="lg" fontFamily="Montserrat" mt={2}>
              Business Friendly
            </Text>
          </Box>
          <Box textAlign="center">
            <IconButton aria-label="Community" icon={<FaUsers />} size="lg" isRound colorScheme="teal" />
            <Text fontSize="lg" fontFamily="Montserrat" mt={2}>
              Community Focused
            </Text>
          </Box>
        </HStack>
      </VStack>

      {/* Call to Action Section */}
      <Box bg="teal.500" color="white" py={16} textAlign="center">
        <Heading as="h2" size="xl" fontFamily="Clarendon Text Pro">
          Ready to Discover Beiseker?
        </Heading>
        <Button colorScheme="whiteAlpha" size="lg" mt={4}>
          Get Started
        </Button>
      </Box>
    </Container>
  );
};

export default Index;
