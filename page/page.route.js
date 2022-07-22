const express = require('express');
const {
  changeContent,
  create,
  update,
  deletePageRecord,
  details,
  list,
  loadContent,
  loadView,
  changeView,
} = require('./page.controller');

const pageRoute = express.Router();
pageRoute.post('/', create);
pageRoute.post('/:pageId/content', changeContent);
pageRoute.post('/:pageId/view', changeView);

pageRoute.put('/:pageId', update);

pageRoute.delete('/:pageId', deletePageRecord);

pageRoute.get('/:pageId', details);
pageRoute.get('/', list);
pageRoute.get('/:pageId/content', loadContent);
pageRoute.get('/:pageId/view', loadView);

module.exports = pageRoute;
