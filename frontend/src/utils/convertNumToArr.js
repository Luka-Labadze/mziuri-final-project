export const convertNumToArr = (num) => {
    return Array.from({ length: num }, (_, i) => i + 1)
}