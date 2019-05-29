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

const askEli = () => {
    willEliGoToHeaven
    .then(fulfilled => {
        console.log(fulfilled, 'Yep!')
    })
    .catch(error => {
        console.log(error.message);
    })
}

const letsGo = parks => {
    const message = `Eli is going to ${parks.first} and then ${parks.second}!!`;
    return Promise.resolve(message);
};

const askEliAgain = () => {
    willEliGoToHeaven
    .then(letsGo)
    .then(fulfilled => console.log(fulfilled))
    .catch(error => console.log(error.message));
};

askEliAgain()
//askEli()