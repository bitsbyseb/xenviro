import xenv from "./services/xenv";

const reader = new xenv({});

(async () => {
    await reader.readFile();
    console.log(process.env.XD);
    // console.log(process.env.XD);
    console.log(process.env.MESSAGE_XD);
    
})();