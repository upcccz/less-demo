export default function myPlugin(options: any): any {
  return {
    name: 'transform-file',
    enforce: 'pre',
    transform(src, id): any {
      let code = '';
      if (id.endsWith('less')) {
        const themes = options.themes as string[];
        themes.forEach((theme) => {
          const sentence = `@import '${options.themeStyleDir}${theme}.less';\n${src}`;
          const template = `[theme=${theme}] {\n  ${sentence}\n};\n\n`;
          code += template;
        });
        return {
          code,
        };
      }
      return undefined;
    },
  };
}

// 每个单文件组件中的style部分 

// src 就是
// div {
//   color: @c1;
// }

// 转换成了

// [theme=red] {
//   @import './src/styles/red.less';
//   div {
//     color: @c1;
//   }
// };

// [theme=blue] {
//   @import './src/styles/blue.less';
//   div {
//     color: @c1;
//   }
// };