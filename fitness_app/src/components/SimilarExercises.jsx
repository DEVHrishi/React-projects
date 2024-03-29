import { Box, Stack, Typography } from "@mui/material"

import HorizontalScrollbar from "./HorizontalScrollbar"
import Loader from "./Loader"

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { lg: '100px', xs: '0'}}}>
      <Typography variant="h3" mb={5}>
        Exercises that target the same muscle groups
      </Typography>
      <Stack>
        {targetMuscleExercises.length ? <HorizontalScrollbar data={targetMuscleExercises} /> : <Loader />}
      </Stack>

      <Typography variant="h3" mb={5} mt={5}>
        Exercises that target the same muscle groups
      </Typography>
      <Stack>
        {equipmentExercises.length ? <HorizontalScrollbar data={equipmentExercises} /> : <Loader />}
      </Stack>
    </Box>
  )
}

export default SimilarExercises