"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithinOpeningHours = void 0;
class WithinOpeningHours {
    constructor(convertDateTimeInSeconds) {
        this.convertDateTimeInSeconds = convertDateTimeInSeconds;
    }
    handle({ inputTime, openTime, closeTime }) {
        const inputTimeInSeconds = this.convertDateTimeInSeconds.handle(inputTime);
        const openTimeInSeconds = this.convertDateTimeInSeconds.handle(openTime);
        const closeTimeInSeconds = this.convertDateTimeInSeconds.handle(closeTime);
        const intoOpenHours = inputTimeInSeconds < openTimeInSeconds ||
            inputTimeInSeconds > closeTimeInSeconds;
        return !intoOpenHours;
    }
}
exports.WithinOpeningHours = WithinOpeningHours;
//# sourceMappingURL=withinOpeningHours.js.map