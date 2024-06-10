export const getPhotosUrl = (count, path, format) => {
    const array = []
    for (let i = 1; i <= count; i++) {
        const photoUrl = `${path + i}.${format}`
        array.push(photoUrl)
    }
    return array;
}