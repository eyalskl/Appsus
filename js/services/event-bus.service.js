
const bus = new Vue();


// bus.$on('show-msg', (data)=>{
//     console.log('Got Puk!', data);
// })

// bus.$emit('show-msg', 9)
// bus.$emit('show-msg', 10)
// bus.$emit('show-msg', 2)

export const eventBus = bus;