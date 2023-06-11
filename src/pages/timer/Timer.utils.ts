interface AtiveCycle {
    isAtiveCycle: boolean;
    countInit: number;
    taksToDo: string;
}

export function getTimePassed(amoutSecondPassed: number) {
    const daysAmount = Math.floor(amoutSecondPassed / 86400);
    const hoursAmount = Math.floor((amoutSecondPassed / 3600) - (daysAmount * 24));
    const minutesAmount = Math.floor((amoutSecondPassed / 60) - (hoursAmount * 60) - (daysAmount * 24 * 60));
    const secondsAmount = amoutSecondPassed % 60;

    const days = String(daysAmount);
    const hours = daysAmount > 0 ? String(hoursAmount).padStart(2, "0") : String(hoursAmount);
    const minutes = String(minutesAmount).padStart(2, "0");
    const seconds = String(secondsAmount).padStart(2, "0");

    return { days, hours, minutes, seconds, daysAmount, hoursAmount };
}

export function getExpendTime(amoutSecondPassed: number) {
    const { days, hours, minutes, seconds, daysAmount, hoursAmount } = getTimePassed(amoutSecondPassed);
    let expendTime = "";
    if (daysAmount > 0) {
        expendTime += days + "d " + hours + "h ";
    } else if (hoursAmount > 0) {
        expendTime += hours + "h ";
    }
    return expendTime + minutes + "min " + seconds + "s";
}

export function setLocalStorageAtiveCycle(ativeCycle: AtiveCycle) {
    localStorage.setItem('@ativeCycle-task:isAtiveCycle-1.0.0', JSON.stringify(ativeCycle.isAtiveCycle))
    localStorage.setItem('@ativeCycle-task:countInit-1.0.0', JSON.stringify(ativeCycle.countInit));
    localStorage.setItem('@ativeCycle-task:taksToDo-1.0.0', JSON.stringify(ativeCycle.taksToDo));
}

export function cleanLocalStorageAtiveCycle() {
    localStorage.removeItem('@ativeCycle-task:isAtiveCycle-1.0.0')
    localStorage.removeItem('@ativeCycle-task:countInit-1.0.0');
    localStorage.removeItem('@ativeCycle-task:taksToDo-1.0.0');
}