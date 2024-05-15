function myFunction() {
    // Get the text field
    var copyText = document.getElementById("myInput");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
    // Alert the copied text
    alert("Copied the text: " + copyText.value);
  }
  
  document.getElementById('copyButton').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const sentence1 = document.getElementById('sentence1').value;
    const sentence2 = document.getElementById('sentence2').value;
    const sentence3 = document.getElementById('sentence3').value;
  
    const textToCopy = `Name: ${name}\nSentence 1: ${sentence1}\nSentence 2: ${sentence2}\nSentence 3: ${sentence3}`;
  
    const textArea = document.createElement('textarea');
    textArea.value = textToCopy;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
  
    alert('Text copied to clipboard!');
  });
  