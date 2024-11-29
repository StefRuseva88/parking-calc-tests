QUnit.module("Parking Rate Validation Tests", function () {

    // Valet Parking Tests
    QUnit.test("Valet Parking", function (assert) {
        assert.strictEqual(calculateValetParking(5), 12, "5 hours = $12");
        assert.strictEqual(calculateValetParking(8), 18, "8 hours = $18");
        assert.strictEqual(calculateValetParking(72), 18 * 3, "3 days = $54");
      
    });

    // Short-Term Parking Tests
    QUnit.test("Short-Term Parking", function (assert) {
        assert.strictEqual(calculateShortTermParking(1), 2, "1 hour = $2");
        assert.strictEqual(calculateShortTermParking(1.5), 3, "1.5 hours = $3");
        assert.strictEqual(calculateShortTermParking(12), 24, "12 hours = $24");
        assert.strictEqual(calculateShortTermParking(72), 72, "3 days = $72");
    });

    // Long-Term Garage Tests
    QUnit.test("Long-Term Garage Parking", function (assert) {
        assert.strictEqual(calculateLongTermGarageParking(12), 12, "12 hours = $12");
        assert.strictEqual(calculateLongTermGarageParking(5), 10, "5 hours = $10");
        assert.strictEqual(calculateLongTermGarageParking(8 * 24), 84, "8 days = $84");
        assert.strictEqual(calculateLongTermGarageParking(7 * 24), 72, "7 days = $72");
    });

    // Long-Term Surface Tests
    QUnit.test("Long-Term Surface Parking", function (assert) {
        assert.strictEqual(calculateLongTermSurfaceParking(5), 10, "5 hours = $10");
        assert.strictEqual(calculateLongTermSurfaceParking(12), 10, "12 hours = $10");
        assert.strictEqual(calculateLongTermSurfaceParking(9 * 24), 60, "9 days = $60");
        assert.strictEqual(calculateLongTermSurfaceParking(7 * 24), 60, "7 days = $60");
    });

    // Economy Lot Tests
    QUnit.test("Economy Lot Parking", function (assert) {
        assert.strictEqual(calculateEconomyLotParking(5), 9, "5 hours = $9");
        assert.strictEqual(calculateEconomyLotParking(12), 9, "12 hours = $9");
        assert.strictEqual(calculateEconomyLotParking(7 * 24), 54, "7 days = $54");
        assert.strictEqual(calculateEconomyLotParking(8 * 24), 54 + 9, "8 days = $54 + daily rate");
    });

    // Leap Year Tests
    QUnit.test("Leap Year Handling", function (assert) {
        const entry = new Date("2024-02-28");
        const exit = new Date("2024-03-01");
        assert.strictEqual(calculateParkingDays(entry, exit), 2, "Feb 28 to Mar 1 = 2 days (Leap year handled)");
    });

    // Edge Cases Tests
    QUnit.test("Edge Cases", function (assert) {
        assert.strictEqual(calculateShortTermParking(23), 24, "23 hours (short-term lot) = $24");
        assert.strictEqual(calculateEconomyLotParking(13 * 24), 108, "13 days (economy lot) = $108 (7+7 days: 2 free)");
    });
});

// Functions for calculating parking rates
function calculateValetParking(hours) {
    if (hours <= 5) return 12;  // $12 for 5 hours or less
    if (hours > 5 && hours <= 24) return 18;  // $18 for stays from 5 hours to 1 day
    return 18 * Math.ceil(hours / 24);  // For stays longer than 1 day, calculate multi-day rate
}

function calculateShortTermParking(hours) { 
    if (hours <= 1) return 2;  // $2 for 1 hour or less
    if (hours <= 10) return 2 + Math.ceil((hours - 1) / 0.5) * 1; // $2 for the first hour, then $1 for every 30 mins
    if (hours <= 24) return 24; // Max of $24 for up to 24 hours
    // Multi-day parking (capped at $24 per day)
    const days = Math.ceil(hours / 24);
    return Math.min(days * 24, 72);  // Max of $72 for 3 or more days
}

function calculateLongTermGarageParking(hours) {
    const days = Math.floor(hours / 24); 
    if (days >= 7) return 72 + (days - 7) * 12; // $72 for first 7 days, $12 for each additional day
    if (hours <= 12) return Math.min(hours * 2, 12); // Cap at $12 for up to 12 hours
    if (hours <= 24) return 12;
    return hours * 2; // $2 per hour charge for more than 1 day
}

function calculateLongTermSurfaceParking(hours) {
    const days = Math.floor(hours / 24); 
    if (days >= 7) return 60; // Maximum $60 for up to 7 days
    if (hours <= 12) return Math.min(hours * 2, 10); // Cap at $10 for up to 12 hours
    if (hours <= 24) return 10; // Cap at $10 for up to 12 hours
    return hours * 2; // $2 per hour charge for more than 1 day
}


function calculateEconomyLotParking(hours) {
    const days = Math.floor(hours / 24);
    if (days >= 7) return 54 + ((days - 7) * 9);
    if (hours <= 12) return 9;
    return 9;
}

function calculateParkingDays(entry, exit) {
    return Math.ceil((exit - entry) / (1000 * 60 * 60 * 24));
}

