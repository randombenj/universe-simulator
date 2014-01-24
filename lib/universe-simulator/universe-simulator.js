// NAMESPACE: UNIVERSE_SIMULATOR
UNIVERSE_SIMULATOR = {};

// Simulates the universe
UNIVERSE_SIMULATOR.universe = (function () {

    return {
        simulate: function () {
            return Math.floor((Math.random() * 1000000) + 0);
        }
    }
})();