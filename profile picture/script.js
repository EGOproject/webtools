document.querySelector(".profile-image").addEventListener("click",
    function() {
        document.querySelector(".file-upload").click();
    });

document.querySelector(".file-upload").addEventListener("change",
    function() {
        if (this.files && this.files[0]) {
            const reader = new FileReader();
            reader.onload = function(e) {
                document.querySelector(".profile-pic").setAttribute("src", e.target.result);
            }
            reader.readAsDataURL(this.files[0]);
        }
    });
