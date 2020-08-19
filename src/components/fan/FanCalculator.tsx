import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import NumberField from '@components/common/NumberField';
import SelectField from '@components/common/SelectField';
import { isEqual } from 'lodash-es';



const presetOf = (rpm: number, flow: number, pressure: number, powerConsumption: number) => {
    return { rpm, flow, pressure, powerConsumption };
};

const presets = [
    presetOf(2000, 102.1, 2.34, 1.68),
    presetOf(1800, 95.2, 2.2, 2.4),
    presetOf(1500, 98.7, 1.47, 0.95),
    presetOf(1450, 80.47, 1.79, 1.44),
];

const FanCalculator: React.FunctionComponent = () => {
    const [value, setValue] = useState(presets[0]);
    const [newRpm, setNewRpm] = useState(1000);
    const { rpm, flow, pressure, powerConsumption } = value;

    const handleRpmChange = (val?: number) => {
        setValue(value => ({ ...value, rpm: val || NaN }));
    };

    const handleFlowChange = (val?: number) => {
        setValue(value => ({ ...value, flow: val || NaN }));
    };

    const handlePressureChange = (val?: number) => {
        setValue(value => ({ ...value, pressure: val || NaN }));
    };

    const handlePowerConsumptionChange = (val?: number) => {
        setValue(value => ({ ...value, powerConsumption: val || NaN }));
    };

    const newFlow = newRpm / rpm * flow;
    const newPressure = Math.pow(newRpm / rpm, 2) * pressure;
    const newPowerConsumption = Math.pow(newRpm / rpm, 3) * powerConsumption;

    return (
        <>
            <Grid container direction="column" spacing={2}>
                <Grid item>
                    <SelectField
                        label="Presets"
                        value={value}
                        options={presets}
                        renderOption={preset => `${preset.rpm} rpm ${preset.flow} m³/​h ${preset.pressure} mmH₂O ${preset.powerConsumption} W`}
                        onValueChange={setValue}
                        valueComparator={isEqual}
                    >
                        Custom
                    </SelectField>
                </Grid>
                <Grid item>
                    <Grid container spacing={2}>
                        <Grid item>
                            <NumberField
                                label="Drehzahl"
                                helperText="In rpm"
                                value={rpm}
                                onValueChange={handleRpmChange}
                                allowNegative={false}
                            />
                        </Grid>
                        <Grid item>
                            <NumberField
                                label="Volumenstrom"
                                helperText="In m³/​h"
                                value={flow}
                                onValueChange={handleFlowChange}
                                allowNegative={false}
                            />
                        </Grid>
                        <Grid item>
                            <NumberField
                                label="Druck"
                                helperText="In mmH₂O"
                                onValueChange={handlePressureChange}
                                value={pressure}
                                allowNegative={false}
                            />
                        </Grid>
                        <Grid item>
                            <NumberField
                                label="Leistungsaufnahme"
                                helperText="In W"
                                value={powerConsumption}
                                onValueChange={handlePowerConsumptionChange}
                                allowNegative={false}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container spacing={2}>
                        <Grid item>
                            <NumberField
                                label="Neue Drehzahl"
                                helperText="In rpm"
                                value={newRpm}
                                onValueChange={setNewRpm}
                                allowNegative={false}
                            />
                        </Grid>
                        <Grid item>
                            <NumberField
                                label="Neuer Volumenstrom"
                                helperText="In m³/​h"
                                value={newFlow}
                                disabled
                            />
                        </Grid>
                        <Grid item>
                            <NumberField
                                label="Neuer Druck"
                                helperText="In mmH₂O"
                                value={newPressure}
                                disabled
                            />
                        </Grid>
                        <Grid item>
                            <NumberField
                                label="Neue Leistungsaufnahme"
                                helperText="In W"
                                value={newPowerConsumption}
                                disabled
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default FanCalculator;
