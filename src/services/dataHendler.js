

export const getUniqueMembers = (data) => {
    const uniqMembers = new Set();
    const uniqArray = data.filter(obj => {
        if (!uniqMembers.has(obj.Member)){
            uniqMembers.add(obj.Member)
            return true
        }
        return false
    })
    return uniqArray;
}