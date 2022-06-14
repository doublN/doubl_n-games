export default function dateString(date){
    return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
}