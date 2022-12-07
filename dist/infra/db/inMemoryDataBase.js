"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryDataBase = exports.IN_MEMORY_DB = void 0;
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
class InMemoryDataBase {
    async handle() {
        const csv = fs.readFileSync(path.resolve(__dirname, 'data', 'data.csv'));
        const array = csv.toString().split('\r');
        const headers = array[0].split(',');
        const data = array.slice(1).map((row) => {
            const values = row.split(',');
            return headers.reduce((object, header, index) => {
                object[header] = values[index].trim();
                return object;
            }, {});
        });
        const filterHoursOfOpenAndClose = data.map((row) => {
            const [openHour, closeHour] = row.OpenHours.split('-');
            return {
                RestaurantName: row.RestaurantName,
                OpenHours: openHour,
                closeHours: closeHour
            };
        });
        exports.IN_MEMORY_DB = filterHoursOfOpenAndClose;
    }
}
exports.InMemoryDataBase = InMemoryDataBase;
//# sourceMappingURL=inMemoryDataBase.js.map