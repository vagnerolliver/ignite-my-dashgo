import { Box, Button, HStack } from "@chakra-ui/react";

import { PaginationItem } from "./PaginationItem";

export function Pagination() {
  return(
    <HStack justify="space-between" mt="8">
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <HStack>
        <PaginationItem isCurrent page={1} />
        <PaginationItem page={2} />
        <PaginationItem page={3} />
        <PaginationItem page={4} />
        <PaginationItem page={5} />
      </HStack>
    </HStack>
  )
}