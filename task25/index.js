

const modals = () => {
    function bindModals(btn_trigger, modal) {
        btn_trigger.addEventListener('click', () => {
            // modal.classList.add('open-1');
            // console.log(classList);
            modal.style.display = "block";
        })
    }
    let btn = document.querySelector('.button-1');
    let modal = document.querySelector('.modal-1');
    bindModals(btn, modal);
}
// export default modals;
