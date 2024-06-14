import * as React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {FormControl, Grid, InputLabel, MenuItem, Select} from "@mui/material";


function PictoType(props) {

    const gains = {
        Food: ["Frites", "Coca", "Glace"],
        Object: ["PS5", "Xbox", "Wii"],
        Travel: ["Avion", "Sac", "Plage"],
    };

    return (
        <>
            <Grid item>
                <Card sx={{minWidth: 275}}>
                    <CardContent>
                        <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                            Type de picto
                        </Typography>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Type de picto</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Type de gain"
                            >
                                {gains[props.gainType]?.map(gain => <MenuItem value={gain}>{gain}</MenuItem>)}
                            </Select>
                        </FormControl>
                    </CardContent>
                </Card>
            </Grid>
        </>
    )
}

export default PictoType
