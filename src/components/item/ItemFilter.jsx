const ItemFilter = ({ originalData, setFilterData }) => {
    const setSearchValue = (searchValue) => {
        if (searchValue.trim() === '') {
            setFilterData(originalData);
        } else {
            const filtered = originalData.filter(item =>
                item.name.toLowerCase().includes(searchValue.toLowerCase())
            );
            setFilterData(filtered);
        }
    };

    return (
        <div className="mb-3 text-center">
            <input
                type="text"
                placeholder="Buscar por nombre..."
                onChange={(e) => setSearchValue(e.target.value)}
                className="form-control w-50 mx-auto"
            />
        </div>
    );
};


export default ItemFilter;
