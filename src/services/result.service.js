import axios from "axios";
const baseUrl = "http://localhost:3004/";

export const resultService = {
    getResult
};

function getResult() {
    return new Promise((resolve, reject) => {
        axios
            .get(baseUrl + "data")
            .then((res) => {
                resolve(res.data);
            })
            .catch((err) => {
                reject(err);
            });
    });
}
