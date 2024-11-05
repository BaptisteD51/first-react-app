function ProductPageLayout({ categories, shoppingList, pageTitle }) {
    return (
        <section className="wrapper flex gap-5 shadow-md shadow-black max-sm:flex-col">
            {categories}
            <main className="py-12 product-list">
                <h1 className="product-page-title">{pageTitle}</h1>
                {shoppingList}
            </main>
        </section>
    )
}

export default ProductPageLayout
