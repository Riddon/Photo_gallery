export default class LocalStorage {

    static getFromLocalStorage(dataName){
        const arrayData = localStorage.getItem(dataName);

        return JSON.parse(arrayData);
    }

    static setData(dataName, data) {
        const stringData = JSON.stringify(data);

        localStorage.setItem(dataName, stringData);
    }

    static postToLocalStorage(dataName, data) {
        let arrayData = LocalStorage.getFromLocalStorage(dataName);
        if (arrayData === null) {
            arrayData = [];
        }
        arrayData.push(data);

        this.setData(dataName, arrayData);
    }

    static deleteFromLocalStorage(dataName, id) {
        const arrayCards = LocalStorage.getFromLocalStorage(dataName);
        let updateCards = arrayCards
            .filter(element => element.id !== id);

        this.setData(dataName, updateCards);
    }
}