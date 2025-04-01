import path from "path";
import { fileURLToPath } from 'url';
import { readFile } from 'node:fs';

function getImg(req, res) {
    const filePath = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', '..', 'public', 'assets', req.url.replace('/assets/', ''));

    console.log(filePath);

    readFile(filePath, (err, data) => {
        if (err) {
            res.statusCode = 404;
            res.end('FILE NOT FOUND!');
            return;
        }

        const extension = path.extname(filePath);
        let contentType;

        switch (extension) {
            case '.png':
                contentType = 'image/png';
                break;
            case '.gif':
                contentType = 'image/gif';
                break;
        }

        res.writeHead(200, { 'Content-Type': {contentType} });
        res.end(data);
    })
}

export default getImg;
