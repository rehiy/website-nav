import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig(() => {
    return {
        base: '/',
        resolve: {
            alias: {
                '@': resolve(import.meta.dirname, 'src/'),
            },
        },
        plugins: [
            vue(),
        ],
        server: {
            allowedHosts: true,
            host: '0.0.0.0',
            port: 3000,
            proxy: {
                '/api': {
                    target: 'http://127.0.0.1:8055',
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/api/, '')
                }
            }
        }
    };
});
