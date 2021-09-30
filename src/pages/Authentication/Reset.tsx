import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FiCheck, FiX } from "react-icons/fi";

export default function Reset() {
  const [newpassword, setNewPassword] = useState<string>("");
  const [cnfPassword, setCnfPassword] = useState<string>("");

  const [passMatch, matchPass] = useState<boolean | null>(null);

  const reset = () => {
    console.log(newpassword, cnfPassword);
  };

  useEffect(() => {
    // content
    if (newpassword === "" || newpassword.trim().length === 0) {
      matchPass(null);
    } else {
      matchPass(cnfPassword === newpassword);
    }
  }, [cnfPassword, newpassword]);

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
            to enjoy all of our cool <Link color={"blue.400"}>features</Link> ✌️
          </Text>
        </Stack>
        <Box rounded={"lg"} bg={useColorModeValue("white", "gray.700")} boxShadow={"lg"} p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>New Password</FormLabel>
              <Input
                type="text"
                placeholder="Enter new password"
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Confirm Password</FormLabel>
              <InputGroup>
                <Input
                  type="text"
                  placeholder="Confirm new password"
                  onChange={(e) => setCnfPassword(e.target.value)}
                  required
                />
                {passMatch === null ? (
                  <></>
                ) : (
                  <InputRightElement
                    children={passMatch ? <FiCheck color={"green"} /> : <FiX color={"red"} />}
                  />
                )}
              </InputGroup>
            </FormControl>
            <Stack spacing={10}>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={reset}>
                Reset
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
