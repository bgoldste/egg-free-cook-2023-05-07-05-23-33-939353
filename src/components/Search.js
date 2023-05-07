import { useState , useEffect, useRef} from 'react';
import reviewData from '@/data/review_data.json';
import guideData from '@/data/sc_data.json'
import review from "@/components/Review";
import Link from "next/link"
export default function Search() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const dropdownRef = useRef(null);
    const data = reviewData.posts.concat(guideData.posts);
    const handleSearch = e => {
        const term = e.target.value;
        setSearchTerm(term);

        // Filter the data based on the search term
        const results = data.filter(
            item =>
                item.title.toLowerCase().includes(term.toLowerCase()) ||
                item.content.toLowerCase().includes(term.toLowerCase())
        );

        setSearchResults(results);
    };

    const handleClickOutside = e => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
            setSearchResults([]);
        }
    };

    useEffect(() => {
        window.addEventListener('click', handleClickOutside);
        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className="dropdown dropdown-end" ref={dropdownRef}>

    <input
        id="searchInput"
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search..."
        className="w-full bg-white border-2 border-gray-300 rounded-md py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
    />

    { (searchResults.length > 0 && searchTerm.length > 0) && (
        // <ul tabIndex={0} className="menu dropdown-content  bg-primary-content p-0 shadow bg-base-100 rounded-box mx-auto w-72 mt-4">
        <ul className="menu dropdown-content w-60 mx-auto bg-primary-content p-2 shadow bg-base-100 rounded-box  mt-2 z-10">
        {/*<ul className="absolute bg-primary-content p-2 shadow bg-base-100 rounded-box w-full mt-2">*/}
            {searchResults.slice(0,10).map(item => (
                <li key={item.id}>
                    <Link className="text-white hover:underline" href={item.slug}>
                       {item.title}
                    </Link>
                </li>
            ))}
        </ul>
    )}
</div>
    );
}
