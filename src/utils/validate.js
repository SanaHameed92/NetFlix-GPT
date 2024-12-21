export const ValidateForm = (Fullname,email,password) =>{
    const isName = /^[a-zA-Z\s'-]+$/.test(Fullname)
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    const isPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(password)

    
    if(!isName)  return "Name should not contain special character or numbers"
    if(!isEmail) return "Invalid email";
    if (!isPassword) return "Invalid password"

    return null
}