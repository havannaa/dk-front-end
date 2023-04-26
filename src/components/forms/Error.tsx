import * as React from "react";
import {Field} from "react-final-form";
import {Typography} from "@mui/material";

type Props = {
    name: string
}
const Error = ({ name }:Props) => (
    <Field
        name={name}
        subscription={{ touched: true, error: true }}
        render={({ meta: { touched, error } }) =>
            touched && error ?
                <Typography variant={'subtitle2'} component={'span'}   align="center" sx={{
                    fontWeight: 'bold',
                }}    >
                    { error}
                </Typography>

                : null
        }
    />
)
export default Error