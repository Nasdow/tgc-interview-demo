import * as React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {FormControl, Grid, InputLabel, MenuItem, Select} from "@mui/material";


function GainType(props) {

    const gains = ["Food", "Object", "Travel"];

    return (
        <>
            <Grid item>
                <Card sx={{minWidth: 275}}>
                    <CardContent>
                        <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                            Type de gain
                        </Typography>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Type de gain</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Type de gain"
                            >
                                {gains.map(gain => <MenuItem onClick={() => props.setGainType(gain)}
                                                             value={gain}>{gain}</MenuItem>)}
                            </Select>
                        </FormControl>
                    </CardContent>
                </Card>
            </Grid>
        </>
    )
}

export default GainType
