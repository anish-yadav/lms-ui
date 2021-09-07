import { Box, ChakraProvider, Code, Flex, Grid, Link, Text, VStack } from "@chakra-ui/react";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Topbar } from "./components/Topbar/Topbar";
import { Logo } from "./Logo";
import { theme } from "./utils/theme/theme";

const Wrapper = (props) => {
  return (
    <Flex direction="row">
      <Sidebar />
      {props.children}
    </Flex>
  );
};

export const App = () => (
  <ChakraProvider theme={theme}>
    <Wrapper>
      {/* TODO: the margin should be dynamic */}
      <Flex direction="column" marginLeft="250px" flex={1}>
        <Topbar />
        <Box textAlign="center" flex="1" fontSize="xl">
          <Grid minH="100vh" p={3}>
            <VStack spacing={8}>
              <Logo h="40vmin" pointerEvents="none" />
              <Text>
                Edit <Code fontSize="xl">src/App.tsx</Code> and save to reload.
              </Text>
              <Link
                color="teal.500"
                href="https://chakra-ui.com"
                fontSize="2xl"
                target="_blank"
                rel="noopener noreferrer">
                Learn Chakra
              </Link>
            </VStack>
          </Grid>
        </Box>
      </Flex>
    </Wrapper>
  </ChakraProvider>
);
