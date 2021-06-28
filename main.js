// let str = `
// 010-1234-5678
// solidesite@gmail.com
// https://www.omdbapi.com/?apikey=7035c60c&s=frozen
// The quick brown fox jumps over the lazy dog.
// abbcccdddd
// http://localhost:1234
// `

// //정규표현식
// // const regexp = new RegExp('the', 'g')
// const regexp = /fox/gi
// console.log(regexp.test(str))
// console.log(str.replace(regexp, 'AAA'))
// // str = str.replace(regexp, 'AAA') //변경된 내용 원본 데이터에 저장
// console.log(str)

// //플래그
// const regexp2 = /the/gi
// console.log(str.match(regexp2))

//m 플래그
// console.log(
//     str.match(/\.$/gim))

//패턴
// const h = `  the brown  fox     !

// `
// console.log(
//     h.replace(/\s/g, '')
// ) //문자의 모든 공백 삭제 명령


//앞,뒤 일치 패턴
const str = `
010-1234-5678
solidesite@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

console.log(
    str.match(/.{1,}(?=@)/g)
)