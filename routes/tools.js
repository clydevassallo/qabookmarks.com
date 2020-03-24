/*
 * GET tools page.
 */

var _u = require('underscore');
var data = require('../data');

function onlyUrlFor(tag, groupOfTags, allTags) {
  return _u.union(_u.difference(allTags, _u.pluck(groupOfTags, 'slug')), [tag]).sort().join('+');
}

function extraUrlFor(tag, allTags) {
  var newTags = _u.contains(allTags, tag) ? _u.without(allTags, tag) : _u.union(allTags, [tag]);
  return "/" + newTags.sort().join('+');
}

module.exports = function(req, res) {
  var tools = data.tools, tags = [];

  tags = req.params.tags.split("+");

  var selSessions = _u.intersection(tags, _u.keys(data.sessions));
  var selPlatforms = _u.intersection(tags, _u.keys(data.platforms));
  var selLicenses = _u.intersection(tags, _u.keys(data.licenses));
  var selLanguages = _u.intersection(tags, _u.keys(data.languages));
  var selTopics = _u.intersection(tags, _u.keys(data.topics));

  tools = _u.filter(tools, function(tool) {
    return (selSessions.length === 0 || _u.intersection(selSessions, tool.tags).length > 0) &&
           (selTopics.length === 0 || _u.intersection(selTopics, tool.topics).length > 0) &&
           (selPlatforms.length === 0 || _u.intersection(selPlatforms, tool.tags).length > 0) &&
           (selLicenses.length === 0 || _u.intersection(selLicenses, tool.tags).length > 0) &&
           (selLanguages.length === 0 || _u.intersection(selLanguages, tool.tags).length > 0);
  });

  var title = 'Testing tools, articles and frameworks';
  if (selTopics.length > 0) {
    title = selTopics.slice(0,3).map(topic => topic.charAt(0).toUpperCase() + topic.slice(1).toLowerCase()).join(', ') + ' | ' + title;
  }

  var description = 'Discover the latest QA';
  if (selTopics.length > 0) {
    description += ' ' + selTopics.join(', ');
  }
  description += 'tools, articles and frameworks';


  res.render('tools', {
    title: title,
    description: description,
    tools: tools,
    tags: tags,
    sessions: data.sessions,
    platforms: data.platforms,
    topics: data.topics,
    licenses: data.licenses,
    languages: data.languages,
    _u: _u,
    onlyUrlFor: onlyUrlFor,
    extraUrlFor: extraUrlFor
  });
};
