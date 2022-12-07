"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeGetRestaurantsAvailableController = void 0;
const getRestaurantsAvailableController_1 = require("@/presentation/controllers/getRestaurantsAvailableController");
const inMemoryDataBase_1 = require("@/infra/db/inMemoryDataBase");
const withinOpeningHours_1 = require("@/useCases/withinOpeningHours");
const convertDateTimeInSeconds_1 = require("@/useCases/helpers/convertDateTimeInSeconds");
const makeGetRestaurantsAvailableController = () => {
    const inMemoryDataBase = inMemoryDataBase_1.IN_MEMORY_DB;
    const convertDateTimeInSeconds = new convertDateTimeInSeconds_1.ConvertDateTimeInSeconds();
    const withinOpeningHours = new withinOpeningHours_1.WithinOpeningHours(convertDateTimeInSeconds);
    return new getRestaurantsAvailableController_1.GetRestaurantsAvailableController(withinOpeningHours, inMemoryDataBase);
};
exports.makeGetRestaurantsAvailableController = makeGetRestaurantsAvailableController;
//# sourceMappingURL=index.js.map