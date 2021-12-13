function superbowlWin(record) {
    let result = record.find(function(object) {
        return object.result === 'W'
    })
    if(result){
        return result.year
    } else {
        return result
    }
}

// 
// superbowlWin = (record) => {
//     const result = record.find( record => record.result === "W" );
//     return !!result ? result.year : undefined;
//   }