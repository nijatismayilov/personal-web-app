import React from 'react';
import { Route } from 'react-router-dom';

import About from '../../components/about/about.component';
import SitesAndNewspapers from '../../components/sites-and-newspapers/sites-and-newspapers.component';
import Television from '../../components/television/television.component';
import ScientificWork from '../../components/scientific-work/scientific-work.component';

const HomePage = () => {
    return (
        <div className="homepage col-md-9">
            <Route path="/about" component={About} />
            <Route path="/sites" component={SitesAndNewspapers} />
            <Route path="/tv" component={Television} />
            <Route path="/scientific" component={ScientificWork} />
        </div>
    )
}

export default HomePage;