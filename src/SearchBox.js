import React from "react";


const SearchBox = ({searchfield, searchChange}) => {
            return (
                <div>
                    <input className="pa3 ba b--green bg-lightest-blue br2 shadow-1"   
                    type="search" 
                    placeholder="Search for your RoboBud"
                    onChange = {searchChange}
                    />
                </div>
                
            )
}



export default SearchBox;