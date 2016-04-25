'use strict';

// TODO: we should be able to inherit from JATSNode to share properties.

var InlineNode = require('substance/model/InlineNode');

function Reference() {
  Reference.super.apply(this, arguments);
}

InlineNode.extend(Reference);

Reference.static.name = 'reference';
Reference.static.defineSchema({
  xmlAttributes: { type: 'object', default: {} },
  label: { type: 'text', optional: true },
  referenceType: { type: 'string'},
  target: {type: 'id'}
});

module.exports = Reference;