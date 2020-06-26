import { MemoryType } from "./memory-type.model";

export type MemoryLatencyPreset = {
    type: MemoryType
    frequency: number
    timing: number
}