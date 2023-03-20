import { Box, Flex } from "@chakra-ui/react";
// import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
// import { logout } from "../../Redux/admin/admin.actions";

export const Navbar = () => {
//   const navigate = useNavigate();
//   const { token } = useSelector((store) => store.admin);
//   const dispatch = useDispatch();
//   const logchange = () => {
//     dispatch(logout());

//     navigate("login");
//   };
  return (
    <Flex
      justify={"space-between"}
      align="center"
      w="full"
      h="56px"
      px="15px"
      borderBottom={"1px solid #dedede"}
      fontSize="20px"
      textAlign={"center"}
    >
      <Link to={"products"}>
        <Box _hover={{ letterSpacing: "3px" }} transition="all 0.3s" w="100px">
          Products
        </Box>
      </Link>
      <Link to={"createproduct"}>
        <Box _hover={{ letterSpacing: "3px" }} transition="all 0.3s" w="100px">
          Create Product
        </Box>
      </Link>
      <Link to={"login"}>
        <Box _hover={{ letterSpacing: "3px" }} transition="all 0.3s" w="100px">
          Login
        </Box>
      </Link>
      <Link to={"signup"}>
        <Box _hover={{ letterSpacing: "3px" }} transition="all 0.3s" w="100px">
          Signup
        </Box>
      </Link>
      
    </Flex>
  );
};
