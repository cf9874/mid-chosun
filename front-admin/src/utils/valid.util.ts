export const birthValidCheck = (dateOfBirth: string) => {
  const dateRegex = /^[0-9]{2}([0]\d|[1][0-2])([0][1-9]|[1-2]\d|[3][0-1])/

  if (dateRegex.test(dateOfBirth)) {
    return true
  }
  return false
}
export const passwordValidCheck = (password: string) => {
  if (password.length >= 8 && password.length <= 16) {
    return true
  }
  return false
}

export const emailValidCheck = (email: string) => {
  const emailRegex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i

  if (emailRegex.test(email)) {
    return true
  }
  return false
}
