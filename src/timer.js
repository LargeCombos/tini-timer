export function getCurrentTime() {
    let currentTime = new Date().toLocaleTimeString();
    return currentTime;
};

export function getCurrentDate() {
    let currentDate = new Date().toLocaleDateString();
    return currentDate;
};

export const timer = {
    active: false,
};

export function tracksTime() {
    timer.active = true;
    const startTime = new Date.now();

    while (timer.active = true) {
        const elapsedStart = Date.now();

        setTimeout(() => {
            let elapsedEnd = Date.now();
            return elapsedEnd;
        }, 1000);

        let elapsedTime = elapsedEnd - elapsedStart;
        return elapsedTime;
    };
};