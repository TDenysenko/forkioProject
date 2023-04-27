import { log } from 'console';
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './dist';
const srcFolder = './src';
const baseDir = '.';

export const path = {
    build: {
        html:`${buildFolder}/`,
        css:`${buildFolder}/css/`,
        js:`${buildFolder}/js/`,
        images: `${buildFolder}/img/`,
    },
    src: {
        html:`${baseDir}/index.html`,
        scss:`${srcFolder}/scss/style.scss`,
        js:`${srcFolder}/js/app.js`,
        images:`${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
        svg: `${srcFolder}/img/**/*.svg`,
    },
    watch: {
        html:`${srcFolder}/**/*.html`,
        scss:`${srcFolder}/**/*.scss`,
        js:`${srcFolder}/**/*.js`,
        images:`${srcFolder}/img/**/*.{jpg,jpeg,png,gif,ico,webp,svg}`,
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    baseDir: baseDir
}
