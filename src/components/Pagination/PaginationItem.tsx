import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
  isCurrent?: boolean
  page: number
  onPageChange: (page: number) => void
}

export function PaginationItem({ isCurrent = false, onPageChange, page}: PaginationItemProps) {
  if(isCurrent) {
    return (
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
        {page}
      </Button>
    )
  }

  return (
    <Button
      size="xs"
      fontSize="xs"
      bg="gray.700"
      _hover={{
        bg: "gray.500",
      }}
      width="4"
      onClick={() => onPageChange(page)}
    >
      {page}
    </Button>
  )
}