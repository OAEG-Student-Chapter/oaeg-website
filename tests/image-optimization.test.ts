import * as fs from 'fs';
import sizeOf from 'image-size';

const imagesFolderPath = './public/images/'; // Update with your image path
const maxSize = 1 * 1024 * 1024; // 1MB in bytes

describe('Image Optimization', () => {
    fs.readdirSync(imagesFolderPath).forEach((file) => {
        const filePath = imagesFolderPath + file;
        const isFile = fs.lstatSync(filePath).isFile();

        if (isFile) {
            const dimensions = sizeOf(filePath);
            const imageSize = fs.statSync(filePath).size;

            const testTitle = `Image size test for ${file}`;

            test(testTitle, () => {
                expect(imageSize).toBeLessThanOrEqual(maxSize);
            });
        }
    });
});
