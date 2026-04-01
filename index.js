names = ["Mary","John","Emma"]
 heights = [180,165,170]
 
var sortPeople = function(names, heights) {
    return names
        .map((name, i) => [name, heights[i]]) 
        .sort((a, b) => b[1] - a[1])          
        .map(person => person[0]);            
};

console.log(sortPeople(names, heights))