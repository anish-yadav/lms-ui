import { Flex } from "@chakra-ui/layout";
import Lottie from "react-lottie";
import data from "./loading.json";

const LoadingComponent = () => {
  const options = {
    loop: true,
    autoplay: true,
    animationData: data,
  };
  return (
    <Flex
      position={"fixed"}
      h={"100%"}
      w={"100%"}
      top={0}
      left={0}
      bg={"white"}
      justifyContent="center"
      alignItems="center">
      <Lottie height={250} options={options} />
    </Flex>
  );
};

export default LoadingComponent;
