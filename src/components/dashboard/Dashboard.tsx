import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import {useAppSelector} from "../../redux/hooks";

const Dashboard = () => {
	const userInfo = useAppSelector(state => state.userInfo)
	console.log(userInfo);
  return (
	  <Box mb={4} mt={4}>
		  <Box sx={{ backgroundColor: '#26C9FF', color: 'white' }} pb={1} pt={1}>
			  <Grid container>
				  <Grid item xs={12} sm={12}>
					  <Typography variant="body1" textAlign="center">
						  User Dashboard Page
					  </Typography>
					  <Box mt={2} display="flex" flexDirection="column">
						  <Typography>ID: {userInfo.id}</Typography>
						  <Typography>Name: {userInfo.fullName}</Typography>
						  <Typography>Email: {userInfo.email}</Typography>
						  <Typography>Phone: {userInfo.phoneNumber}</Typography>
						  <Typography>Enabled: {userInfo.enabled.toString()}</Typography>
							<Typography>Address Line 1: {userInfo.address.line1}</Typography>
						  	<Typography>Address Line 2: {userInfo.address.line2}</Typography>
						  	<Typography>City: {userInfo.address.city}</Typography>
						  	<Typography>State: {userInfo.address.state}</Typography>
						  	<Typography>Zip Code: {userInfo.address.zipCode}</Typography>
						  <Typography>Stripe Customer ID: {userInfo.stripeCustomerId}</Typography>
						  <Typography>Transaction History: {JSON.stringify(userInfo.transactionHistory)}</Typography>
						  <Typography>Authorities: {JSON.stringify(userInfo.authorities)}</Typography>
						  <Typography>Is Logged In: {userInfo.isLoggedIn.toString()}</Typography>
						  <Typography>Login Attempt Count: {userInfo.loginAttemptCount}</Typography>
						  <Typography>GeoLocation Data: {userInfo.geoLocation}</Typography>
					  </Box>
				  </Grid>
			  </Grid>
		  </Box>
	  </Box>

  );
};

export default Dashboard;

