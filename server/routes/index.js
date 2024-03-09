var express = require('express');

var router = express.Router();

const { exec } = require('child_process');

/* GET /api/version */

/**
 * GET /api/version
 *
 * returns the version of the current application
 */
router.get('/version', function (req, res, next) {
  res.json('Climate Inventory App operational');
});

module.exports = router;
