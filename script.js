let generatedPassword = document.getElementById("generatedPassword");
class Password {
    alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    specialCharacters = [   
        '!', '"', '#', '$', '%', '&', "'", '(', ')', '*',
        '+', ',', '-', '.', '/', ':', ';', '<', '=', '>',
        '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|',
        '}', '~', ',', '.', ';', ':', '-', '_', '+', '=',
        '<', '>', '?', '/', '"', "'", '(', ')', '[', ']',
        '{', '}', '|', '\\', '`', '~', '!', '@', '#', '$',
        '%', '^', '&', '*', '+', '='
    ];
    a=Math.floor(Math.random()*21);
    constructor() {
        this.pass = "";
    }
    generateWeakPassword() {
        this.pass='';
        let i=0;
        while(i<8)
        {
            let b=Math.floor(Math.random()*21);

            try{
                // console.log('Lower'+this.alphabet[this.a+b].toLowerCase());
                // console.log('Upper'+this.alphabet[this.a+b+b]);
                if(this.alphabet[this.a+b].toLowerCase() !=undefined && this.alphabet[this.a+b+b]!=undefined)
                {
                    
                    // console.log(this.a);
                    // console.log(b);
                    this.pass+=this.alphabet[this.a+b].toLowerCase();
                    i++;
                    this.pass+=this.alphabet[this.a+b+b];
                    i++;
                }
            }
            catch{

            }

        }
        console.log("Weak Password Generated!", this.pass);
        return this.pass;
    }
    generateStrongPassword() {
        this.pass='';
        let i=0;
        let number=0;
        let specialCharacter =0;
        while(i<8)
        {
            let b=Math.floor(Math.random()*21);
            let n=Math.floor(Math.random()*41);
            let s=Math.floor(Math.random()*211);
            try{

                if(this.alphabet[this.a+b].toLowerCase() !=undefined && this.alphabet[this.a+b+b]!=undefined )
                {

                    this.pass+=this.alphabet[this.a+b].toLowerCase();
                    i++;
                    this.pass+=this.alphabet[this.a+b+b];
                    i++;
                }
                if(this.numbers[n]!=undefined)
                {
                    this.pass+=this.numbers[n]
                    number++;
                    i++;
                }
                if(this.specialCharacters[s]!=undefined)
                {
                    this.pass+=this.specialCharacters[s];
                    specialCharacter++;
                    i++;
                }

            }
            catch{

            }
            if (number<1 || specialCharacter <1)
            {
                this.pass='';
                i=0;
                number=0;
                specialCharacter=0;
            }
        }
        // console.log("Strong Password Generated! of length: ", this.pass.length);
        if (this.pass.length>8)
        {
            return this.pass.substring(0,8)
        }
        else{

            return this.pass;
        }


    }
    generateVeryStrongPassword() {
        this.pass='';
        let i=0;
        let number=0;
        let specialCharacter =0;
        const generate =()=>
        {

            while(i<12)
            {
                let b=Math.floor(Math.random()*21);
                let n=Math.floor(Math.random()*41);
            let s=Math.floor(Math.random()*211);
            try{

                if(this.alphabet[this.a+b].toLowerCase() !=undefined && this.alphabet[this.a+b+b]!=undefined )
                {
                    
                    this.pass+=this.alphabet[this.a+b].toLowerCase();
                    i++;
                    this.pass+=this.alphabet[this.a+b+b];
                    i++;
                }
                if(this.numbers[n]!=undefined)
                {
                    this.pass+=this.numbers[n];
                    number++;
                    i++;
                }
                if(this.specialCharacters[s]!=undefined)
                {
                    this.pass+=this.specialCharacters[s];
                    specialCharacter++;
                    i++;
                }
                
            }
            catch{
                
            }

        }
        }
        generate();
        while(true)
        {
            if (number<2 || specialCharacter <2)
            {
    
                this.pass='';
                i=0;
                number=0;
                specialCharacter=0;
                generate();
            }
            else{
                break;
            }

        }


        // console.log("Very Strong Password Generated! of length: ", this.pass.length);
        if (this.pass.length>12)
        {
            return this.pass.substring(0,12)
        }
        else{

            return this.pass;
        }
        // return this.pass;
    }
    generateFunnyPassword() {
        let cases=Math.floor(Math.random()*7);
        switch (cases) {
            case 0:
              this.pass = "HelloWorld";
              break;
            case 1:
              this.pass = "Incorrect";
              break;
            case 2:
               this.pass = "Password";
              break;
            case 3:
              this.pass = "12345678";
              break;
            case 4:
              this.pass = "welcome";
              break;
            case 5:
              this.pass = "letmein";
              break;
            case 6:
              this.pass = "admin";
          }

          return this.pass;
    }
}


const weakClick = () => {
    let a = new Password();
    generatedPassword.innerHTML=a.generateWeakPassword();
    console.log("Weak Password Clicked!");
}
const strongClick = () => {
    let a = new Password();
    generatedPassword.innerHTML=a.generateStrongPassword();
    
    console.log("Strong Password Clicked!");
}
const veryStrongClick = () => {
    let a = new Password();
    generatedPassword.innerHTML=a.generateVeryStrongPassword();
    console.log("Very Strong Password Clicked!");
}
const funnyClick = () => {
    let a = new Password();
    generatedPassword.innerHTML=a.generateFunnyPassword();
    console.log("Funny Password Clicked!");
}

const copyPassword=()=>
{
    let copiedPassword = generatedPassword.innerText;
    navigator.clipboard.writeText(copiedPassword);
    console.log("Password Copied: ",copiedPassword);

}
