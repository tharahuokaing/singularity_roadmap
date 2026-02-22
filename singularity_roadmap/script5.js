// script5.js - Async/Await and Promise Simulation

// Simulating an API call with a Promise
const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true; // To simulate success or failure
            if (success) {
                resolve({ data: "Success!" });
            } else {
                reject("Error!");
            }
        }, 2000);
    });
};

// Using Async/Await to handle async operations cleanly
async function runTask() {
    try {
        console.log("Fetching...");
        const result = await fetchData();
        console.log(result.data);
    } catch (error) {
        console.error("Fetch failed:", error);
    }
}

// Execute async task on script load
runTask();
