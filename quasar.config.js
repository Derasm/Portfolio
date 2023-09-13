const extras = require("@quasar/extras");
const { configure } = require("quasar/wrappers");

module.exports = configure(function (ctx) {
    /* configuration options */
    extras: ["material-icons"];
});
