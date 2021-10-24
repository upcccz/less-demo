export default function globalVars(options: any): any {
  return {
    name: 'global-vars',
    enforce: 'pre',
    // apply: 'build',
    transform(src, id): any {
      if (id.endsWith('less')) {
        const code = `@import '${options.varsFile}'; ${src}`;
        return {
          code,
        };
      }
      return undefined;
    },
  };
}

// + name: 插件名称，必须的，将会在 warning 和 error 中显示
// + enforce: 插件的执行时机，'pre'会在Vite核心插件之前执行
// + apply: 默认情况下插件在开发（serve）和构建（build）模式中都会调用。使用 apply 属性指明它们仅在 'build' 或 'serve' 模式时调用：
// + transform: 插件钩子，transform会在文件加载完成之后执行
