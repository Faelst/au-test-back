"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetRestaurantsAvailableController = void 0;
class GetRestaurantsAvailableController {
    constructor(withinOpeningHours, inMemoryDatabase) {
        this.withinOpeningHours = withinOpeningHours;
        this.inMemoryDatabase = inMemoryDatabase;
    }
    async handle(request) {
        const { time } = request;
        const availableRestaurants = this.inMemoryDatabase.filter(restaurant => {
            return this.withinOpeningHours.handle({
                inputTime: time,
                openTime: restaurant.OpenHours,
                closeTime: restaurant.closeHours
            });
        });
        return {
            statusCode: 200,
            body: availableRestaurants
        };
    }
}
exports.GetRestaurantsAvailableController = GetRestaurantsAvailableController;
//# sourceMappingURL=getRestaurantsAvailableController.js.map