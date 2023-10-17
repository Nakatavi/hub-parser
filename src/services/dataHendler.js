

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

export const getUniqueProjects = (data) => {
    const uniqProjects = new Set();
    
    const uniqProject = data.filter(obj => {
        if (obj.Project?.trim() !=="" && !uniqProjects.has(obj.Project)){
            uniqProjects.add(obj.Project)
            return true
        }
        return false
    })
    return uniqProjects;
}
export const setSets = (sets, project, type) => {
    for (let index = 0; index < sets.length; index++) {
        if(index === type){
            if(sets[index].has(project)){
                sets[index].delete(project);
            }else{
                sets[index].add(project);
            }
        }else{
            sets[index].delete(project);
        }
        
    }
    return sets;
}