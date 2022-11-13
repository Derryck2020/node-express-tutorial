const path = require('path')

/*
path.sep //it (sep) is a property which returns a platform specific separator
path.join() //it (join()) is a method which joins a sequence of path segment using that platform specific separator as the limitor
            //it also returns a normalize resulting path
path.basename() //returns the last portion of a path
path.resolve() //returns an absolute path
*/

const filePath = path.join('/content','subfolder', 'test.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)
