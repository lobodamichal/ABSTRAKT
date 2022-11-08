const arrayLooper = (array, element) => {
    let elementIndex = array.indexOf(element);
    const nextIndex = (elementIndex + 1) % array.length;
    return array[nextIndex];
}

export default arrayLooper