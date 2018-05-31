const cognitiveServices = require('cognitive-services');

const client = new cognitiveServices.computerVision({
    apiKey: "54ab951f77c8469eb0b73db22d744c5f",
    endpoint: "westus.api.cognitive.microsoft.com"
});

const whale = "https://cdn1.es.yumping.info/emp/fotos/4/4/4/5/tm_ballena.jpg";
const cheeseburger = "http://4.bp.blogspot.com/-m3rIV3HN3SY/Tb5GgeJWRaI/AAAAAAAAAH8/iyTBc-fCxBk/s1600/cheeseburger-1.jpg";

client.analyzeImage({
    parameters: {
        "visualFeatures": "Categories,Tags,Description",
        "details": "Celebrities,Landmarks"
    },
    headers: { 'Content-type': 'application/json' },
    body: { url: cheeseburger}
}).then((response) => {
    // console.log(JSON.stringify(response,null,2));
    let isWhale = response.tags.some(t => t.name == "whale")
    console.log(isWhale ? "Whale!" : "boooooring");
}).catch((err) => {
    console.log(err);
});