import { Box, Button, HStack } from "@chakra-ui/react";

export function Pagination() {
  return(
    <HStack justify="space-between" mt="8">
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <HStack>
        <Button
          size="xs"
          fontSize="xs"
          colorScheme="pink"
          disabled
          _disabled={{
            bg: "pink.500",
            cursor: "default"
          }}
          width="4"
        >
        1
        </Button>

        <Button
          size="xs"
          fontSize="xs"
          bg="gray.700"
          _hover={{
            bg: "gray.500",
          }}
          width="4"
        >
        2
        </Button>

        <Button
          size="xs"
          fontSize="xs"
          bg="gray.700"
          _hover={{
            bg: "gray.500",
          }}
          width="4"
        >
        3
        </Button>
      </HStack>
    </HStack>
  )
}