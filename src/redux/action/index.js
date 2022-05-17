// export const add = () => {
//         return {
//             type: 'ADD'
//         }
// }

// export const remove = () => {
//     return {
//         type: 'REMOVE'
//     }
// }

// export const incNumber = () => {
//     return {
//         type: 'INCREMENT',
//         payload: 2
//     }
// };

export const incNumber = (num) => {
    return {
        type: 'INCREMENT',
        payload: num
    }
}

export const decNumber = (num) => {
    return {
        type: 'DECREMENT',
        payload: num

    }
};