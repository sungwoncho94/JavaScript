function sleep_3() {
  setTimeout(function(){
    console.log('Wake Up!')
  }, 3000)
}


console.log('Start Sleeping...')
sleep_3()
console.log('End of Program')