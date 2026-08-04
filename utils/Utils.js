function getPathActive(path,back){
    const arr = path.split('\\');
    arr.splice(arr.length - back,back);
    const resultPath = arr.join('/');
    return resultPath;

}

module.exports = {
    getPathActive,
}