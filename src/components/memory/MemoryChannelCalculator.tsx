import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import ArrayJoin from '../common/ArrayJoin';
import PositiveIntegerField from '../common/PositiveIntegerField';
import NumberField from '../common/NumberField';

const MemoryChannelCalculator: React.FunctionComponent = () => {
    const [channels, setChannels] = useState(2);
    const [slotsPerChannel, setSlotsPerChannel] = useState(2);
    const [modules, setModules] = useState([8, 8, 4, 4]);
    const [assignments, setAssignments] = useState<number[][]>([]); 

    const handleChannelsChange = (val?: number) => {
        setChannels(val || NaN);
    };

    const handleSlotsPerChannelChange = (val?: number) => {
        setSlotsPerChannel(val || NaN);
    };

    const handleModuleChange = (idx: number) => (val?: number) => {
        const arr = modules.slice();
        arr[idx] = val || NaN;
        setModules(arr);
    };

    useEffect(() => {
        const newLength = Math.max(channels * slotsPerChannel, 0) || 0;
        setModules(modules => [...modules, ...Array(Math.max(newLength - modules.length, 0)).fill(0)].slice(0, newLength));
    }, [channels, slotsPerChannel]);

    useEffect(() => {
        const assignments = new Array<number[]>(channels || 0).fill([]);
        const sortedModules = [...modules].filter(isFinite).sort((a, b) => b - a);
        for(const module of sortedModules) {
            const idx = assignments.map((assignment, i) => ({
                index: i,
                free: slotsPerChannel - assignment.length,
                sum: assignment.reduce((a, b) => a + b, 0)
            }))
            .filter(assignment => assignment.free > 0)
            .reduce((a, b) => a.sum <= b.sum ? a : b)
            .index;

            assignments[idx] = [...assignments[idx], module || 0];
        }
        setAssignments(assignments);
    // eslint-disable-next-line
    }, [modules]);

    return (
        <>
            <Grid container spacing={2}>
                <Grid item>
                    <PositiveIntegerField
                        label="Channels"
                        helperText="Anzahl"
                        value={channels}
                        onValueChange={handleChannelsChange}
                    />
                </Grid>
                <Grid item>
                    <PositiveIntegerField
                        label="Slots pro Channel"
                        helperText="Anzahl"
                        value={slotsPerChannel}
                        onValueChange={handleSlotsPerChannelChange}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                {modules.map((module, i) =>
                    <Grid key={i} item>
                        <NumberField
                            label={`Modul ${i+1} Kapazität`}
                            helperText="In GB"
                            value={module}
                            onValueChange={handleModuleChange(i)}
                            allowNegative={false}
                        />
                    </Grid>
                )}
            </Grid>
            <Grid container spacing={2} direction="column">
                {assignments.map((assignment, i) => 
                    <Grid key={i} item>
                        Channel {String.fromCharCode(i+65)}: <ArrayJoin value={assignment.filter(module => module !== 0).map(module => module + " GB")} separator={", "} />
                    </Grid>
                )}
            </Grid>
        </>
    );
};

export default MemoryChannelCalculator;
