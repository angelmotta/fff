import fs from "fs";

// Expected output
const expectedOutput = {
    "mark johansson": [
        { name: "waffle iron", price: "80", quantity: "2" },
        { name: "blender", price: "200", quantity: "1" },
        { name: "knife", price: "10", quantity: "4" },
    ],
    "Nikita Smith": [
        { name: "waffle iron", price: "80", quantity: "2" },
        { name: "knife", price: "10", quantity: "2" },
        { name: "pot", price: "20", quantity: "3" },
    ],
};

const readDataFile = (filename) => {
    let data;
    try {
        data = fs.readFileSync(filename, "utf-8");
    } catch (err) {
        console.error(err);
        return;
    }

    console.log("process data");
    const result = data
        .trim()
        .split("\n")
        .map((line) => line.split("\t"))
        .reduce((accumResObj, lineArr) => {
            accumResObj[lineArr[0]] = accumResObj[lineArr[0]] || [];
            accumResObj[lineArr[0]].push({
                name: lineArr[1],
                price: lineArr[2],
                quantity: lineArr[3],
            });
            return accumResObj;
        }, {});
    return result;
};

const result = readDataFile("04_data.txt");
console.log("result: ", result);
