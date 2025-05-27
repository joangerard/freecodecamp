function curateText(text) {
  return text
    .replace(/[^a-zA-Z0-9]/g, "") // Remove non-alphanumeric characters
    .replace(/\s+/g, "")          // Remove whitespace
    .trim()
    .toLowerCase();               // Convert to lowercase
}

function isPalindrome(text) {
  return text === text.split("").reverse().join("");
}

function verifyPalindrome() {
  const inputText = document.getElementById("text-input").value.trim();
  const divResult = document.getElementById("result");

  if (!inputText) {
    alert("Please input a value");
    return;
  }

  const cleanedText = curateText(inputText);
  const isPalin = isPalindrome(cleanedText);
  const response = `${inputText} is ${isPalin ? "" : "not "}a palindrome`;

  divResult.textContent = response;
}