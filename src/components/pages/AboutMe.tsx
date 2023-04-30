import React from "react";

export default function AboutMe() {
    return (
        <div className="wholePage container">
        <div className="row">
            <div className="imageBanner aboutImg col-4"></div>
            <div className="col-8">
                <div className="sectionHeader row">
                    <h2>About Me</h2>
                </div>
                <div className="sectionBody row justify-content-center">
                    <p className="col-8 aboutBody"><em>With a proper growth mentality and enough 
                    hard work, the world is full of possibilities.</em></p>
                    <p className="col-8 aboutBody">I knew I wanted to learn to code when
                    I was a kid.  I taught myself how to create a game on the TI-83 
                    calculator I had in high-school and instantly fell in love. At the time 
                    there weren't a lot of college options, though, and after being blessed 
                    with my daughter, relocation wasn't in the cards either.</p>
                    <p className="col-8 aboutBody">So, I went to school for business, where I 
                    graduated with honors.  That just didn't quite do it for me either, 
                    so I signed up for law school and practiced law for a time.  Meanwhile, 
                    I met my wife and had my second child, my son. All the while, coding 
                    has never stopped being a hobby of mine.</p>
                    <p className="col-8 aboutBody">These days, I love to backpack, play 
                    all kinds of games, and I have an evergrowing collection of houseplants. 
                    Most noteworthy of all, though, I'm chasing my lifelong dream of becoming a software engineer.</p>
                </div>
            </div>
        </div>
        </div>
    )
}