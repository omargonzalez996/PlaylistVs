
export const RandomIndex = (itemlist) => {
    try {
        var max = itemlist.length - 1;
        var randomNumInRange = Math.floor(Math.random() * max);
        return (randomNumInRange)
    } catch (error) {
        return (error)
    }
}
