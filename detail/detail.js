const detailContainer = document.querySelector('.detail-container');

const getDetailProduct = async () => {
        const path = new URLSearchParams(window.location.search);

        const productId = path.get('id');

        const response = await fetch('../data.json');
        const data = await response.json();

        const findProductId = data.find(item => item.id.toString() === productId.toString());

        // Hiển thị thông tin chi tiết sản phẩm
        detailContainer.innerHTML = `
                <div class="details__row">
                    <div class="details__row--img">
                        <img width="550px" height="500px" src="../${findProductId.img}" alt="${findProductId.title}">
                        <p>${findProductId.mota}</p>
                    </div>
                    <div class="details__row--text">
                        <h1>${findProductId.title}</h1>
                        <span class='code'>SKU: ${findProductId.id}</span>
                        <span class="price">$${findProductId.price}</span>
                        <h4>Quantity</h4>
                        <input type="number" id='quantity' value="1">
                        <button class="btn btn--add">Add to Cart</button>

                        <div class="details__info">
                            <div class="details__info--show">
                                <h2>PRODUCT INFO</h2>
                                <span class="add1"><i class="fas fa-plus"></i></span>
                            </div>
                        </div>
                        <div class="details__info">
                            <div class="details__info--show">
                                <h2>RETURN & REFUND POLICY</h2>
                                <span class="add1"><i class="fas fa-plus"></i></span>
                            </div>
                        </div>
                        <div class="details__info">
                            <div class="details__info--show">
                                <h2>SHIPPING INFO</h2>
                                <span class="add1"><i class="fas fa-plus"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
        `;
};
getDetailProduct();

