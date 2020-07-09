import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import NumberField from '../util/NumberField';
import ArrayJoin from '../util/ArrayJoin';

const MemoryChannelCalculator: React.FunctionComponent = () => {
    const [channels, setChannels] = useState(2);
    const [slotsPerChannel, setSlotsPerChannel] = useState(2);
    const [modules, setModules] = useState([8, 8, 4, 4]);
    const [assignments, setAssignments] = useState<number[][]>([]); 

    const handleChannelsChange = (e: React.ChangeEvent<{ value: unknown }>) => {
        setChannels(e.target.value as number);
    };

    const handleSlotsPerChannelChange = (e: React.ChangeEvent<{ value: unknown }>) => {
        setSlotsPerChannel(e.target.value as number);
    };

    const handleModuleChange = (idx: number) => (e: React.ChangeEvent<{ value: unknown }>) => {
        const arr = modules.slice();
        arr[idx] = e.target.value as number;
        setModules(arr);
    };

    useEffect(() => {
        const newLength = Math.max(channels * slotsPerChannel, 0) || 0;
        setModules(modules => [...modules, ...Array(Math.max(newLength - modules.length, 0)).fill(0)].slice(0, newLength));
    }, [channels, slotsPerChannel]);

    useEffect(() => {
        const assignments = new Array<number[]>(channels || 0).fill([]);
        const sortedModules = [...modules].sort((a, b) => b - a);
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
    }, [modules]);

    return (
        <>
            <Grid container spacing={2}>
                <Grid item>
                    <NumberField
                        label="Channels"
                        helperText="Anzahl"
                        value={channels}
                        onChange={handleChannelsChange}
                    />
                </Grid>
                <Grid item>
                    <NumberField
                        label="Slots pro Channel"
                        helperText="Anzahl"
                        value={slotsPerChannel}
                        onChange={handleSlotsPerChannelChange}
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
                            onChange={handleModuleChange(i)}
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
