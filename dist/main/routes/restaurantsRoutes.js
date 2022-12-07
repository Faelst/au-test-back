"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const adapters_1 = require("@/main/adapters");
const factories_1 = require("@/main/factories");
exports.default = (router) => {
    router.get('/restaurant', (0, adapters_1.adaptRoute)((0, factories_1.makeGetRestaurantsAvailableController)()));
};
//# sourceMappingURL=restaurantsRoutes.js.map