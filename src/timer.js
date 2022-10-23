export function getCurrentTime() {
    let currentTime = new Date().toLocaleTimeString();
    return currentTime;
};

export function getCurrentDate() {
    let currentDate = new Date().toLocaleDateString();
    return currentDate;
};