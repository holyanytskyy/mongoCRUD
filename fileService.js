'use strict';

import * as uuid from 'uuid';
import * as path from 'path';

class FileService {
    saveFile(file) {
        try {
            const fileName = uuid.v4() + '.jpeg';
            const filePath = path.resolve('static', fileName);
            file.mv(filePath);
            return fileName;
        }
        catch(e) {
            console.error(e.message);
        }
        
    }
}

export default new FileService();