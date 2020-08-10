

const confidence = document.getElementById('confidence');

const subject = document.getElementById('subject');

const subc = document.getElementById('subc');

const polrty = document.getElementById('polrty');

const postData = async(url = '') => {
    const response = await fetch('http://localhost:3000/article', {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "url": url }), 
    });
    try {
        const newData = await response.json();
        console.log(newData)
        return newData
    } catch (error) {
        console.log("error", error);
    }
}


function handleSubmit(event) {
    event.preventDefault()
    let formText = document.getElementById('name').value;
    console.log("::: Form Submitted :::")
    if (Client.checkForName(formText)) {
        postData(formText)
            .then(function(data) {
                updateUI(data);
            }) }}



function updateUI(data) {
    console.log(data)
    subc.innerHTML = `${data.subjectivity_confidence}`;

    polrty.innerHTML = `${data.polarity}`;

    confidence.innerHTML = `${data.polarity_confidence}`;

    subject.innerHTML = `${data.subjectivity}`;

}

export { handleSubmit }