const tabsBtn = document.querySelectorAll(".buttons__item");
const tabsItems = document.querySelectorAll(".tabs__item");

tabsBtn.forEach((i) => {
    i.addEventListener("click", () => {
        let currentBtn = i;
        let tabId = currentBtn.getAttribute("data-tab")
        let currentTab = document.querySelector(tabId);


        tabsBtn.forEach((i) => {
            i.classList.remove('active');
        })

        tabsItems.forEach((i) => {
            i.classList.remove('active');
        })

        currentBtn.classList.add('active');
        currentTab.classList.add('active');
    })
});

document.querySelector('.buttons__item  ').click();
