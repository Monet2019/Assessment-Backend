let fortunes = require("./db.json")




module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        let randomIndex = Math.floor(Math.random() * fortunes.length)
        let randomFortune = fortunes[randomIndex]
      
        res.status(200).send(randomFortune)
    },
    getAllFortunes: (req, res) => {
        res.status(200).send(fortunes)
    },
    addFortune: (req, res) => {
        const newFortune = req.body.fortune
        console.log(req.body.fortune)
        fortunes.push(newFortune)

        res.status(200).send("Added fortune: " + newFortune)
    },
    removeFortune: (req, res) => {
        let {fortune} = req.params
        console.log(fortune)

        for(i = 0; i < fortunes.length; i++){
            if (fortunes[i] === fortune){
                fortunes.splice(i, 1)
                res.status(200).send("Removed Fortune: " + fortune)
                return
            }
        }
        res.status(200).send("Cannot remove fortune because it does not exist")
    },
    changeFortune: (req, res) => {
        let {fortune} = req.params
        let {fortuneToChangeTo} = req.body
        console.log(fortuneToChangeTo)

        for(i = 0; i < fortunes.length; i++){
            if (fortunes[i] === fortune){
                fortunes[i] = fortuneToChangeTo
                res.status(200).send("Changed Fortune: " + fortune +  " \nTo: " + fortuneToChangeTo)
                return
            }
        }
        res.status(200).send("Cannot remove fortune because it does not exist")
    },
    deleteAllFortunes: (req, res) => {
        fortunes = []
        res.status(200).send("Deleted all fortunes")
    }
}