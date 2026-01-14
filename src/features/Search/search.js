import './search.css';

function Search() {
    const bedRoomOptions = ["Any Number", "Studio", "1+", "2+", "3+", "4+", "5+", "6+"];
    const bathOptions = ["Any Number", "1+", "2+", "3+", "4+", "5+", "6+"];
    const sortByOptions = [
        "Newest", 
        "Oldest", 
        "Least Expensive to Most", 
        "Most Expensive to Least", 
        "Bedrooms (Low to High)", 
        "Bedrooms (High to Low)", 
    ];

    return(
        <section className="search-section">
            <h2 className="main-title">Find Your Dream Home</h2>

            <div className="search-container">
                <h2 className="inner-title">Search Listings</h2>

                <div className="filter-item">
                    <label>Location</label>
                    <select className="search-select">
                        <option></option>
                    </select>
                </div>

                <div className="filter-item">
                    <label>Type</label>
                    <select className="search-select">
                        <option></option>
                    </select>
                </div>
                
                <div className="filter-item">
                    <label>Sort By</label>
                    <select className="search-select">
                        {sortByOptions.map((opt, index) => (
                            <option key={index} value={opt}>{opt}</option>))}
                    </select>
                </div>

                <div className="filter-item">
                    <label>Bedrooms</label>
                    <select className="search-select">
                        {bedRoomOptions.map((opt, index) => (
                            <option key={index} value={opt}>{opt}</option>
                        ))}
                    </select>
                </div>
                
                <div className="filter-item">
                    <label>Baths</label>
                    <select className="search-select">
                        {bathOptions.map((opt, index) => (
                            <option key={index} value={opt}>{opt}</option>
                        ))}
                    </select>
                </div>
                
                <div className="filter-item">
                    <label>Min Price</label>
                    <input type="number" placeholder="Min Price"/>
                </div>

                
                <div className="filter-item">
                    <label>Max Price</label>
                    <input type="number" placeholder="Max Price"/>
                </div>

                <button className="search-now-btn">SEARCH NOW</button>
            </div>
        </section>
    );
}

export default Search;