import esbuild from 'esbuild';
import sveltePlugin from 'esbuild-svelte';

let ctx = await esbuild.context({
	outdir: 'build',
	entryPoints: ['./app.svelte'],
	bundle: true,
	format: 'esm',
	plugins: [
		sveltePlugin({
			compilerOptions: { customElement: true },
		})
	],
	banner: {
		js: 'new EventSource("/esbuild").addEventListener("change",()=>location.reload())',
	},
});

await ctx.watch();
await ctx.serve({ servedir: '.', port: 5432, host: '127.0.0.1' });

