'use strict';

var utils = require('../utils/writer.js');
var News = require('../service/NewsService');

module.exports.deleteNewsUsingDELETE = function deleteNewsUsingDELETE (req, res, next, category, newsId) {
  News.deleteNewsUsingDELETE(category, newsId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getNewsUsingGET = function getNewsUsingGET (req, res, next, category) {
  News.getNewsUsingGET(category)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.publishNewsUsingPOST = function publishNewsUsingPOST (req, res, next, body, category) {
  News.publishNewsUsingPOST(body, category)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateNewsUsingPUT = function updateNewsUsingPUT (req, res, next, body, category, newsId) {
  News.updateNewsUsingPUT(body, category, newsId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
