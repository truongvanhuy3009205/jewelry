// load sản phẩm
const products = document.querySelector('.products');
const getData = async () => {
   
        const response = await fetch('data.json');
        const data = await response.json();
        console.log(data);
        if (data) {
            products.innerHTML = data.map(item => {
                return `
                    <div class="chitiet1">
                        <img src="${item.img}" alt="">
                        <h2>${item.title}</h2>
                        <div class="button">
                            <p>$ ${item.price}</p>
                            <button><a href="detail/detail.html?id=${item.id}">Buy now</a></button>
                        </div>
                    </div>
                `;
            }).join('');
        }

};

getData();