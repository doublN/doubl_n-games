import {useSearchParams} from 'react-router-dom'

export default function SortBar({sort, setSortBy, sortBy, setOrderBy, orderBy}) {
    const [searchParams, setSearchParams] = useSearchParams();
    
    function handleSortClick({target : {innerText}}){
        const formattedText = innerText.split(' ').join('_');
        setSortBy(formattedText);
        setSearchParams({'sort_by':formattedText, 'order' : orderBy});
    }

    function handleOrderClick({target : {innerText}}){
        let order = innerText === 'ascending' ? 'asc' : 'desc';
        setOrderBy(order);
        setSearchParams({'sort_by':sortBy, 'order' : order});
    }

    return (
        <div>
            <h3> Sort </h3>
            <ul>
                <li onClick={handleSortClick}>title</li>
                <li onClick={handleSortClick}>designer</li>
                <li onClick={handleSortClick}>owner</li>
                <li onClick={handleSortClick}>created at</li>
                <li onClick={handleSortClick}>comment count</li>
                <li onClick={handleSortClick}>votes</li>
            </ul>
            <hr></hr>
            <ul>
                <li onClick={handleOrderClick}>ascending</li>
                <li onClick={handleOrderClick}>descending</li>
            </ul>
        </div>
    )
}
