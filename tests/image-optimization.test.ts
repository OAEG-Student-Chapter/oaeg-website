import * as fs from 'fs';
import sizeOf from 'image-size';

const imagesFolderPath = './public/images/'; // Update with your image path
const maxSize = 1 * 1024 * 1024; // 1MB in bytes

test('Image optimization test', () => {
    const oversizedImages: string[] = [];

    fs.readdirSync(imagesFolderPath).forEach((file) => {
        const filePath = imagesFolderPath + file;
        const dimensions = sizeOf(filePath);
        const imageSize = fs.statSync(filePath).size;

        if (imageSize > maxSize) {
            oversizedImages.push(file);
        }
    });

    if (oversizedImages.length > 0) {
        const oversizedFilesList = oversizedImages.join(', ');
        console.error(`The following images are bigger than 1MB: ${oversizedFilesList}`);
        expect(oversizedImages.length).toBe(0);
    }
});
