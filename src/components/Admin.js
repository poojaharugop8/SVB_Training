import axios from 'axios';
import { useState } from 'react';
import User from './User';

function Admin() {
    var [users, setUsers] = useState([]);
    var searchtext;
    function getSearchtext(e) {
        searchtext = e.target.value;
    }
    function searchUsers() {
        if (searchtext) {
            axios({
                method: 'get',
                url: 'http://localhost:5000/user/search?q=' + searchtext,
            }).then((response) => {
                console.log('we are getting response from search api', response);
                // now we will update users state
                setUsers(response.data.users);
            });
        }
    }
    console.log('users have value', users);
    return (
        <>
            <div className='container'>
                <h1>Search Users</h1>
                <div className='row'>
                    <div className='col-md-8'>
                        <input
                            onChange={getSearchtext}
                            className='form-control'
                            placeholder='Search Users'
                        />
                    </div>
                    <div className='col-md-4'>
                        <button onClick={searchUsers} className='btn btn-primary'>
                            Search
                        </button>
                    </div>
                </div>

                <div className='row'>
                    {users.map((each) => {
                        return <User data={each} />;
                    })}
                </div>
            </div>
        </>
    );
}

export default Admin;
