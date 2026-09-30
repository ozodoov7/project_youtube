const registerForm = document.querySelector("#registerForm")
const usernameInput = document.querySelector("#usernameInput")
const passwordInput = document.querySelector("#passwordInput")
const uploadInput = document.querySelector("#uploadInput")

const registerAPI=''
registerForm.addEventListener("submit", async (e)=>{
    e.preventDefault()

    const user = usernameInput.value
    const password = passwordInput.value
    const photo = uploadInput.file[0]
    const formData = new FormData()
    formData.append("username", user)
    formData.append("password", password)
    formData.append("photo", photo)

    try {
        const res = await axios.post(registerAPI, formData)
        console.log("Muvaffaqiyatli qo'shildi")
    } catch(error){
        console.log(`Xatolik yuz bedi, ${error.message}`)
    }

})