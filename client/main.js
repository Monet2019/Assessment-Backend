const complimentBtn = document.getElementById("complimentButton")
const fortuneButton = document.getElementById("fortune-button")
const addFortuneForm = document.getElementById("add-fortune-form")
const addFortuneText = document.getElementById("add-fortune-text")
const changeFortuneForm = document.getElementById("change-fortune-form")
const changeFortuneText = document.getElementById("change-fortune-text")
const changeFortuneToText = document.getElementById("change-fortune-to-text")
const removeFortuneForm = document.getElementById("remove-fortune-form")
const removeFortuneText = document.getElementById("remove-fortune-text")
const showAllFortunesButton = document.getElementById("show-all-fortunes-button")
const hideAllFortunesButton = document.getElementById("hide-all-fortunes-button")
const deleteAllFortunesButton = document.getElementById("delete-all-fortunes-button")
const allFortunesDiv = document.getElementById("all-fortunes-div")

let showingFortunes = false

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
    .then(res => {
        const data = res.data
        alert(data)
    })
}

const addFortune = (e) => {
    e.preventDefault()
    const newFortune = addFortuneText.value

    axios.post("http://localhost:4000/api/fortune/", {fortune: newFortune})
    .then(res => {
        if (showingFortunes){
            showAllFortunes()
        }
        addFortuneText.value = ""
        alert(res.data)
    })
    .catch(err => {
        console.log(err)
    })
}

const changeFortune = (e) => {
    e.preventDefault()
    const fortuneToChange = changeFortuneText.value
    const fortuneToChangeTo = changeFortuneToText.value
    console.log(fortuneToChangeTo)

    axios.put("http://localhost:4000/api/fortune/" + fortuneToChange, {fortuneToChangeTo: fortuneToChangeTo})
    .then(res => {
        console.log(res.data)
        if (showingFortunes){
            showAllFortunes()
        }
        changeFortuneText.value = ""
        changeFortuneToText.value = ""
        alert(res.data)
    })
    .catch(err => {
        console.log(err)
    })
}

const removeFortune = (e) => {
    e.preventDefault()
    const fortuneToRemove = removeFortuneText.value

    axios.delete("http://localhost:4000/api/fortune/" + fortuneToRemove)
    .then(res => {
        console.log(res.data)
        if (showingFortunes){
            showAllFortunes()
        }
        removeFortuneText.value = ""
        alert(res.data)
    })
    .catch(err => {
        console.log(err)
    })
}

const showAllFortunes = () => {
    axios.get("http://localhost:4000/api/fortune-all")
    .then(res => {
        allFortunesDiv.innerHTML = ""
        let fortunes = res.data

        for (let i = 0; i < fortunes.length; i++){
            let newP = document.createElement("p")
            newP.textContent = fortunes[i]
            allFortunesDiv.append(newP)
        }
    })
    .catch(err => {
        console.log(err)
    })

    showingFortunes = true
}

const hideAllFortunes = () => {
    allFortunesDiv.innerHTML = ""
    showingFortunes = false
}

const deleteAllFortunes = () => {
    axios.delete("http://localhost:4000/api/fortune")
    .then( (res) => {
        allFortunesDiv.innerHTML = ""
        alert(res.data)
    })
    .catch((err) => {
        console.log(err)
    })
}

complimentBtn.addEventListener('click', getCompliment)
fortuneButton.addEventListener("click", getFortune)
addFortuneForm.addEventListener("submit", addFortune)
changeFortuneForm.addEventListener("submit", changeFortune)
removeFortuneForm.addEventListener("submit", removeFortune)
showAllFortunesButton.addEventListener("click", showAllFortunes)
hideAllFortunesButton.addEventListener("click", hideAllFortunes)
deleteAllFortunesButton.addEventListener("click", deleteAllFortunes)