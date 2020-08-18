import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import NumberField from '@components/common/NumberField';
import SelectField from '@components/common/SelectField';
import { isEqual } from 'lodash-es';
import { ValueOf } from '@utils/types.util';



const calc = (sdram: ValueOf<typeof SDRAM>, chipClockRate?: number, busClockRate?: number, transferRate?: number) => {
    if(transferRate === undefined) {
        transferRate = chipClockRate * sdram.prefetch || busClockRate * sdram.type.multiplier;
    }

    if(chipClockRate === undefined) {
        chipClockRate = transferRate / sdram.prefetch;
    }

    if(busClockRate === undefined) {
        busClockRate = transferRate / sdram.type.multiplier;
    }

    const dataTransferRate = transferRate * sdram.busWidth / 8;

    return {
        type: sdram,
        chipClockRate,
        transferRate,
        busClockRate,
        dataTransferRate,
    }
};

const sdramTypeOf = (name: string, multiplier: number) => {
    return {
        name,
        multiplier
    }
};

const sdramOf = (name: string, type: ValueOf<typeof SDRAM_TYPE>, busWidth: number, prefetch: number) => {
    return {
        name,
        type,
        busWidth,
        prefetch
    }
};

const SDRAM_TYPE = {
    'SDR': sdramTypeOf('SDR', 1),
    'DDR': sdramTypeOf('DDR', 2),
};

const SDRAM = {
    'SDR': sdramOf('SDR', SDRAM_TYPE.SDR, 64, 1),
    'DDR': sdramOf('DDR', SDRAM_TYPE.DDR, 64, 2),
    'DDR2': sdramOf('DDR2', SDRAM_TYPE.DDR, 64, 4),
    'DDR3': sdramOf('DDR3', SDRAM_TYPE.DDR, 64, 8),
    'DDR4': sdramOf('DDR4', SDRAM_TYPE.DDR, 64, 8),
    'DDR5': sdramOf('DDR5', SDRAM_TYPE.DDR, 64, 16),
};

const presets = [
    calc(SDRAM.SDR, 66.67, undefined, undefined),
    calc(SDRAM.DDR, 200, undefined, undefined),
    calc(SDRAM.DDR2, 200, undefined, undefined),
    calc(SDRAM.DDR3, 200, undefined, undefined),
    calc(SDRAM.DDR4, 266.67, undefined, undefined),
    calc(SDRAM.DDR5, 325, undefined, undefined),
];



const MemoryBandwidthCalculator: React.FunctionComponent = () => {
    const [value, setValue] = useState(presets[4]);

    const handleTypeChange = (type: ValueOf<typeof SDRAM>) => {
        setValue(value => calc(type, undefined, undefined, value.transferRate));
    };

    const handleChipClockRateChange = (chipClockRate?: number) => {
        setValue(value => calc(value.type, chipClockRate, undefined, undefined));
    };

    const handleBusClockRateChange = (busClockRate?: number) => {
        setValue(value => calc(value.type, undefined, busClockRate, undefined));
    };

    const handleTransferRateChange = (transferRate?: number) => {
        setValue(value => calc(value.type, undefined, undefined, transferRate));
    };



    return (
        <>
            <Grid container direction="column" spacing={2}>
                <Grid item>
                    <SelectField
                        label="Presets"
                        value={value}
                        options={presets}
                        renderOption={preset => `${preset.type.name}-${Math.floor(preset.transferRate)}`}
                        onValueChange={setValue}
                        valueComparator={isEqual}
                    >
                        Custom
                    </SelectField>
                </Grid>
                <Grid item>
                    <Grid container spacing={2}>
                        <Grid item>
                            <SelectField
                                label="SDRAM Typ"
                                value={value.type}
                                options={[SDRAM.SDR, SDRAM.DDR, SDRAM.DDR2, SDRAM.DDR3, SDRAM.DDR4, SDRAM.DDR5]}
                                renderOption={type => type.name}
                                onValueChange={handleTypeChange}
                            />
                        </Grid>
                        <Grid item>
                            <NumberField
                                label="Bus Takt"
                                helperText="In MHz"
                                value={value.busClockRate}
                                onValueChange={handleBusClockRateChange}
                                allowNegative={false}
                            />
                        </Grid>
                        <Grid item>
                            <NumberField
                                label="Transferrate"
                                helperText="In MT/s"
                                value={value.transferRate}
                                onValueChange={handleTransferRateChange}
                                allowNegative={false}
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item>
                            <NumberField
                                label="Chip Takt"
                                helperText="In MHz"
                                value={value.chipClockRate}
                                onValueChange={handleChipClockRateChange}
                                allowNegative={false}
                            />
                        </Grid>
                        <Grid item>
                            <NumberField
                                label="Busbreite"
                                helperText="In bit"
                                value={value.type.busWidth}
                                disabled
                            />
                        </Grid>
                        <Grid item>
                            <NumberField
                                label="Prefetch"
                                helperText="In bit"
                                value={value.type.prefetch}
                                disabled
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item>
                            <NumberField
                                label="Datenübertragungsrate"
                                helperText="In MB/s"
                                value={value.dataTransferRate}
                                disabled
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default MemoryBandwidthCalculator;
