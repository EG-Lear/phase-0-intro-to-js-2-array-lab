const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(string) {
    cats.push(string);
}

function destructivelyPrependCat(string) {
    cats.unshift(string);
}

function destructivelyRemoveLastCat(string) {
    cats.pop(string);
}

function destructivelyRemoveFirstCat(string) {
    cats.shift(string);
}

function appendCat(string) {
    const newCats = [...cats, string]
    return newCats
}

function prependCat(string) {
    const newCats = [string, ...cats]
    return newCats
}

function removeLastCat() {
    const newCats = cats.slice(0,2)
    return newCats
}

function removeFirstCat() {
    const newCats = cats.slice(1)
    return newCats
}