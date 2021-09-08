import { Flex, SimpleGrid, Box, Text, theme } from "@chakra-ui/react"
import dynamic from 'next/dynamic'

import { Sidebar } from "../components/Layout/Sidebar/Index"
import { Header } from "../components/Layout/Header/Index"

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false
})

const options = {
  chart: {
    toolbar: {
      show: false
    },
    zoom: {
      enabled: false
    },
    foreColor: theme.colors.gray[500]
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false
  },
  tooltip: {
    enabled: false
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600]
    },
    axisTicks :{
      color: theme.colors.gray[600]
    },
    categories: [
      '2021-03-18T09:00:00.000Z',
      '2021-03-19T09:00:00.000Z',
      '2021-03-20T09:00:00.000Z',
      '2021-03-21T09:00:00.000Z',
      '2021-03-22T09:00:00.000Z',
      '2021-03-23T09:00:00.000Z',
    ]
  },
  fill: {
    opacity: .3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: .7,
      opacityTo: .3
    }
  }
}

const series = [
  { name: 'series1', data: [31, 21, 30, 10, 20, 33]}
]

export default function Dashboard() { 
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" maxWidth={1480} my="6" mx="auto" px="6">
        <Sidebar />

        <SimpleGrid flex="1" gap="4" minChildWidth="320px" alignItems="flex-start">
          <Box
            bg="gray.800"
            borderRadius={8}
            p={['4', '8']}
            pb="4"
          > 
            <Text fontSize="lg" mb="4">Inscritos da Semana</Text> 
            <Chart options={options} series={series} type="area" height={360}/> 
          </Box>

          <Box
            bg="gray.800"
            borderRadius={8}
            p={['4', '8']}
            pb="4"
          > 
            <Text fontSize="lg" mb="4">Taxa de abertura</Text> 
            <Chart options={options} series={series} type="area" height={360}/> 
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}
