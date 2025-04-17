import { Box, HStack, Heading } from "@chakra-ui/react";

import { Treatment } from "./Treatment";
import { useTreatments } from "./hooks/useTreatments";

export function Treatments() {
  const treatments = useTreatments();
  return (
    <Box>
      <Heading mt={10} textAlign="center">
        Available Treatments
      </Heading>
      <HStack m={10} spacing={8} justify="center">
        {treatments.map((treatmentData) => (
          <Treatment key={treatmentData.id} treatmentData={treatmentData} />
        ))}
      </HStack>
    </Box>
  );
}
