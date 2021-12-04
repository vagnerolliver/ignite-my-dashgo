import { Box, Text, HStack } from "@chakra-ui/react";

import { PaginationItem } from "./PaginationItem";

interface PaginationProps {
  totalCountOfRegisters: number,
  registersPerPage?: number,
  currentPage?: number,
  onPageChange: (page: number) => void
}

// 1 ... 4 5 6 ...20
const siblingsCount = 1

// passando 2 - 5
// [0, 0, 0]
// [2+0+1,2+1+1,2+2+1]
// [3,4,5]

function generatePagesArray(from: number, to: number) {
  return [... new Array(to - from)]
    .map((_, index) => {
      return from + index + 1
    })
    .filter(page => page > 0)
}

export function Pagination({ 
  totalCountOfRegisters,
  registersPerPage = 10,
  currentPage = 1,
  onPageChange
}: PaginationProps) {
  const lastPage = Math.round(totalCountOfRegisters / registersPerPage)

  const previousPages = currentPage > 1
    ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
    : []

  const nextPages = currentPage < lastPage 
    ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage))
    : []

  console.log(lastPage)
  return(
    <HStack justify="space-between" mt="8">
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <HStack>
 
        {currentPage > (1 + siblingsCount) && (
          <>
            <PaginationItem page={1} /> 
            {currentPage > (2 + siblingsCount) && (
              <Text color="gray.300" w="8" textAlign="center">...</Text>
            )}
          </>
        )}
 
        {previousPages.length > 0 && previousPages.map(page => {
          return <PaginationItem  key={page} page={page} /> 
        })}  

        <PaginationItem isCurrent page={currentPage} /> 
        
        {nextPages.length > 0 && nextPages.map(page => {
          return <PaginationItem  key={page} page={page} /> 
        })}

        {/* verificar se as siblings page já estão cobrindo a lastPage */}
        {(currentPage + siblingsCount) < lastPage && (
           <>
            {(currentPage + 1 + siblingsCount) < lastPage && (
              <Text color="gray.300" w="8" textAlign="center">...</Text>
            )}
            <PaginationItem page={lastPage} /> 
           </>
        )}
      
      </HStack>
    </HStack>
  )
}