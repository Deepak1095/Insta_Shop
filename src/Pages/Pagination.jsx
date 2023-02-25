import React from "react";
import { Button, Box } from "@chakra-ui/react";

export default function Pagination ({ currentPage, total, onChange }) {
    console.log(currentPage)
  const prevBtn = (
    <Button
      colorScheme="red"
      marginX="px"
      isDisabled={currentPage <= 1}
      onClick={() => onChange(currentPage - 1)}
    >
      Prev
    </Button>
  );
  const nextBtn = (
    <Button
      marginX="10px"
      colorScheme="red"
      isDisabled={currentPage === total}
      onClick={() => onChange(currentPage + 1)}
    >
      Next
    </Button>
  );
  return (
    <Box textAlign="center">
      {prevBtn}
      {currentPage}
      {nextBtn}
    </Box>
  );
};