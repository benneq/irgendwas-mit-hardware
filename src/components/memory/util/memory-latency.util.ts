import { MemoryLatencyPreset } from "../model/memory-latency-preset.model";
import { MemoryType } from "../model/memory-type.model";

export const memoryLatencyPresetOf = (type: MemoryType, frequency: number, timing: number): MemoryLatencyPreset => {
    return { type, frequency, timing };
};

export const calculateFrequencyMultiplier = (type: MemoryType): number => {
    switch(type) {
        case 'SDR': return 1;
        case 'DDR': return 2;
    };
};

export const calculateClockCycleTime = (frequency: number, frequencyMultiplier: number): number => {
    return frequency / (frequencyMultiplier * 1000);
};

export const calculateClockCyclesPerNs = (clockCycleTime: number): number => {
    return 1 / clockCycleTime;
};

export const calculateLatency = (timing: number, clockCyclesPerNs: number): number => {
    return timing * clockCyclesPerNs;
};