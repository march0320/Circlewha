import { Button, GridItem, SimpleGrid } from "@chakra-ui/react";
import CheckFilter from "./FilterButton";

export default function GridFilter({ arr, onChange }) {
  return (
    <GridItem
      h="20rem"
      overflowX="hidden"
      overflowY="auto"
      rowSpan={5}
      bg="lightGreen"
      borderRadius="7px"
    >
      <SimpleGrid column={1}>
        {arr &&
          arr.map((filter, index) => (
            <CheckFilter filter={filter} index={index} onChange={onChange} />
          ))}
      </SimpleGrid>
    </GridItem>
  );
}
