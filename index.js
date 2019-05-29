const isVacation = true;

const willEliGoToHeaven = new Promise(
    (resolve, reject) => {
        if (isVacation) {
            const parks = {
                first: 'The Magic Kingdom',
                second: 'Mariejois'
            };
            resolve(parks);
        } else {
            const rejection = new Error(`It's not vacation time yet.`);
            reject(rejection);
        }
    }
)

const letsGo = async (parks) => {
    const message = `Eli is going to ${parks.first} and then ${parks.second}!!`;
    return message;
};

const askEli = async () => {
    const goingToHeaven = await willEliGoToHeaven;
    console.log(goingToHeaven);
    const message = await letsGo(goingToHeaven);
    console.log(message);
};

// const askEliAgain = () => {
//     willEliGoToHeaven
//     .then(letsGo)
//     .then(fulfilled => console.log(fulfilled))
//     .catch(error => console.log(error.message));
// };

//askEliAgain()
askEli()