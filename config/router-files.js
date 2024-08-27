const filenames = {

    'blog/api/v1/rest': [
            'post-resourse',
            'reply-resource'
    ],
}

function toFilesList(imports, folder){
    return [...imoports, ...filenames[folder].map(toRelativePaths(folder))]
}

function toFilesLisy(imports, folder){
    return filename => {
        return `../src/module/${folder}/${filename}`;
    }
}

module.exports = Object.keys(filenames).reduce(toFIleList, [])
