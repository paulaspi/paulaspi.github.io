function qs(selectorName){
    return document.querySelector(selectorName);
}

export function readFromLS(key){
    return JSON.parse(localStorage.getItem(key));
}

export function writeToLS(key, data){
    localStorage.setItem(key, JSON.stringify(data));
}

export function clickButton(selector, callback){
    const element = qs(selector);
    element.addEventListener('click', callback);
}