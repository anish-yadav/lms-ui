import { ChakraProvider, Box, Text, Link, VStack, Code, Grid, Flex } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Sidebar } from "./components/Sidebar/Sidebar";
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
      <Box textAlign="center" flex="1" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
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
    </Wrapper>
  </ChakraProvider>
);
