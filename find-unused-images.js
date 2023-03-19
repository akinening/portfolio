const glob = require('glob');
const fs = require('fs');
const path = require('path');

const imageExtensions = ['png', 'jpg', 'jpeg', 'gif', 'svg'];
const imageFolder = 'src/assets/image';
const srcFolder = 'src';

const usedImages = new Set();
const allImages = new Set();

// 使用されている画像を検索する
imageExtensions.forEach((ext) => {
  glob.sync(`${srcFolder}/**/*.${ext}`, { ignore: ['**/node_modules/**', '**/dist/**', '**/.git/**', '**/.cache/**'] }).forEach((file) => {
    usedImages.add(path.basename(file));
  });
});

// すべての画像ファイルを検索する
glob.sync(`${imageFolder}/**/*.+(${imageExtensions.join('|')})`).forEach((file) => {
  allImages.add(path.basename(file));
});

// ソートされたallImagesとusedImagesを作成する
const sortedAllImages = Array.from(allImages).sort();
const sortedUsedImages = Array.from(usedImages).sort();

console.log(sortedAllImages);
console.log(sortedUsedImages);

// 未使用の画像ファイルを特定する
const unusedImages = sortedAllImages.filter((image) => !sortedUsedImages.includes(image));

console.log('未使用の画像ファイル:');
unusedImages.forEach((image) => {
  console.log(image);
});
