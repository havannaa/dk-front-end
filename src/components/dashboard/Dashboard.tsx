import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const Dashboard = () => {
  return (
	<Box mb={4} mt={4}>
		<Box sx={{ backgroundColor: '#26C9FF', color: 'white' }} pb={1} pt={1}>
			<Grid container>
			  <Grid item xs={12} sm={12}>
				<Typography variant="body1" textAlign="center">
					User Dashboard Page
				</Typography>
			  </Grid>
			</Grid>
		</Box>
	</Box>
  );
};

export default Dashboard;

