export const edit_class = (action, element, class_name) => {
    if (element) {
        if (action === "remove" && class_name) {
          if (element.classList.contains(class_name)) {
            let re = new RegExp(`\\b${class_name}\\b`, 'g');
            element.className = element.className.replace(re, "").trim();
          }
        }
        else if (action === "add" && class_name) {
            if (element.className.split(" ").indexOf(class_name) === -1) {
                element.className += " " + class_name;
            }
        }
    }
    return;
}

export const debouncer = (func, wait) => { //callback func must be passed in
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };

        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

export const scroll_to_top = () => {
    window.scrollTo({ top: 0 });
}