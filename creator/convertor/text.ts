'use strict';
import { ImporterBase } from '../common/base';

export class TextImporter extends ImporterBase {
    type: string = 'base';
    async import(): Promise<boolean> {
        this._3dMeta.ver = '1.0.0';
        this._3dMeta.importer = 'text';
        return true;
    }
}
