import React from 'react';
import Modall from './Modal';
import "./Contest.css";

function Contest() {

    return (
        <>
            <div className="main_contests">
                <button type="button" class="btn btn-outline-light btn-md "><Modall className="platform" url={'https://kontests.net/api/v1/codeforces'} id={'cf'} name={'Codeforces'} /></button>
                <button type="button" class="btn btn-outline-light btn-md "><Modall className="platform" url={'https://kontests.net/api/v1/at_coder'} id={'at'} name={'At Coder'} /></button>
                <button type="button" class="btn btn-outline-light btn-md"><Modall className="platform" url={'https://kontests.net/api/v1/top_coder'} id={'tc'} name={'Top Coder'} /></button>
                <button type="button" class="btn btn-outline-light btn-md"><Modall className="platform" url={'https://kontests.net/api/v1/leet_code'} id={'lc'} name={'LeetCode'} /></button>
                <button type="button" class="btn btn-outline-light btn-md"><Modall className="platform" url={'https://kontests.net/api/v1/code_chef'} id={'cc'} name={'CodeChef'} /></button>
                <button type="button" class="btn btn-outline-light btn-md"><Modall className="platform" url={'https://kontests.net/api/v1/hacker_rank'} id={'hr'} name={'HackerRank'} /></button>
                <button type="button" class="btn btn-outline-light btn-md"><Modall className="platform" url={'https://kontests.net/api/v1/hacker_earth'} id={'he'} name={'HackerEarth'} /></button>

            </div>

        </>
    )
}

export default Contest;