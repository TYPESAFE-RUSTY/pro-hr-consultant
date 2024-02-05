import { generalInfo } from "./dataStructure";

export function setPropByString(obj: generalInfo, propString: string, value: string | boolean): void {
    let schema: any = obj; // a moving reference to internal objects within obj
    let pList = propString.split('.');
    let len = pList.length;

    for (let i = 0; i < len - 1; i++) {
        let elem = pList[i];
        if (!schema[elem]) schema[elem] = {}
        schema = schema[elem];
    }

    schema[pList[len - 1]] = value;
}