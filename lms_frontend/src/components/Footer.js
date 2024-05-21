import React from 'react';


function Footer() {
    const scrollToTop = (event) => {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // for smooth scrolling
        });
    };

    return (
        <div className='mt-4 pt-2 border-top'>
            <footer className="text-muted py-5">
                <div className="container">
                    <p className="float-end mb-1">
                        <a href="5" onClick={scrollToTop}>Back to top</a>
                    </p>
                    <p className="mb-1">
                        AJILA EdTech Pvt. Ltd.
                    </p>
                    <p className="mb-0">
                       AJILA <a href="/">Visit the homepage</a>. 
                    </p>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
