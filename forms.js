function findselect(event){
    event.preventDefault();
    let options=document.querySelectorAll(".facultyoption");
    options.forEach((option) => {
         if (option.selected) {
      console.log(option.value);
         }
    });
}
