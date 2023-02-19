const techList = (arr, name) => {
    const newList = [];
    if (arr.length > 0) {
        arr.sort();
        for (e of arr) {
            let object = {}
            object.tech = e;
            object.name = name;
            newList.push(object);
        }
        return newList;
    }
    return 'Vazio!'
}

module.exports = techList;