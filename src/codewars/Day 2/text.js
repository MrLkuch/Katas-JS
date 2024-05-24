function filter_list(l) {
    let arr = [];
    for (n in l) {
        if (typeof (l[n]) === 'number') {
            arr.push(l[n]);
        }
    }
    return arr;
}