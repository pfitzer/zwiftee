import {Deserializable} from './deserializable.model';

export class PreferencesModel implements Deserializable {
    units: string;
    locale: string;

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}