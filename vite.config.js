import {defineConfig} from 'vite';

export default defineConfig({
    root: 'src/',
    publicDir: '../static/',
    base: './',
    server:
        {
            host: true, // Open to local network and display URL
            // open: !('SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env) // Open if it's not a CodeSandbox
        },
    build: {
        // sourcemap: true, // Add sourcemap
        outDir: '../public/', // Output in the dist/ folder
        // emptyOutDir: true, // Empty the folder first
        rollupOptions: {
            output: {
                // chunkFileNames: 'assets/js/[name]-[hash].js',
                // entryFileNames: 'assets/js/[name]-[hash].js',
                chunkFileNames: 'app-min.js',
                entryFileNames: 'app-min.js',

                assetFileNames: ({names}) => {
                    if (/\.(gif|jpg|jpe?g|png|svg)$/.test(names ?? '')){
                        return 'images/[name]-[hash][extname]';
                    }

                    if (/\.css$/.test(names ?? '')) {
                        return 'app.css';
                    }

                    // default value
                    // ref: https://rollupjs.org/guide/en/#outputassetfilenames
                    return '[name]-[hash][extname]';
                },
            },
        }
    },
    css: {
        devSourcemap: true,
        // preprocessorOptions: {
        //     scss: {
        //         additionalData: `
        //             @import "./src/scss/_color.scss";
        //             @import "./src/scss/_layout.scss";
        //             @import "./src/scss/_layout.scss";
        //         `
        //     }
        // }
    }
});