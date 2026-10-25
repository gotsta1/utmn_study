if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

function init() {
    const data = {
        name: 'Каталог товаров',
        items: [
            {
                name: 'Мойки',
                items: [
                    {
                        name: 'Ulgran',
                        items: [{ name: 'Smth' }, { name: 'Smth' }]
                    },
                    { name: 'Vigro Mramor' },
                    {
                        name: 'Handmade',
                        items: [{ name: 'Smth' }, { name: 'Smth' }]
                    },
                    { name: 'Vigro Glass' }
                ]
            },
            {
                name: 'Фильтры',
                items: [
                    {
                        name: 'Ulgran',
                        items: [{ name: 'Smth' }, { name: 'Smth' }]
                    },
                    { name: 'Vigro Mramor' }
                ]
            }
        ]
    };

    const items = new ListItems(document.getElementById('list-items'), data);
    items.init();
}

function ListItems(el, data) {
    this.el = el;
    this.data = data;

    this.init = function () {
        this.render();

        this.el.addEventListener('click', (event) => {
            const button = event.target.closest('[data-open]');

            if (!button || !this.el.contains(button)) {
                return;
            }

            this.toggleItems(button.closest('[data-parent]'));
        });
    };

    this.render = function () {
        this.el.replaceChildren(this.renderParent(this.data));
    };

    this.renderParent = function (item) {
        if (!item.items || item.items.length === 0) {
            return this.renderChildren(item);
        }

        const parent = document.createElement('div');
        parent.className = 'list-item list-item_open';
        parent.setAttribute('data-parent', '');

        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'list-item__inner list-item__toggle';
        button.setAttribute('data-open', '');
        button.setAttribute('aria-expanded', 'true');
        button.innerHTML = `
            <img class="list-item__arrow" src="img/chevron-down.png" alt="">
            <img class="list-item__folder" src="img/folder.png" alt="">
            <span></span>
        `;
        button.querySelector('span').textContent = item.name;

        const children = document.createElement('div');
        children.className = 'list-item__items';

        for (const child of item.items) {
            children.append(this.renderParent(child));
        }

        parent.append(button, children);
        return parent;
    };

    this.renderChildren = function (item) {
        const child = document.createElement('div');
        child.className = 'list-item';
        child.innerHTML = `
            <div class="list-item__inner list-item__leaf">
                <img class="list-item__folder" src="img/folder.png" alt="">
                <span></span>
            </div>
        `;
        child.querySelector('span').textContent = item.name;
        return child;
    };

    this.toggleItems = function (parent) {
        const isOpen = parent.classList.toggle('list-item_open');
        parent.querySelector('[data-open]').setAttribute('aria-expanded', String(isOpen));
    };
}
