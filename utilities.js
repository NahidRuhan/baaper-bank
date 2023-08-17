// function for getting current deposit value

function getCurrentValue(id){
    const val = parseFloat(document.getElementById(id).innerText)
    return val
}

// function for getting new value 

function getNewValue(id){
    const val = parseFloat(document.getElementById(id).value)
    return val
}

