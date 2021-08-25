import { Injectable } from '@angular/core';

@Injectable()
export class ExternalMockService {

    constructor() { }

    getExternalInfo() {
        return { info: 'example' };
    }
}
