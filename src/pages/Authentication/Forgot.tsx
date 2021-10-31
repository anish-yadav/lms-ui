import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { NotificationContext } from "../../context/notification";
import { requestResetPassword } from "../../service/user";

export default function Forgot() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const { showSuccess, showError } = useContext(NotificationContext);
  const forgot = async () => {
    setLoading(true);
    const isErr = await requestResetPassword(email);
    if (!isErr) {
      showError({ title: "Error", description: "failed to request reset" });
    } else {
      showSuccess({ title: "Success", description: "check your email for confirmation" });
    }
    setLoading(false);
  };
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Enter you mail address</Heading>
          <Text textAlign={"center"} fontSize={"lg"} color={"gray.600"}>
            we will send you a mail with link to reset <br /> password ✌️
          </Text>
        </Stack>
        <Box rounded={"lg"} bg={useColorModeValue("white", "gray.700")} boxShadow={"lg"} p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                placeholder="Enter your registered e-mail"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </FormControl>
            <Stack spacing={10}>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={forgot}
                isLoading={loading}>
                Send Link
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
