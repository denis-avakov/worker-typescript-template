import path from 'path';
import { fileURLToPath } from 'url';
import { build } from 'esbuild';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

try {
  await build({
    bundle: true,
    entryPoints: [path.join(__dirname, 'src', 'index.ts')],
    external: ['__STATIC_CONTENT_MANIFEST'],
    format: 'esm',
    minify: true,
    outdir: path.join(__dirname, 'dist'),
    sourcemap: true,
    target: 'esnext',
    conditions: ['worker', 'browser'],
    outExtension: { '.js': '.mjs' }
  });
} catch {
  process.exitCode = 1;
}
