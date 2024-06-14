import * as React from "react";
import {useState} from "react";
import {Box, Grid} from "@mui/material";
import GainType from "./GainType";
import PictoType from "./PictoType";

const bull = (
    <Box
        component="span"
        sx={{display: 'inline-block', mx: '2px', transform: 'scale(0.8)'}}
    >
        •
    </Box>
);

function App() {

    const [gain, setGain] = useState("");
    const [gains, setGains] = useState([]);
    const [selectedGain, setSelectedGain] = useState(null);
    const [gainType, setGainType] = useState(null);

    return (
        <>
            <div className="w-full ">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gain">
                        Gain
                    </label>
                    <input
                        className=""
                        id="gain"
                        type="text"
                        placeholder="Gain"
                        onKeyDown={({key}) => {
                            if (key === 'Enter' && gain.length && gain.length < 15 && !gains.includes(gain)) {
                                gains.push(gain);
                                setGains([...gains]);
                                setGain("");
                            }
                        }}
                        onChange={(e) => setGain(e.target.value)}
                        value={gain}
                    />
                </div>

                <div className="flex gap-2">
                    {gains.map(value =>
                        <div
                            className={"relative grid select-none items-center whitespace-nowrap rounded-lg bg-gray-900/10 py-1.5 px-3 font-sans text-xs font-bold uppercase text-gray-900 "
                            + (value === selectedGain ? "bg-blue-500" : "")}>
                            <div className={"flex"}>
                                <span onClick={() => setSelectedGain(value)}>{value}</span>
                                &nbsp;
                                <span onClick={() => {
                                    setGains([...gains.filter(g => g !== value)]);
                                    if (selectedGain === value) setSelectedGain(null);
                                }}>x</span>
                            </div>
                        </div>
                    )}
                </div>

                <br/>

                <h1>Suggestions en fonction de votre commerce</h1>

                <br/>

                <div className="flex gap-2">
                    {["Burger", "Frite", "Boisson", "Voyage"].map(value => <div
                        className="relative grid select-none items-center whitespace-nowrap rounded-lg  py-1.5 px-3 font-sans text-xs font-bold uppercase text-gray-400">
                        <span onClick={() => {
                            if (!gains.includes(value)) {
                                gains.push(value);
                                setGains([...gains]);
                            }
                        }}>{value}</span>
                    </div>)}
                </div>

                <br/>

                <Grid sx={{flexGrow: 1}} container spacing={2}>
                    <Grid item xs={12}>
                        <Grid container justifyContent="center" spacing={12}>
                            <GainType setGainType={setGainType}/>
                            <PictoType gainType={gainType}/>
                            <GainType/>
                            <GainType/>
                        </Grid>
                    </Grid>
                </Grid>

                {/*<Grid container rowSpacing={1} columnSpacing={{xs: 1, sm: 2, md: 3}}>*/}
                {/*    <Grid item xs={6}>*/}
                {/*        <label>1</label>*/}
                {/*    </Grid>*/}
                {/*    <Grid item xs={6}>*/}
                {/*        <label>2</label>*/}
                {/*    </Grid>*/}
                {/*    <Grid item xs={6}>*/}
                {/*        <label>3</label>*/}
                {/*    </Grid>*/}
                {/*    <Grid item xs={6}>*/}
                {/*        <label>4</label>*/}
                {/*    </Grid>*/}
                {/*</Grid>*/}

            </div>
        </>
    )
}

export default App
