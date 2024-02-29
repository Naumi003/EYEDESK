    // *******Layout of Ucva, Pinhole, Glasses & Contact Lens.*******
import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
// import ButtonComp from "../component/MiniComp/ButtonComp";
// import { UcvaFirst, UcvaSecond } from "./Ucva";
import TextFieldInp from "../component/MiniComp/TextFieldInp";
import SelectAutoWidth from "../component/MiniComp/SelectInp";
import { FourColInpTable, UcvaFirstMaping, UcvaSecondMaping } from "./RefractionPrimary";
import ButtonComp from "../component/MiniComp/ButtonComp";
import { LabelSelectUcva } from "../component/MiniComp/LabelSelectUcva";
import { ArrowBtn } from "./HelpingComp";
// import { LabelSelect } from "../component/VisualAcuity/SecondaryUcva";
// import { LabelSelect } from "../VisualAcuity/SecondaryUcva";
import ForwardIcon from '@mui/icons-material/Forward';

export function FirstUcvaLayout() {

    return (
        <>
            <Grid container rowSpacing={"2rem"}>
                <Grid item md={1.5}><Typography fontSize={"0.95rem"}>UCVA</Typography></Grid>
                <Grid item md={9}>

                    <UcvaFirstMaping />
                </Grid>
                <Grid item md={1.5}>
                    <Stack flexDirection={"row"} justifyContent={"end"}>
                        <ButtonComp mdFontSize={"0.75rem"} backgroundColor={"white"} minWidth={"10px"} label={"P"} color={"black"} />
                    </Stack>
                </Grid>
            </Grid>
        </>
    )
}


export function SecondUcvaLayout() {

    return (
        <Grid container>
            <Grid item md={1.5}></Grid>
            <Grid item md={9}>
                <UcvaSecondMaping />
            </Grid>
            <Grid item md={1.5}>
                <Stack flexDirection={"row"} justifyContent={"end"}>
                    <ButtonComp mdFontSize={"0.75rem"} backgroundColor={"white"} minWidth={"10px"} label={"P"} color={"black"} />
                </Stack>
            </Grid>
        </Grid>

    )
}


// ****** Just inject after ucva **********

export function SelectLabelAfterUcva() {

    return (
        <Grid container sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
            <Grid item md={1.5}>

            </Grid>
            <Grid item md={9}>
                <Grid container columnSpacing={1.5}>
                    <Grid item md={1} sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
                        <Typography fontSize={"0.95rem"}>PR:</Typography>
                    </Grid>
                    <Grid item md={2.75}>
                        <LabelSelectUcva label={"S"} />
                    </Grid>
                    <Grid item md={2.75}>
                        <LabelSelectUcva label={"I"} />
                    </Grid>
                    <Grid item md={2.75}>
                        <LabelSelectUcva label={"N"} />
                    </Grid>
                    <Grid item md={2.75}>
                        <LabelSelectUcva label={"T"} />
                    </Grid>
                </Grid>
            </Grid>

            <Grid item md={1.5}>
            </Grid>
        </Grid>
    )
}

export function PinholeLayout() {

    return (
        <Grid container>
            <Grid item md={1.5}><Typography fontSize={"0.95rem"}>Pinhole</Typography></Grid>
            <Grid item md={9}>

                <UcvaFirstMaping />
            </Grid>
            <Grid item md={1.5}>
                <Stack flexDirection={"column"} spacing={0.1} alignItems={"end"}>
                    <ButtonComp backgroundColor={"white"} minWidth={"10px"} label={"P"} color={"black"} />
                    <ButtonComp backgroundColor={"white"} minWidth={"9px"} padding={"6px 13.5px"} label={"NI"} color={"black"} />
                </Stack>
            </Grid>
        </Grid>

    )
}



export function GlassesLayout() {

    return (
        <Grid container>
            <Grid item md={1.5}><Typography fontSize={"0.95rem"}>Glasses</Typography></Grid>
            <Grid item md={9}>

                <UcvaFirstMaping />
            </Grid>
            <Grid item md={1.5}>
                <Stack flexDirection={"row"} justifyContent={"end"}>
                    <ButtonComp backgroundColor={"white"} minWidth={"10px"} label={"P"} color={"black"} />
                </Stack>
            </Grid>
        </Grid>

    )
}


export function ContactLensLayout() {

    return (
        <Grid container>
            <Grid item md={1.5}><Typography fontSize={"0.95rem"}>Contact Lens</Typography></Grid>
            <Grid item md={9}>

                <UcvaFirstMaping />
            </Grid>
            <Grid item md={1.5}>
                <Stack flexDirection={"row"} justifyContent={"end"}>
                    <ButtonComp backgroundColor={"white"} minWidth={"10px"} label={"P"} color={"black"} />
                </Stack>
            </Grid>
        </Grid>

    )
}

export function LabelCommentLayout({size}) {

    return (
        <Grid container>
            <Grid item md={1.5}>
                <Typography fontSize={"0.95rem"}>
                    Comment
                </Typography>
            </Grid>
            <Grid item md={10.5}>
                <TextFieldInp size={size} width={"100%"} backgroundColor={"white"} />
            </Grid>
        </Grid>
    )
}

export function LabelAndSelectLayout({ label }) {

    return (
        <Grid container columnSpacing={0.5}>
            <Grid item md={2} sx={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                <Typography fontSize={"0.95rem"}>{label}</Typography>
            </Grid>
            <Grid item md={10}>
                <SelectAutoWidth bgcolor={"white"} />
            </Grid>
        </Grid>
    )
}


// ***********Four col layout**********



