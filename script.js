
// Animation Software Engineer
document.addEventListener('DOMContentLoaded',()=>{
    const roles = ['MERN Stack Developer']
    const roleElement = document.getElementById('role');

    let roleIndex = 0;
    let letterIndex = 0;
    let typingInterval;

    function typeRole(){
        roleElement.style.opacity = 0;
        setTimeout(()=>{
            roleElement.textContent = "";
            letterIndex = 0;
            typingInterval = setInterval(()=>{
                if(letterIndex <roles[roleIndex].length){
                    roleElement.textContent += roles[roleIndex].charAt(letterIndex);
                    letterIndex++;
                }else{
                    clearInterval(typingInterval)
                    setTimeout(()=>{
                        roleIndex = (roleIndex +1)% roles.length
                        typeRole()
                    },1000);
                }
            },150);
            roleElement.style.opacity = 1;
        },1000);
    }
    typeRole();
})

// Projects Buttons Apply
document.addEventListener("DOMContentLoaded", () => {

    const filterButtons = document.querySelectorAll(".projects-list li");
    const projects = document.querySelectorAll(".projects-box");

    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {

            // Remove active class from all buttons
            filterButtons.forEach((btn) => {
                btn.classList.remove("active");
            });

            // Add active class to clicked button
            button.classList.add("active");

            // Get selected filter value
            const filterValue = button.getAttribute("data-filter");

            // Show matching projects
            projects.forEach((project) => {
                const category = project.getAttribute("data-category");

                if (filterValue === "all" || category === filterValue) {
                    project.style.display = "flex";
                } else {
                    project.style.display = "none";
                }
            });

        });
    });

});

// profile card
document.addEventListener("DOMContentLoaded",()=>{
   const listItems = document.querySelectorAll(".profile-menu-icons li")
   listItems.forEach((li)=>{
    li.addEventListener("click",()=>{
        listItems.forEach((item)=>{
            item.querySelector("i").style.color = ""; // emptyArray is any code/images etc remove it.
        })
        li.querySelector("i").style.color = "var(--secondary-color)"
    })
   })
});

// https://sunset-valley-retreat.vercel.app/