import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { Link as RouterLink, useHistory } from "react-router-dom";
import { NotificationContext } from "../../context/notification";
import { UserContext } from "../../context/user";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const history = useHistory();

  // to disable the login button when we are trying to login
  const [logginIn, setLoggingIn] = useState<boolean>(false);

  const { showSuccess, showError } = useContext(NotificationContext);
  const { login } = useContext(UserContext);

  const tryLogin = async () => {
    setLoggingIn(true);
    const loggedIn = await login(email, password);
    setLoggingIn(false);
    if (loggedIn) {
      showSuccess({ title: "Success", description: "logged in successfully" });
      history.push("/");
    } else {
      showError({ title: "Error", description: "email or password mismatch" });
    }
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box rounded={"lg"} bg={useColorModeValue("white", "gray.700")} boxShadow={"lg"} p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                placeholder="Enter your E-mail"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}>
                <Checkbox>Remember me</Checkbox>
                <Link as={RouterLink} color={"blue.400"} to="/forgot">
                  Forgot password?
                </Link>
              </Stack>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                isLoading={logginIn}
                onClick={tryLogin}>
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
