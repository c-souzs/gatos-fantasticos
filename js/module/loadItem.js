export default function addEventLoadItem(listItem) {
    
    const loadItem = (e) => {
        const element = e.currentTarget;
        const dadElement = element.parentNode;

        const skeleton = dadElement.querySelector('div');
        skeleton.remove();
    }

    listItem.forEach(item => {
        item.addEventListener('load', loadItem);
    });
}