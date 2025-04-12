import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

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
            host: '0.0.0.0',
            port: 3000,
        }
    };
});
