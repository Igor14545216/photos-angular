import { Injectable, Inject, PLATFORM_ID } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class PlatformDetectorService {

    constructor(@Inject(PLATFORM_ID) private platformId: string) { }

    isPlatformBrowser() {
        return this.platformId;
    }
}