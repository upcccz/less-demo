const loaderUtils = require('loader-utils');

module.exports = function(source, map) {
  const options = loaderUtils.getOptions(this);
  const { themeStyleDir, themes }  = options;
  let code = '';
  themes.forEach((theme) => {
    const sentence = `@import '${themeStyleDir}${theme}.less';\n${source}`;
    const template = `[theme=${theme}] {\n  ${sentence}\n};\n\n`;
    code += template;
  });

  return code; 
}