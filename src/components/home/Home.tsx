import { Box, Container, Stack } from "@mui/material";
import React from "react";
import ImageSlider from "../slider/Slider";
import Service from "../service/Service";

const Home = () => {
  return (
    <Box>
		<ImageSlider />
        <Container>
      	  <Service />
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={{ xs: 1, sm: 2, md: 8 }}
            mt={8}
          >
          </Stack>
      </Container>
    </Box>
  );
};

export default Home;

