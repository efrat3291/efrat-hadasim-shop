interface CatalogProps {
    // Define your props here
}

const Catalog: React.FC<CatalogProps> = ({}: CatalogProps) => {
    return (
        <div className="page-content">
            <h1>Catalog</h1>
            <p>Welcome to the catalog page!</p>
            <br />
            <p>Here you can browse all the products available in our store.</p>

        </div>
    );
};

export default Catalog;