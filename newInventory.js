function newInventory(arr) {
    let newArr = []
    for (let line of arr) {
        line = line.split(` / `);
        let objInventory = {};
        let heroName = line.shift();
        objInventory.name = heroName;
        let heroLevel = line.shift();
        objInventory.level = heroLevel;
        let heroItems = line.shift();
        objInventory.items = heroItems;

        newArr.push(objInventory);

        for (let hero of newArr) {
            if (hero.name === heroName) {
                heroLevel.level = heroLevel;
                heroItems = heroItems;
            }
        }
    }
    let sortedArr = newArr.sort((a, b) => a.level - (b.level));
    for (let object of sortedArr) {
        console.log(`Character: ${object.name}\nLevel => ${object.level}\nItems => ${object.items}`);

    }

}
newInventory([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
    ]);
