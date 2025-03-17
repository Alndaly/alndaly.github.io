import { defineConfig, loadEnv } from 'vite';
import viteBaseConfig from './vite.base.config';
import viteDevConfig from './vite.dev.config';
import viteProdConfig from './vite.prod.config';

// 策略配置
const resolveEnv = {
	build: () => {
		console.log('生产模式');
		// Object.assign方式合并对象
		return Object.assign({}, viteBaseConfig, viteProdConfig);
	},
	serve: () => {
		console.log('开发模式');
		// 展开运算符方式合并对象
		return { ...viteBaseConfig, ...viteDevConfig };
	},
};
export default defineConfig(({ mode, command, ssrBuild }) => {
	// 加载环境变量
	const env = loadEnv(mode, process.cwd(), '');
	console.log(env)
	return resolveEnv[command]();
});
