const connectToDatabase = () => {
    const dummyPromise = new Promise((res, rej) => {
        setTimeout(()=>{
            console.log("Connected");
            res();
        }, 1000);
    })
}

export default connectToDatabase;