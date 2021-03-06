'use strict';
export const SUBCONTEXTVIEW = {
    "__type__": "cc.SubContextView",
    "_name": "",
    "_objFlags": 0,
    "node": null,
    "_enabled": true,
    "__prefab": null,
    "_fps": 60,
    "_designResolutionSize": {
        "__type__": "cc.Size",
        "width": 640,
        "height": 960,
    },
};

export class SubContextView {

    static create() {
        return JSON.parse(JSON.stringify(SUBCONTEXTVIEW));
    }

    static async migrate(json2D: any) {
        const source = JSON.parse(JSON.stringify(SUBCONTEXTVIEW));
        for (const key in json2D) {
            const value = json2D[key];
            if (key === '__type__' || value === undefined || value === null) { continue; }
            source[key] = value;
        }
        return source;
    }

    static async apply(index: number, json2D: any, json3D: any) {
        const source = await SubContextView.migrate(json2D[index]);
        json3D.splice(index, 1, source);
        return source;
    }
}
