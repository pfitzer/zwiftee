import {Deserializable} from './deserializable.model';

export class Session implements Deserializable {
    created: string;
    time_elapsed: number;
    distance: number;
    avg_speed: number;
    max_speed: number;
    avg_power: number;
    max_power: number;
    total_ascent: number;
    avg_heart_rate: number;
    max_heart_rate: number;
    avg_cadence: number;
    max_cadence: number;
    type: string;

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}
