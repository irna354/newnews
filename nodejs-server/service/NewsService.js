'use strict';


/**
 * Delete news in a category
 * Delete a specific news in a category
 *
 * category String Category of the news going to be deleted
 * newsId String Id of the news going to be updated
 * no response value expected for this operation
 **/
exports.deleteNewsUsingDELETE = function(category,newsId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * List news by category
 * List of all news by the specified category
 *
 * category String Category of the news going to be retrieved
 * returns NewsContents
 **/
exports.getNewsUsingGET = function(category) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "news" : [ {
    "createdAt" : "2000-01-23T04:56:07.000+00:00",
    "newsId" : "newsId",
    "title" : "title",
    "category" : "category",
    "content" : "content",
    "tags" : [ "tags", "tags" ],
    "updatedAt" : "2000-01-23T04:56:07.000+00:00"
  }, {
    "createdAt" : "2000-01-23T04:56:07.000+00:00",
    "newsId" : "newsId",
    "title" : "title",
    "category" : "category",
    "content" : "content",
    "tags" : [ "tags", "tags" ],
    "updatedAt" : "2000-01-23T04:56:07.000+00:00"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Publish news to a category
 * Publish news to the specified category
 *
 * body NewsCreate Publish news example
 * category String Category of the news going to be published
 * returns NewsContent
 **/
exports.publishNewsUsingPOST = function(body,category) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "createdAt" : "2000-01-23T04:56:07.000+00:00",
  "newsId" : "newsId",
  "title" : "title",
  "category" : "category",
  "content" : "content",
  "tags" : [ "tags", "tags" ],
  "updatedAt" : "2000-01-23T04:56:07.000+00:00"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update news in a category
 * Update a specific news in a category by the news id
 *
 * body NewsUpdate Update news example
 * category String Category of the news going to be updated
 * newsId String Id of the news going to be updated
 * returns NewsContent
 **/
exports.updateNewsUsingPUT = function(body,category,newsId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "createdAt" : "2000-01-23T04:56:07.000+00:00",
  "newsId" : "newsId",
  "title" : "title",
  "category" : "category",
  "content" : "content",
  "tags" : [ "tags", "tags" ],
  "updatedAt" : "2000-01-23T04:56:07.000+00:00"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

