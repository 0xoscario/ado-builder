// ModuleSearchForm - A search component which passes down configuration to ADO listings for retrieval and sorting
import React, {useState} from 'react'

//Load Content Components
import ModuleSearchResults from './ModuleSearchResults'

//Load Interface Components & Iconography
import SearchIcon from '@material-ui/icons/SearchOutlined'

//Establish Category Types For Selective Listings
//(currently placeholder data)
const categoryList= [
    {id: 3, name: 'splitters'},
    {id: 4, name: 'pollers'},
    {id: 5, name: 'tickler'},
    {id: 6, name: 'validator'},
    {id: 7, name: 'requestors'},
    {id: 8, name: 'conditionals'},
    {id: 9, name: 'royalties'},
    {id: 10, name: 'storage'},
    {id: 11, name: 'computation'},
    {id: 12, name: 'oracles'}
  ];



const ModuleSearchForm = () => {
    const [searchText, setSearchText] = useState("")
    const [categoryFilter, setCategoryFilter] = useState("all")

    const showCategories = categoryList.map((category) => 
        <option key={category.id} value={category.name}>{category.name}</option>
    )

    return (
        <div id="ModuleSearchForm">
            <div className="row">
                <div className="col">
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <button className="btn btn-light btn-outline-secondary border-0" type="button" id="button-addon1"><SearchIcon color="primary" /></button>
                        </div>
                        <input type="text" className="form-control" onChange={event => setSearchText(event.target.value)} placeholder="Search..." aria-label="Search modules." aria-describedby="button-addon1" />
                    </div>
                </div>

                <div className="col">
                    <div className="input-group">
                        <select className="custom-select" id="inputGroupSelect04" onChange={event => setCategoryFilter(event.target.value)} aria-label="Example select with button addon">
                            <option key="open" value="all" defaultValue="selected" disabled>Search by Category</option>
                            <option key="all" value="all">All</option>
                            {showCategories}
                        </select>
                    </div>
                </div>
                
                <div className="col">
                    <div className="input-group">
                        <select className="custom-select" id="inputGroupSelect04" aria-label="Filter Modules" disabled >
                            <option>Filter</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </div>

                <div className="col">
                    <div className="input-group">
                        <select className="custom-select" id="inputGroupSelect04" aria-label="Saved Modules" disabled>
                            <option value="selected">Saved</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </div>
            </div>
                <ModuleSearchResults searchText={searchText} categoryFilter={categoryFilter}/>
        </div>

    )
}

export default ModuleSearchForm