module.exports = function (plop) {
  require('./plop-generator/component-generator')(plop);
  require('./plop-generator/domain-generator')(plop);
  require('./plop-generator/screen-generator')(plop);
  require('./plop-generator/adapter-generator')(plop);
};
