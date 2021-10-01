import { Button } from "@chakra-ui/button";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { chakra, useStyleConfig } from "@chakra-ui/system";
import { FiSearch } from "react-icons/fi";
import ClassSvg from "../../assets/class.svg";
import TeacherSvg from "../../assets/teacher.svg";
interface ItemProp {
  name: string;
  url: string;
  imgSrc: string;
}

const Item: Array<ItemProp> = [
  { name: "Classes", url: "classes", imgSrc: ClassSvg },
  { name: "Teachers", url: "/users/teacher", imgSrc: TeacherSvg },
];

const Img = chakra.img;

const Manage = () => {
  const itemStyle = useStyleConfig("Card", { variant: "itemCard" });
  const itemImg = useStyleConfig("Card", { variant: "cardImg" });
  return (
    <Box p={2}>
      <Flex direction="row" justifyContent="start">
        <InputGroup mr={6} w="100%">
          <InputLeftElement children={<FiSearch color="gray" />} />
          <Input variant="search" placeholder={"Class, students, teacher, course..."} />
        </InputGroup>
        <Button>Search</Button>
      </Flex>

      <Flex mt={4} direction="column">
        <Text variant="heading">Recently accessed</Text>
        <Flex>
          {Item.map((item, i) => {
            return (
              <Box key={i} __css={itemStyle}>
                <Img __css={itemImg} src={item.imgSrc} />
                <Text variant="secondary" pt={3} textAlign="center">
                  {item.name}
                </Text>
              </Box>
            );
          })}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Manage;
