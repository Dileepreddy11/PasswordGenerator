const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
        const numberChars = "0123456789";
        const specialChars = "!@#$%^&*";

        document.getElementById("generateButton").addEventListener("click", generatePassword);

        function generatePassword() {
            const uppercaseChecked = document.getElementById("uppercaseCheckbox").checked;
            const lowercaseChecked = document.getElementById("lowercaseCheckbox").checked;
            const numbersChecked = document.getElementById("numbersCheckbox").checked;
            const specialCharsChecked = document.getElementById("specialCharsCheckbox").checked;
            const passwordLength = document.getElementById("passwordLength").value;

            let characterSet = "";
            let password = "";

            if (uppercaseChecked) characterSet += uppercaseChars;
            if (lowercaseChecked) characterSet += lowercaseChars;
            if (numbersChecked) characterSet += numberChars;
            if (specialCharsChecked) characterSet += specialChars;

            if (characterSet.length === 0) {
                alert("Please, select atleast one type of character(checkbox).");
                return;
            }

            for (let i = 0; i < passwordLength; i++) {
                const randomIndex = Math.floor(Math.random() * characterSet.length);
                password += characterSet[randomIndex];
            }

            document.getElementById("passwordOutput").textContent = password;
        }