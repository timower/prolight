"use strict";

const Homey = require("homey");

class ProlightZigbeeApp extends Homey.App {
  onInit() {
    this.log("Prolight Zigbee app initiating...");
  }
}

module.exports = ProlightZigbeeApp;
