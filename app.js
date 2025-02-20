function send() {
    
    if(document.getElementById('msg').value == ''){
        alert("message is empty")
    }
    else{
        var b = document.getElementById('msg').value;
        console.log(b);
        
        var messageElement = document.createElement('div');
        messageElement.classList.add('messagesContainer');
        messageElement.innerText = b; 
        
        
        var messagesContainer = document.getElementById('messagesContainer');
        messagesContainer.appendChild(messageElement); 

    
    document.getElementById('msg').value = '';
}





if (b.length > 50) {
    var shortText = b.substring(0, 50) + "...";

    var shortTextSpan = document.createElement('span');
    shortTextSpan.innerText = shortText;

    var fullTextSpan = document.createElement('span');
    fullTextSpan.innerText = b;
    fullTextSpan.style.display = "none"; 

    
    var readMoreBtn = document.createElement('button');
    readMoreBtn.innerText = "Read More";
    readMoreBtn.style.color = "blue";
    readMoreBtn.style.border = "none";
    readMoreBtn.style.background = "none";
    readMoreBtn.style.cursor = "pointer";
    readMoreBtn.style.marginLeft = "5px";

    
    readMoreBtn.onclick = function () {
        if (fullTextSpan.style.display === "none") {
            fullTextSpan.style.display = "inline";
            shortTextSpan.style.display = "none";  
            readMoreBtn.innerText = "Read Less";
        } else {
            fullTextSpan.style.display = "none";  
            shortTextSpan.style.display = "inline"; 
            readMoreBtn.innerText = "Read More";   
        }
    };

    
    messageElement.appendChild(shortTextSpan);
    messageElement.appendChild(fullTextSpan);
    messageElement.appendChild(readMoreBtn);
} else {
    
    messageElement.innerText = b;
}
}
