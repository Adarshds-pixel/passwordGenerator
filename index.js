const characters=[
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",0,1,2,3,4,5,6,7,8,9,"~","`","!","@","#","$","%","^","&","*",".",",",":",">", "<", "?", "/", "|", "(", ")", "{", "}", "[", "]",",","|",":",";","<",">",".","?","/"];
let pass1=document.getElementById("password-one");
let pass2=document.getElementById("password-two");

    function generatePasswords(){
        pass1.textContent="";
        pass2.textContent="";
        for (let i=0;i<15;i++){
            let randomIndex=Math.floor(Math.random()*characters.length);
            pass1.textContent+=characters[randomIndex];
        }
        for (let i=0;i<15;i++){
            let randomIndex=Math.floor(Math.random()*characters.length);
            pass2.textContent+=characters[randomIndex];
        }
    }

async function copyPassword(passwordBox) {
    if (passwordBox.textContent === "") {
        alert("Generate a password first.");
        return;
    }

    try {
        await navigator.clipboard.writeText(passwordBox.textContent);
        alert("Password copied!");
    } catch (error) {
        alert("Could not copy the password. Try using a secure connection.");
        console.error("Could not copy password:", error);
    }
}
